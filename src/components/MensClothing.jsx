import React, {useContext} from "react";
import ProductContext from "../usecontext/ProductContext";
import Product from "./Product";

function MensClothing () {

    const list = useContext(ProductContext);

    return (
        <>
            <ul>
                { list.filter(i => i.category == "men's clothing").map((item) => (
                    <Product item={item} key={item.id}/>))}
            </ul>

        </>
    );   
}

export default MensClothing;