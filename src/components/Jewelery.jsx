import React, {useContext} from "react";
import ProductContext from "../usecontext/ProductContext";
import Product from "./Product";

function Jewelery () {

    const list = useContext(ProductContext);

    return (
        <>
            <ul>
                { list.filter(i => i.category == "jewelery").map((item) => (
                    <Product item={item} key={item.id}/>))}
            </ul>

        </>
    );   
}

export default Jewelery;