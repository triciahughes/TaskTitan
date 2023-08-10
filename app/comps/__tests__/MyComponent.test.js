import React from "react";
import { render, screen } from "../test-utils";
import Button from "@mui/material/Button";

describe("Add", () => {
  it("should render a button", () => {
    const textToFind = "add to list";

    render(<Button>add to list</Button>);
    const button = screen.getByText(textToFind);

    expect(button).toBeInTheDocument();
  });
});
