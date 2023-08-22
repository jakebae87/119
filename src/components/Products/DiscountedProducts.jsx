import React from "react";

import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function DiscountedProducts({ onAddToCart }) {
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
                {filteredData.map((item) => (<ProductItem key={item.id} it={item} onAddToCart={onAddToCart} />))}
            </div>
        </div>
    );
}

export default DiscountedProducts;