import "./Products.css";
import React from "react";

import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function DiscountedProducts() {
    const filteredData = mockData.filter(item => {
        return item.discount;
    });

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>할인상품</h1>
            </div>
            <hr />

            <div className="productList">
                {filteredData.map((item) => (<ProductItem mockData={item} />))}
            </div>
        </div>
    );
}

export default DiscountedProducts;