import BasketPage from 'pages/BasketPage/BasketPage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import CatalogPageEn from 'pages/CatalogPageEn/CatalogPageEn';
import ItemDetails from 'components/ItemDetails/ItemDetails';
import MainPage from 'pages/MainPage/MainPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppBar from './AppBar/AppBar';
import Bathroom from './Catalog/Bathroom/Bathroom';
import Colour from './Catalog/Colour/Colour';
import Individual from './Catalog/Individual/Individual';
import Kids from './Catalog/Kids/Kids';
import Plaids from './Catalog/Plaids/Plaids';
import Footer from './Footer/Footer';

export const App = () => {
  const location = useLocation();
  const catalogLocation = location.pathname.indexOf('catalog');
  const basketLocation = location.pathname.indexOf('basket');

  return (
    <div>
      {catalogLocation !== -1 || basketLocation !== -1 ? (
        <AppBar accent={true} />
      ) : (
        <AppBar accent={false} />
      )}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="catalog" element={<CatalogPage />}>
          <Route path="plaids" element={<Plaids />}>
            <Route path=":itemId" element={<ItemDetails />} />
          </Route>
          <Route path="kids" element={<Kids />}>
            <Route path=":itemId" element={<ItemDetails />} />
          </Route>
          <Route path="bathroom" element={<Bathroom />}>
            <Route path=":itemId" element={<ItemDetails />} />
          </Route>
          <Route path="colour" element={<Colour />} />
          <Route path="individual" element={<Individual />} />
        </Route>
        <Route path="en" element={<CatalogPageEn />} />
        <Route path="basket" element={<BasketPage />} />
      </Routes>
      <Footer />
      <ToastContainer autoClose={5000} />
    </div>
  );
};
