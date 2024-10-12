import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Catalog from "../pages/Catalog";
import Contacts from "../pages/Contacts";
import Faq from "../pages/Faq";
import SellingPoints from "../pages/SellingPoints";
import ProductDetail from '../pages/ProductDetail'


export const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route  index element={<Home />} />   
      <Route path="about" element={<About />} />  
      <Route path="catalog" element={<Catalog />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="faq" element={<Faq />} />
      <Route path="selling-points" element={<SellingPoints />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Route>
  )
);
