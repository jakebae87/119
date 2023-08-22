import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// Home
import Home from "./Home/Home";

// Products
import Products from "./Products/Products";

// Policy
import Policy from "./Policy/Policy";

// User
import User from "./User/User";

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

                {/* Products */}
                <Route path="/products/*" element={<Products
                    onAddToCart={addCart}
                    increQuantity={increQuantity}
                    decreQuantity={decreQuantity}
                />} />

                {/* Policy */}
                <Route path="/policy/*" element={<Policy />} />

                {/* User */}
                <Route path="/user/*" element={<User
                    cartItems={cartItems}
                    onDelete={deleteCart}
                    increQuantity={increQuantity}
                    decreQuantity={decreQuantity}
                />} />

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