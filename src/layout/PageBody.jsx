import React, { Suspense } from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { LoginUseFormPage } from "../pages/LoginUseFormPage";
import { ProductDetailPage } from "../pages/ProductDetailPage";
import { ProductsPage } from "../pages/ProductsPage";
import { CounterPage } from "../pages/CounterPage";
import { PersonelListesi } from "../pages/PersonelListesi";

// const ProductsPage = React.lazy(() => import("./../pages/ProductsPage"));
// const CounterPage = React.lazy(() => import("./../pages/CounterPage"));

export const PageBody = ({ user, setUser }) => {
  return (
    <div className="page-content">
      {/* Ana Sayfa Componenti */}
      {/* Ürünler Sayfa Componenti */}
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <LoginUseFormPage setUser={setUser} />
          </Route>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/personel">
            <PersonelListesi />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route
            path="/products/detail/:productName/:productId"
            exact
            render={(location) => {
              console.log("location", location);
              if (user?.email) {
                return <ProductDetailPage />;
              }
              return (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: {
                      referrer: location.location.pathname,
                    },
                  }}
                ></Redirect>
              );
            }}
          ></Route>
          <Route path="*">
            <h2>404 - Sayfa Bulunamadı</h2>
          </Route>
        </Switch>
      </Suspense>
      {/* <LoginPage /> */}
    </div>
  );
};
