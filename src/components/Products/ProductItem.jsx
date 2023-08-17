import "./ProductItem.css";

import { Link } from 'react-router-dom'

// 이미지
import CartImg from '../../assets/Images/cart.png';

const ProductItem = ({ mockData }) => {
    let prevPrice, res;

    if (mockData.discount) {
        prevPrice = mockData.price + "원";
        res = mockData.price - mockData.price * mockData.discount / 100;
        mockData.price = Math.floor(res / 10) * 10;
    }

    return (
        <div className="ProductItem">
            <Link to={`/productdetail/${mockData.id}`}>
                <img src={mockData.img} alt="상품사진" />
            </Link>
            <div>
                <div>
                    <p class="productName"><Link to={`/productdetail/${mockData.id}`}>{mockData.title}</Link></p>
                    <p class="productComments">{mockData.content}</p>
                    <p class="productPrice"><span>{prevPrice}</span> {mockData.price}<span>원</span></p>
                </div>
                <div class="gotoCart">
                    <Link to={`/cart/${mockData.id}`}>
                        <img src={CartImg} alt="장바구니사진" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;