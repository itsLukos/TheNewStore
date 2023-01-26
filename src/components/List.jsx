import React, {useContext} from "react";
import Product from "./Product";
import ProductContext from "../usecontext/ProductContext";

const List = () => {

    const list = useContext(ProductContext);

    return (
        <>
            <ul>
                { list.map((item) => (
                    <Product item={item} key={item.id}/>))}
            </ul>

        </>
    );
};

export default List;