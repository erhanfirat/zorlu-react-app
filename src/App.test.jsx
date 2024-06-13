import App from "./App.jsx";
import { Provider } from "react-redux";
import { MyContextProvider } from "./context/myContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { myStore } from "./store/store.js";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/queryClient.js";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

describe("App", () => {
  it("Uygulama başarıyla yüklendi!", () => {
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
  });

  it("Check Store Title", () => {
    // Arrange
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

    const storeTitle = screen.getByTestId("store-title");

    expect(storeTitle).toHaveTextContent("MyReact App");
  });
});
