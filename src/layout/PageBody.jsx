import { CounterPage } from "../pages/CounterPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { LoginUseFormPage } from "../pages/LoginUseFormPage";
import { ProductsPage } from "../pages/ProductsPage";

export const PageBody = () => {
  return (
    <div className="page-content">
      {/* Ana Sayfa Componenti */}
      {/* Ürünler Sayfa Componenti */}
      <LoginUseFormPage />
      <LoginPage />
      <HomePage />
      <CounterPage />
      <ProductsPage />
    </div>
  );
};
