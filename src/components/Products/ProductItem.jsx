import "./ProductItem.css";
import { Link } from 'react-router-dom'
import { useState, useRef } from "react";

// 이미지
import CartImg from '../../assets/Images/cart.png';

const ProductItem = ({ it, addCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddCart = () => {
        addCart({ ...it, quantity: quantity });
        setQuantity(1);
    };

    let discountStr = "";
    if (it.discount) {
        discountStr = `${it.discount}% 할인`
    }

    return (
        <div className="ProductItem">
            <Link to={`/productdetail/${it.id}`}>
                <img src={it.img} alt="상품사진" />
            </Link>
            <div>
                <div>
                    <p className="productName"><Link to={`/productdetail/${it.id}`}>{it.title}</Link></p>
                    <p className="productComments">{it.content}</p>
                    <p className="productPrice"><span>{it.price}원</span><sup>{discountStr}</sup></p>
                </div>
                <div className="gotoCart">
                    <button onClick={() => handleAddCart(it)} >
                        <Link to={`/cart`}>
                            <img src={CartImg} alt="장바구니사진" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;