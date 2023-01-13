import React  from "react";
import Product from "./Product";



const List = ( { productList } ) => {


    return (
        <>
            <ul>
                { productList.map((item) => (
                    <Product item={item} key={item.id}/>))}
            </ul>

        </>
    );
};

export default List;