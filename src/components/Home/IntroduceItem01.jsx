import "./IntroduceItem.css";
import "./Introduce.css";

import { Link } from 'react-router-dom'

// 이미지
import CartImg from '../../assets/Images/cart.png';

const IntroduceItem = ({ mockData }) => {
    return (
        <div className="ProductItem">
            <div className="product">
                <Link to={`/productdetail/${mockData.id}`}>
                    <img src={mockData.img} alt="상품사진" />
                </Link>
                <div>
                    <div>
                        <p class="productName"><Link to={`/productdetail/${mockData.id}`}>{mockData.title}</Link></p>
                        <p class="productPrice"><span>{mockData.price}</span> {mockData.price}<span>원</span></p>
                    </div>
                    <div className="gotoCart">
                        <Link to={`/cart/${mockData.id}`}>
                            <img src={CartImg} alt="장바구니사진" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroduceItem;