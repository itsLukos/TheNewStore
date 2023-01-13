import React from "react";

function Product ( { item } ) {
    return (
        <li>
            <h2>{item.title}</h2>
            <h3>{item.category}</h3>
            <img src={item.image} alt="" />
            <h3>{item.description}</h3>
            <p>Precio en €: {item.price}</p>
        </li>
        
        
    );
}

export default Product;