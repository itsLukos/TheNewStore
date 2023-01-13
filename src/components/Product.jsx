import React from "react";

function Product ( { item } ) {
    return (
        <li >
            <h2>{item.title}</h2>
            <img src={item.image} alt="" />
            <p>Precio en €: {item.price}</p>
        </li>
        
        
    );
}

export default Product;