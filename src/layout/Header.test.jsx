import App from "../App.jsx";
import { Provider } from "react-redux";
import { MyContextProvider } from "../context/myContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { myStore } from "../store/store.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient.js";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Header Tests", () => {
  test("Change title test", async () => {
    render(
      <Provider store={myStore}>
        <MyContextProvider>
          <BrowserRouter>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </BrowserRouter>
        </MyContextProvider>
      </Provider>
    );

    const titleInput = screen.getByTestId("title-input");
    await userEvent.type(titleInput, "JS Tests");

    const changeTitleBtn = screen.getByTestId("change-title-btn");
    await userEvent.click(changeTitleBtn);

    const storeTitle = screen.getByTestId("store-title");

    expect(storeTitle).toHaveTextContent("JS Tests");
  });
});
