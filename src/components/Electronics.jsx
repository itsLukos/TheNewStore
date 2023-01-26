import React, {useContext} from "react";
import ProductContext from "../usecontext/ProductContext";
import Product from "./Product";

function Electronics () {

    const list = useContext(ProductContext);

    return (
        <>
            <ul>
                { list.filter(i => i.category == "electronics").map((item) => (
                    <Product item={item} key={item.id}/>))}
            </ul>

        </>
    );   
}

export default Electronics;