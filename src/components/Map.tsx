import { MapView } from "@deck.gl/core";
import { GeoJsonLayer } from "@deck.gl/layers";
import MapController from "@deck.gl/react";
import React, { useEffect, useState } from "react";
import { StaticMap } from "react-map-gl";

import { iriValueToCategory, iriValueToRoadColor } from "../helpers";

const INITIAL_VIEW_STATE = {
  longitude: -111.0937,
  latitude: 39.321,
  zoom: 7,
  pitch: 35,
  bearing: -7,
};

const LAT_RANGE = [36.9982, 42.0012];
const LON_RANGE = [-114.0518, -109.0419];

const MapComponent = (): JSX.Element => {
  const [streetCenterlines, setStreetCenterlines] = useState([]);

  useEffect(() => {
    let stale = false;

    fetch(
      "https://opendata.arcgis.com/datasets/9a7f3dfbda7f4921a71154eae6bac867_0.geojson"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        if (stale) {
          return;
        }
        setStreetCenterlines(responseJson.features);
      });

    return () => {
      stale = true;
    };
  }, []);

  const layers = [
    new GeoJsonLayer({
      id: "street-centerlines",
      data: streetCenterlines,
      pickable: true,
      lineWidthMinPixels: 1.5,
      getFillColor: [160, 160, 180, 200],
      getLineColor: (d) => iriValueToRoadColor(d.properties.IRI_2018),
      getLineWidth: 10,
    }),
  ];

  const mainMapView = new MapView({
    maxZoom: 18,
    minZoom: 7,
  });
  const views = [mainMapView];

  return (
    <MapController
      controller
      getTooltip={(i) =>
        i.object
          ? `Route ${parseInt((i.object as any).properties.Route, 10)}\nMM ${
              (i.object as any).properties.From_
            }-${(i.object as any).properties.To_}\n\n2018 IRI: ${
              (i.object as any).properties.IRI_2018
            } (${iriValueToCategory((i.object as any).properties.IRI_2018)})`
          : (null as any)
      }
      initialViewState={INITIAL_VIEW_STATE}
      layers={layers}
      onViewStateChange={({ viewState }) => {
        viewState.latitude = Math.min(
          LAT_RANGE[1],
          Math.max(LAT_RANGE[0], viewState.latitude)
        );
        viewState.longitude = Math.min(
          LON_RANGE[1],
          Math.max(LON_RANGE[0], viewState.longitude)
        );

        return viewState;
      }}
      views={views}
    >
      <StaticMap
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        width="400"
        height="400"
      />
    </MapController>
  );
};

export default MapComponent;
