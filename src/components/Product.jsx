import React from "react";
import '../styles/Product.css';

function Product ( { item } ) {
    return (
        <div className="box">
            <li className="item">
                <h2>{item.title}</h2>
                <img src={item.image} alt="" />
                <h3>Precio en €: {item.price}</h3>
        </li>
        </div>
        
        
        
    );
}

export default Product;