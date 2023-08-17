import "./Header.css";
import React from "react";
import { Link } from 'react-router-dom'

import PetmilyLogo from '../assets/Images/Petmily_logo.png';
import glassLogo from '../assets/Images/magnifying-glass-30.png';

function Header() {
    return (
        <div className="Header">
            <div className="headerTOP">
                <div className="topLogo">
                    {/* <span>Petmily</span> */}
                    <Link to="/"><img src={PetmilyLogo} alt="Petmily_logo" /></Link>
                </div>

                <div className="searchBox">
                    {/* <form action="../../html/category/cate_search.html" method="get"> */}
                    <form action="/products" method="get">
                        <fieldset>
                            <input type="text" maxlength="30" placeholder="검색어 입력" name="search" />
                            <button type="submit">
                                <Link to="/Products"><img src={glassLogo} alt="돋보기 이미지" /></Link>
                                {/* <img src={glassLogo} alt="돋보기 이미지" /> */}
                            </button>
                        </fieldset>
                    </form>
                </div>

                <div className="userMenu">
                    <Link to="/login">로그인</Link>
                    <Link to="/signup">회원가입</Link>
                    <Link to="/mypage">마이페이지</Link>
                    <Link to="/cart">장바구니</Link>
                </div>
            </div>

            <div className="headerBottom">
                <nav>
                    <ul className="mainMenu">
                        <li>
                            <input type="checkbox" id="sideBtn" />
                            <label for="sideBtn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>

                            <ul className="sideMenu">
                                <li>
                                    <ul>
                                        <li><Link to="/products">신상품</Link></li>
                                        <li><Link to="/products">인기상품</Link></li>
                                        <li><Link to="/products">강아지</Link></li>
                                        <li><Link to="/products">고양이</Link></li>
                                        <li><Link to="/products">사료</Link></li>
                                        <li><Link to="/products">간식/영양제</Link></li>
                                        <li><Link to="/products">위생</Link></li>
                                        <li><Link to="/products">미용/케어</Link></li>
                                        <li><Link to="/products">리빙</Link></li>
                                        <li><Link to="/products">산책/놀이</Link></li>
                                        <li><Link to="/products">의류/악세사리</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li><a href="../../html/community/notice.html">공지사항</a></li>
                                        <li><a href="../../html/community/inquiry.html">상품문의</a></li>
                                        <li><a href="../../html/community/review.html">상품후기</a></li>
                                        <li><a href="../../html/community/faq.html">자주묻는질문</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><Link to="/products">전체상품</Link>
                            <ul className="subMenu">
                                <li><Link to="/products">신상품</Link></li>
                                <li><Link to="/products">인기상품</Link></li>
                                <li><Link to="/products">강아지</Link></li>
                                <li><Link to="/products">고양이</Link></li>
                                <li><Link to="/products">사료</Link></li>
                                <li><Link to="/products">간식/영양제</Link></li>
                                <li><Link to="/products">위생</Link></li>
                                <li><Link to="/products">미용/케어</Link></li>
                                <li><Link to="/products">리빙</Link></li>
                                <li><Link to="/products">산책/놀이</Link></li>
                                <li><Link to="/products">의류/악세사리</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/community/notice">커뮤니티</Link>
                            <ul className="subMenu">
                                <li><Link to="/community/notice">공지사항</Link></li>
                                <li><Link to="/community/inquiry">상품문의</Link></li>
                                <li><Link to="/community/review">상품후기</Link></li>
                                <li><Link to="/community/faq">자주묻는질문</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/event">이벤트</Link></li>
                        <li><a href="../../html/category/cate_discount.html">유통기한 할인</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;