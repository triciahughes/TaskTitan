// Importing the necessary modules and components
import React from "react"; // Base React library
import { render, screen } from "../test-utils"; // Utilities for rendering components in tests and querying the DOM
import Button from "@mui/material/Button"; // Button component from Material-UI

// Describe block groups related tests under the name "add to list button"
describe("add to list button", () => {
  // This is an individual test case
  it("should render a button", () => {
    // Defining the text we want to search for in the rendered output
    const textToFind = "add to list";

    // Rendering the Button component with the text "add to list"
    render(<Button>add to list</Button>);

    // Using the screen utility to get the button element with the specified text
    const button = screen.getByText(textToFind);

    // The assertion checks if the found button is present in the document
    expect(button).toBeInTheDocument();
  });
});
