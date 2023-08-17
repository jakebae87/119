import { Route, Routes } from "react-router-dom";

// Home
import Home from "./Home/Home";

// Products
import Products from "./Products/Products";
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

// Event
import Event from "./Event/Event";

// Board
import Board from "./Board/Board";

function Main() {
    return (
        <div className="Main">
            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />

                {/* Product */}
                <Route path="/products" element={<Products />} />
                <Route path="/productdetail" element={<ProductDetail />} />

                {/* Policy */}
                <Route path="/policy/*" element={<Policy />} />

                {/* User */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/mypage/myprofile" element={<Profile />} />
                <Route path="/mypage/manageboard" element={<ManageBoard />} />
                <Route path="/order" element={<Order />} />
                <Route path="/orderlist" element={<OrderList />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/findID" element={<Findid />} />
                <Route path="/findPW" element={<Findpw />} />
                <Route path="/success" element={<Success />} />

                {/* Community */}
                <Route path="/community/*" element={<Community />} />

                {/* Event */}
                <Route path="/event" element={<Event />} />

                {/* Board */}
                <Route path="/board/*" element={<Board />} />

            </Routes>
        </div>
    );
}

export default Main;