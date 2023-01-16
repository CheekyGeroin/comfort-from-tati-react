import BasketPage from "pages/BasketPage/BasketPage";
import CatalogPage from "pages/CatalogPage/CatalogPage";
import CatalogPageEn from "pages/CatalogPageEn/CatalogPageEn";
import ItemDetails from "pages/ItemDetails/ItemDetails";
import MainPage from "pages/MainPage/MainPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppBar from "./AppBar/AppBar";
import Footer from "./Footer/Footer";

export const App = () => {
  const location = useLocation()
  const catalogLocation = location.pathname.indexOf('catalog')
  
  
  return (
    <div>
      {catalogLocation !== -1 ? <AppBar accent={true} /> : <AppBar accent={false} />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="catalog/:catalogId" element={<CatalogPage />} />
        <Route path="catalog/:catalogId/:itemId" element={<ItemDetails/>} />
        <Route path="en" element={<CatalogPageEn />} />
        <Route path="basket" element={<BasketPage />} />
      </Routes>
      <Footer/>
      <ToastContainer autoClose={5000} />
    </div>
  );
};
