import React from "react";
import { render, screen,fireEvent } from "@testing-library/react";
import Accordion from "../Accordion";
// import { accordionData } from "./data";

test("can open accordion items to see the contents", () => {
  const hats = {id:1, heading: "Favorite Hats", content: "Fedoras are classy" };
  const footware = {id:2,
   heading: "Favorite Footware",
    content: "Flipflops are the best",
  };
let accordionData =[hats,footware]
  render(
<Accordion accordionData={accordionData} />  );

  expect(screen.getByTestId("list"+hats.id)).toBeInTheDocument();
  expect(screen.getByTestId("list"+footware.id)).toBeInTheDocument();
  fireEvent.click(screen.getByText(footware.heading));
  expect(screen.getByText(footware.content)).toBeInTheDocument();
  expect(screen.queryByText(hats.content)).toBeNull();
});
