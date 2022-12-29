import BasketPage from "pages/BasketPage/BasketPage";
import CatalogPage from "pages/CatalogPage/CatalogPage";
import CatalogPageEn from "pages/CatalogPageEn/CatalogPageEn";
import MainPage from "pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppBar from "./AppBar/AppBar";
import Footer from "./Footer/Footer";

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/en" element={<CatalogPageEn />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      <Footer/>
      <ToastContainer autoClose={5000} />
    </div>
  );
};
