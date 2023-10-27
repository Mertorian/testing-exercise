import { render, screen } from "@testing-library/react";
import App from "./App.jsx";
import { describe, expect, it } from "vitest";

describe("App", () => {
  it("should contain 'Vite + React'", async () => {
    render(<App />);
    const result = await screen.findByText("Vite + React");
    expect(result).toBeDefined();
  });
});
