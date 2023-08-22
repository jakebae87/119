import './Products.css'
import './ProductItem.css';
import './ProductDetail.css';
import { Route, Routes } from "react-router-dom";

import AllProducts from './AllProducts';
import NewProducts from './NewProducts';
import PopularProducts from './PopularProducts';
import DiscountedProducts from './DiscountedProducts';
import PromotionProducts from './PromotionProducts';
import SearchedProducts from './SearchedProducts';
import ProductDetail from './ProductDetail';

function Products({ onAddToCart, increQuantity, decreQuantity }) {
    return (
        <Routes>
            <Route path="/:kind/:category" element={<AllProducts onAddToCart={onAddToCart} />} />
            <Route path="/promotionproducts/:id" element={<PromotionProducts onAddToCart={onAddToCart} />} />
            <Route path="/searchedproducts" element={<SearchedProducts onAddToCart={onAddToCart} />} />
            <Route path="/newproducts" element={<NewProducts onAddToCart={onAddToCart} />} />
            <Route path="/popularproducts" element={<PopularProducts onAddToCart={onAddToCart} />} />
            <Route path="/discountedproducts" element={<DiscountedProducts onAddToCart={onAddToCart} />} />
            <Route path="/productdetail/:id" element={<ProductDetail
                onAddToCart={onAddToCart}
                increQuantity={increQuantity}
                decreQuantity={decreQuantity} />}
            />
        </Routes >
    )
}

export default Products;