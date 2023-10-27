import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MyButton } from "./MyButton";

describe("MyButton", () => {
  it("should render with a button component", () => {
    const buttonTitle = "test-text";
    const { getByRole } = render(<MyButton text={buttonTitle} />);
    expect(getByRole("button", { name: buttonTitle })).toBeInTheDocument();
  });

  it("should render a button container", () => {
    const { getByTestId } = render(<MyButton />);
    expect(getByTestId("my-button-container")).toBeInTheDocument();
  });

  it("should call the onClick event handler", () => {
    const buttonTitle = "test-text";
    const onClickEvent = vi.fn();
    const { getByRole } = render(
      <MyButton text={buttonTitle} onClick={onClickEvent} />
    );
    fireEvent.click(getByRole("button", { name: buttonTitle }));
    expect(onClickEvent).toBeCalledTimes(1);
  });
});
