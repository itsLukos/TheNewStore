import React, { useEffect, useState } from "react";
import Product from "./Product";



const List = ( { productList } ) => {


    return (
        <>
            <ul>
                { productList.map((item) => (
                    <Product item={item} />))}
            </ul>

        </>
    );
};

export default List;