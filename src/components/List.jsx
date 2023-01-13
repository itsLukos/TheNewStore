import React, { useEffect, useState } from "react";
import axios from "axios"


const List = () => {

    const [productList, setProductList] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((resp) => {
            console.log(resp.data);
            setProductList(resp.data);
        });

    }, []);

    return (
        <>
            <ul>
                { productList.map((item) => (<li>{item.title}</li>))}
            </ul>

        </>
    );
};

export default List;