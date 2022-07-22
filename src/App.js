import React from "react";
import Accordion from "./components/Accordion/Accordion";
import { accordionData } from "./data";

const App = () => {
  return <Accordion accordionData={accordionData} />;
};

export default App;
