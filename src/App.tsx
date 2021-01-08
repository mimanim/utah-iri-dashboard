import React from "react";
import { hot } from "react-hot-loader";

import MapComponent from "./components/Map";

const App = () => (
  <main className="App">
    <MapComponent />
  </main>
);

export default hot(module)(App);
