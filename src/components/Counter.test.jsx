import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter Tests", () => {
  test("Counter render test", () => {
    render(<Counter />);
  });

  test("Counter initial value test", () => {
    // arrangement
    render(<Counter counterInitial={50} />);

    // act
    const countValue = screen.getByTestId("count-value");

    // assert
    expect(countValue).toHaveTextContent("50");
  });

  test("Counter hide test", () => {
    // arrangement
    render(<Counter hide={true} />);

    screen.debug();

    // act
    const countContainer = screen.getByTestId("counter-container");

    // assert
    expect(countContainer).toHaveClass("hidden");
    expect(screen.getByTestId("count-value")).not.toBeVisible();
  });

  test("Counter artis testi", async () => {
    // arrangement
    render(<Counter hide={true} counterInitial={10} />);

    // act
    const arttirBtn = screen.getByTestId("counter-arttir-btn");

    await userEvent.click(arttirBtn);
    await userEvent.click(arttirBtn);
    await userEvent.click(arttirBtn);

    // assert
    expect(screen.getByTestId("count-value")).toHaveTextContent("19");
  });
});
