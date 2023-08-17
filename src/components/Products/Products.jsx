import "./Products.css";
import React from "react";
import { Link } from 'react-router-dom'

import ProductItem from "./ProductItem";

// 이미지
import FoodImg_dog from '../../assets/Images/products/food_dog.jpg'
import FoodImg_cat from '../../assets/Images/products/food_cat.jpg'
import SnackImg_dog from '../../assets/Images/products/snack_dog.jpg'
import SnackImg_cat from '../../assets/Images/products/snack_cat.jpg'
import WashImg_dog from '../../assets/Images/products/wash_dog.jpg'
import WashImg_cat from '../../assets/Images/products/wash_cat.jpg'
import Brush from '../../assets/Images/products/brush.jpg'
import Cushion from '../../assets/Images/products/cushion.jpg'
import Toy_dog from '../../assets/Images/products/toy_dog.jpg'
import Toy_cat from '../../assets/Images/products/toy_cat.jpg'
import Clothes_dog from '../../assets/Images/products/clothes_dog.jpg'

// Mock Data
const mockData = [
    {
        id: 0,
        title: '강아지 사료',
        content: '강아지 사료입니다',
        price: 10000,
        img: FoodImg_dog
    },
    {
        id: 1,
        title: '고양이 사료',
        content: '고양이 사료입니다',
        price: 10000,
        img: FoodImg_cat
    },
    {
        id: 2,
        title: '강아지 간식',
        content: '강아지 간식입니다',
        price: 7000,
        img: SnackImg_dog
    },
    {
        id: 3,
        title: '고양이 간식',
        content: '고양이 간식입니다',
        price: 7000,
        img: SnackImg_cat
    },
    {
        id: 4,
        title: '강아지 샴푸',
        content: '강아지 샴푸입니다',
        price: 5000,
        img: WashImg_dog
    },
    {
        id: 5,
        title: '고양이 샴푸',
        content: '고양이 샴푸입니다',
        price: 5000,
        img: WashImg_cat
    },
    {
        id: 6,
        title: '펫 브러쉬',
        content: '펫 브러쉬입니다',
        price: 2000,
        img: Brush
    },
    {
        id: 7,
        title: '쿠션',
        content: '쿠션입니다',
        price: 15000,
        img: Cushion
    },
    {
        id: 8,
        title: '강아지 장난감',
        content: '강아지 장난감입니다',
        price: 8000,
        img: Toy_dog
    },
    {
        id: 9,
        title: '고양이 장난감',
        content: '고양이 장난감입니다',
        price: 8000,
        img: Toy_cat
    },
    {
        id: 10,
        title: '강아지 옷',
        content: '강아지 옷입니다',
        price: 20000,
        img: Clothes_dog
    }
]

function Products() {

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>전체상품</h1>
            </div>
            <hr />

            <div className="productClassification">
                <ul>
                    <li><a href="">사료</a></li>
                    <li><a href="./cate_snackNutrient.html">간식/영양제</a></li>
                    <li><a href="./cate_hygiene.html">위생</a></li>
                    <li><a href="./cate_beautyCare.html">미용/케어</a></li>
                    <li><a href="./cate_beautyCare.html">리빙</a></li>
                    <li><a href="./cate_walkPlay.html">산책/놀이</a></li>
                    <li><a href="./cate_clothesAccessorie.html">의류/악세사리</a></li>
                </ul>
            </div>

            <div className="productList">
                {mockData.map((it) => (<ProductItem key={it.id} {...it} />))}
            </div>

            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    );
}

export default Products;
