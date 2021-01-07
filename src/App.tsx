import MainMap from "@deck.gl/react";
import React from "react";
import { hot } from "react-hot-loader";
import { StaticMap } from "react-map-gl";

const INITIAL_VIEW_STATE = {
  longitude: -104.9903,
  latitude: 39.7392,
  zoom: 11,
  pitch: 0,
  bearing: 0,
};

const App = () => (
  <main className="App">
    <MainMap controller initialViewState={INITIAL_VIEW_STATE}>
      <StaticMap
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        width={400}
        height={400}
      />
    </MainMap>
  </main>
);

export default hot(module)(App);
