import React, { useEffect, useState } from "react";
import axios from "axios"
/*import getDataApi from "../services/api.js";*/
import List from "./List.jsx"
import Electronics from "./Electronics"
import Jewelery from "./Jewelery"
import MensClothing from "./MensClothing"
import WomensClothing from "./WomensClothing"
import Page404 from "./Page404.jsx"
import NavBar from "./NavBar.jsx";
import '../styles/App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import ProductContext from "../usecontext/ProductContext";


function App() {
 
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((resp) => {
        //console.log(resp.data);
        setProductList(resp.data);
    });
  }, []);

  return (
    <ProductContext.Provider value={productList}>
      <BrowserRouter>
          <Routes>
            <Route element={<NavBar />} path="/"/>
            <Route path="/list" element={<List />} />
            <Route element={<Electronics />} path="/Electronics"/> 
            <Route element={<Jewelery />} path="/Jewelery"/>
            <Route element={<MensClothing />} path="/MensClothing"/>
            <Route element={<WomensClothing />} path="/WomensClothing"/>
            <Route path="*" element={<Page404 />}/>
          </Routes>
      </BrowserRouter>
    </ProductContext.Provider>
  );
}


export default App;
