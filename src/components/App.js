import React, { useEffect, useState } from "react";
import axios from "axios"
/*import getDataApi from "../services/api.js";*/
import List from "./List.jsx";
import Contact from "./Contact.jsx";
import "../styles/Contact.css";
import '../styles/App.css';



function App() {
 
  const [productList, setProductList] = useState([]);


  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((resp) => {
        setProductList(resp.data);
    });
  }, []);



  return (
    <>
      <h1>Mi tienda de ropa y complementos</h1>
      <Contact />
      <List productList ={productList} />
     
    </>
  );
}


export default App;
