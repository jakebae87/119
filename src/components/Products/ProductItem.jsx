import "./ProductItem.css";

import { Link } from 'react-router-dom'
// {
//     id: 0,
//     title: '강아지 사료',
//     content: '강아지 사료입니다',
//     price: 10000,
//     CartImg: FoodImg_dog
// }

// 이미지
import CartImg from '../../assets/Images/cart.png';

const ProductItem = ({ id, title, content, price, img }) => {
    return (
        <div className="ProductItem">
            <Link to="/productdetail">
                <img src={img} alt="상품사진" />
            </Link>
            <div>
                <div>
                    <p class="productName"><Link to="/productdetail">{title}</Link></p>
                    <p class="productComments">{content}</p>
                    <p class="productPrice">{price}원</p>
                </div>
                <div class="gotoCart">
                    <Link to="/cart">
                        <img src={CartImg} alt="장바구니사진" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;