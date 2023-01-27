import React, {useContext} from "react";
import Product from "./Product";
import ProductContext from "../usecontext/ProductContext";
//import '../styles/Product.css';
const List = () => {

    const list = useContext(ProductContext);

    return (
        <>
        <div className="cards">
            <ul>
                { list.map((item) => (
                    <Product item={item} key={item.id}/>))}
            </ul>
        </div>
            

        </>
    );
};

export default List;