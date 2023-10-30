import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("should render the initial valiue in the Counter", () => {
    const { getByText } = render(<Counter />);
    expect(getByText("Counter: 0")).toBeInTheDocument();
  });

  it("should verify that increment increases correctly onClick", () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText("Increment"));
    expect(getByText("Counter: 1")).toBeInTheDocument;
  });

  it("should verify that decrement decreases correctly onClick", () => {
    const { getByText } = render(<Counter />);
    fireEvent.click(getByText("Decrement"));
    expect(getByText("Counter: 0")).toBeInTheDocument;
  });

  it("should not let increment increase above 10", () => {
    const { getByText } = render(<Counter />);
    for (let i = 0; i < 12; i++) {
      fireEvent.click(getByText("Increment"));
    }
    expect(getByText("Counter: 10")).toBeInTheDocument();
  });

  it("should not let decrement decrease below 0", () => {
    const { getByText } = render(<Counter />);
    for (let i = 0; i < 12; i++) {
      fireEvent.click(getByText("Decrement"));
    }
    expect(getByText("Counter: 0")).toBeInTheDocument();
  });
});
