import { CounterPage } from "../pages/CounterPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ProductsPage } from "../pages/ProductsPage";

export const PageBody = () => {
  return (
    <div className="page-content">
      {/* Ana Sayfa Componenti */}
      {/* Ürünler Sayfa Componenti */}
      <LoginPage />
      <HomePage />
      <CounterPage />
      <ProductsPage />
    </div>
  );
};
