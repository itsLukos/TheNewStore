import React, { useEffect, useState } from "react";



const List = ( {productList} ) => {


    return (
        <>
            <ul>
                { productList.map((item) => (
                    <li>
                        <h2>{item.title}</h2>
                        <img src={item.img} alt="" />
                        <p>Precio en €: {item.price}</p>
                    </li>))}
            </ul>

        </>
    );
};

export default List;