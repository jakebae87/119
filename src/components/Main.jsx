import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Home
import Home from "./Home/Home";

// Products
import Products from "./Products/Products";
import PromotionProducts from "./Products/PromotionProducts";
import SearchedProducts from "./Products/SearchedProducts";
import NewProducts from "./Products/NewProducts";
import PopularProducts from "./Products/PopularProducts";
import DiscountedProducts from "./Products/DiscountedProducts";
import ProductDetail from "./Products/ProductDetail";

// Policy
import Policy from "./Policy/Policy";

// User
import Cart from "./User/Cart";
import MyPage from "./User/MyPage";
import Order from "./User/Order";
import Profile from "./User/Profile";
import OrderList from "./User/OrderList";
import ManageBoard from "./User/ManageBoard";
import Signup from "./User/Signup";
import Login from "./User/Login";
import Findid from "./User/Findid"
import Findpw from "./User/Findpw"
import Success from "./User/Success";

// Community
import Community from "./Community/Community";

// Board
import Board from "./Board/Board";

// Event
import Event from "./Event/Event";

// Test

function Main() {
    // 장바구니 상품 추가
    const [cartItems, setCartItems] = useState([]);

    const addCart = (it) => {
        const existingCartItem = cartItems.find((item) => item.id === it.id);
        if (existingCartItem) {
            const updatedCart = cartItems.map((item) =>
                item.id === it.id
                    ? { ...item, quantity: item.quantity + it.quantity }
                    : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...it }]);
        }
    };

    // 장바구니 상품 삭제
    const deleteCart = (it) => {
        setCartItems(cartItems.filter((cartItems) => cartItems.id !== it.id));
    };

    // 수량 up
    const increQuantity = (it) => {
        const updatedCart = cartItems.map((cartItem) =>
            cartItem.id === it.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        setCartItems(updatedCart);
    };

    // 수량 down
    const decreQuantity = (it) => {
        if (it.quantity > 1) {
            const updatedCart = cartItems.map((cartItem) =>
                cartItem.id === it.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
            setCartItems(updatedCart);
        }
    };

    return (
        <div className="Main">
            <Routes>
                {/* Home */}
                <Route path="/" element={<Home onAddToCart={addCart} />} />

                {/* Product */}
                <Route path="/products/:kind/:category" element={<Products onAddToCart={addCart} />} />
                <Route path="/products/promotionproducts" element={<PromotionProducts />} />
                <Route path="/products/searchedproducts" element={<SearchedProducts />} />
                <Route path="/products/newproducts" element={<NewProducts />} />
                <Route path="/products/popularproducts" element={<PopularProducts />} />
                <Route path="/products/discountedproducts" element={<DiscountedProducts />} />
                <Route path="/productdetail/:id" element={<ProductDetail
                    onAddToCart={addCart}
                    increQuantity={increQuantity}
                    decreQuantity={decreQuantity} />}
                />

                {/* Policy */}
                <Route path="/policy/*" element={<Policy />} />

                {/* User */}
                <Route path="/cart" element={<Cart cartItems={cartItems}
                    onDelete={deleteCart}
                    increQuantity={increQuantity}
                    decreQuantity={decreQuantity} />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypage/myprofile" element={<Profile />} />
                <Route path="/mypage/manageboard" element={<ManageBoard />} />
                <Route path="/order" element={<Order cartItems={cartItems} onDelete={deleteCart} />} />
                <Route path="/orderlist" element={<OrderList />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/findID" element={<Findid />} />
                <Route path="/findPW" element={<Findpw />} />
                <Route path="/success" element={<Success />} />

                {/* Community */}
                <Route path="/community/*" element={<Community />} />

                {/* Board */}
                <Route path="/board/*" element={<Board />} />

                {/* Event */}
                <Route path="/event" element={<Event />} />
            </Routes>
        </div>
    );
}

export default Main;