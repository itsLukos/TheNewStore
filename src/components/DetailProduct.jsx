import React from "react";

function DetailProduct ( {item} ) {

    return (
        <>
            <article>
                <h2>{item.title}</h2>
                <h3>{item.category}</h3>
                <img src={item.image} alt="" />
                <h3>{item.description}</h3>
                <p>{item.rate.rating}</p>
                <p>Precio en €: {item.price}</p>
            </article>
        </>  
    );
}

export default DetailProduct;

