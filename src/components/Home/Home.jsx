import "./Home.css";
import React from "react";
import { Link } from 'react-router-dom'
import ImageSlider from "./ImageSlider";

// 이미지
import prom_img1 from '../../assets/Images/prom_img1.jpg';
import prom_img2 from '../../assets/Images/prom_img2.jpg';
import prom_img3 from '../../assets/Images/prom_img3.jpg';
import prom_img4 from '../../assets/Images/prom_img4.jpg';
import prom_img5 from '../../assets/Images/prom_img5.jpg';
import cartImg from '../../assets/Images/cart.png';

function Home() {
    return (
        <div className="Home">
            {/* <ImageSlider /> */}
            <div className="mainContainer">
                <ul className="slides">
                    <input type="radio" name="radioBtn" id="img1" checked />
                    <li className="slideContainer">
                        <div className="slide">
                            <a href="./html/category/cate_promotion1.html">
                                <img src={prom_img1} alt="prom_img1" />
                            </a>
                        </div>
                        <div className="slideBtn">
                            <label for="img5" className="prev">&#x2039;</label>
                            <label for="img2" className="next">&#x203a;</label>
                        </div>
                    </li>

                    <input type="radio" name="radioBtn" id="img2" />
                    <li className="slideContainer">
                        <div className="slide">
                            <a href="./html/category/cate_promotion2.html">
                                <img src={prom_img2} alt="prom_img2" />
                            </a>
                        </div>
                        <div className="slideBtn">
                            <label for="img1" className="prev">&#x2039;</label>
                            <label for="img3" className="next">&#x203a;</label>
                        </div>
                    </li>

                    <input type="radio" name="radioBtn" id="img3" />
                    <li className="slideContainer">
                        <div className="slide">
                            <a href="./html/category/cate_promotion3.html">
                                <img src={prom_img3} alt="prom_img3" />
                            </a>
                        </div>
                        <div className="slideBtn">
                            <label for="img2" className="prev">&#x2039;</label>
                            <label for="img4" className="next">&#x203a;</label>
                        </div>
                    </li>

                    <input type="radio" name="radioBtn" id="img4" />
                    <li className="slideContainer">
                        <div className="slide">
                            <a href="./html/category/cate_promotion4.html">
                                <img src={prom_img4} alt="prom_img4" />
                            </a>
                        </div>
                        <div className="slideBtn">
                            <label for="img3" className="prev">&#x2039;</label>
                            <label for="img5" className="next">&#x203a;</label>
                        </div>
                    </li>

                    <input type="radio" name="radioBtn" id="img5" />
                    <li className="slideContainer">
                        <div className="slide">
                            <a href="./html/category/cate_promotion5.html">
                                <img src={prom_img5} alt="prom_img5" />
                            </a>
                        </div>
                        <div className="slideBtn">
                            <label for="img4" className="prev">&#x2039;</label>
                            <label for="img1" className="next">&#x203a;</label>
                        </div>
                    </li>

                    <li className="slideDotList">
                        <label for="img1" className="slideDot" id="imgDot1"></label>
                        <label for="img2" className="slideDot" id="imgDot2"></label>
                        <label for="img3" className="slideDot" id="imgDot3"></label>
                        <label for="img4" className="slideDot" id="imgDot4"></label>
                        <label for="img5" className="slideDot" id="imgDot5"></label>
                    </li>
                </ul>
            </div>

            <div id="mainWrap">
                <div className="introduceWrap">
                    <div className="introduce">
                        <div>
                            <span>신상품</span>
                            <a href="./html/category/cate_new.html">+</a>
                        </div>

                        <div>
                            <p>펫밀리에서 새롭게 선보이는 제품을 소개합니다.<br /></p>
                        </div>
                    </div>

                    <div className="productList">
                        <div className="product">
                            <Link to="/productdetail">
                                <img
                                    src="https://img0.yna.co.kr/etc/inner/KR/2017/02/01/AKR20170201107900030_01_i_P2.jpg"
                                    alt="상품사진" />
                            </Link>
                            <div>
                                <div>
                                    <p className="productName"><Link to="/productdetail">티저 토이</Link></p>
                                    <p className="productPrice">16,600원</p>
                                </div>
                                <div className="gotoCart">
                                    <Link to="/cart">
                                        <img src={cartImg} alt="장바구니사진" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <Link to="/productdetail">
                                <img
                                    src="https://img0.yna.co.kr/etc/inner/KR/2017/02/01/AKR20170201107900030_01_i_P2.jpg"
                                    alt="상품사진" />
                            </Link>
                            <div>
                                <div>
                                    <p className="productName"><Link to="/productdetail">티저 토이</Link></p>
                                    <p className="productPrice">16,600원</p>
                                </div>
                                <div className="gotoCart">
                                    <Link to="/cart">
                                        <img src={cartImg} alt="장바구니사진" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <Link to="/productdetail">
                                <img
                                    src="https://img0.yna.co.kr/etc/inner/KR/2017/02/01/AKR20170201107900030_01_i_P2.jpg"
                                    alt="상품사진" />
                            </Link>
                            <div>
                                <div>
                                    <p className="productName"><Link to="/productdetail">티저 토이</Link></p>
                                    <p className="productPrice">16,600원</p>
                                </div>
                                <div className="gotoCart">
                                    <Link to="/cart">
                                        <img src={cartImg} alt="장바구니사진" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="introduceWrap">
                    <div className="introduce">
                        <div>
                            <span>인기상품</span>
                            <a href="./html/category/cate_best.html">+</a>
                        </div>

                        <div>
                            <p>펫밀리에서 가장 많이 판매되는 제품을 소개합니다.<br /></p>
                        </div>
                    </div>

                    <div className="productList">
                        <div className="product">
                            <Link to="/productdetail">
                                <img
                                    src="https://img0.yna.co.kr/etc/inner/KR/2017/02/01/AKR20170201107900030_01_i_P2.jpg"
                                    alt="상품사진" />
                            </Link>
                            <div>
                                <div>
                                    <p className="productName"><Link to="/productdetail">티저 토이</Link></p>
                                    <p className="productPrice">16,600원</p>
                                </div>
                                <div className="gotoCart">
                                    <Link to="/cart">
                                        <img src={cartImg} alt="장바구니사진" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <Link to="/productdetail">
                                <img
                                    src="https://img0.yna.co.kr/etc/inner/KR/2017/02/01/AKR20170201107900030_01_i_P2.jpg"
                                    alt="상품사진" />
                            </Link>
                            <div>
                                <div>
                                    <p className="productName"><Link to="/productdetail">티저 토이</Link></p>
                                    <p className="productPrice">16,600원</p>
                                </div>
                                <div className="gotoCart">
                                    <Link to="/cart">
                                        <img src={cartImg} alt="장바구니사진" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <Link to="/productdetail">
                                <img
                                    src="https://img0.yna.co.kr/etc/inner/KR/2017/02/01/AKR20170201107900030_01_i_P2.jpg"
                                    alt="상품사진" />
                            </Link>
                            <div>
                                <div>
                                    <p className="productName"><Link to="/productdetail">티저 토이</Link></p>
                                    <p className="productPrice">16,600원</p>
                                </div>
                                <div className="gotoCart">
                                    <Link to="/cart">
                                        <img src={cartImg} alt="장바구니사진" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
