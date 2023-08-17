import "./Products.css";
import React from "react";
import { useState } from "react";
import { NavLink, Link, useParams } from "react-router-dom";

import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function Products() {
    const { kind, category } = useParams();

    const filteredKind = mockData.filter((item) => {
        if (kind === "all") { return true; }
        else { return item.kind === kind || item.kind === "all"; }
    });

    const filteredData = filteredKind.filter((item) => {
        if (category === "all") { return true; }
        else { return item.category === category; }
    });

    let title1, title2;

    if (kind === "all") title1 = "";
    else if (kind === "dog") title1 = "강아지";
    else if (kind === "cat") title1 = "고양이";
    else title1 = "";

    if (category === "all") title2 = "전체상품";
    else if (category === "feed") title2 = "사료";
    else if (category === "snackNutrient") title2 = "간식/영양제";
    else if (category === "hygiene") title2 = "위생용품";
    else if (category === "beautyCare") title2 = "미용/케어용품";
    else if (category === "living") title2 = "리빙용품";
    else if (category === "walkPlay") title2 = "산책/놀이용품";
    else if (category === "clothesAccessorie") title2 = "의류/악세사리";
    else title2 = "";

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>{title1} {title2}</h1>
            </div>
            <hr />

            <div className="productClassification">
                <ul>
                    <li><NavLink to={`/products/all/${category}`}>전체</NavLink></li>
                    <li><NavLink to={`/products/dog/${category}`}>강아지</NavLink></li>
                    <li><NavLink to={`/products/cat/${category}`}>고양이</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to={`/products/${kind}/all`}>전체상품</NavLink></li>
                    <li><NavLink to={`/products/${kind}/feed`}>사료</NavLink></li>
                    <li><NavLink to={`/products/${kind}/snackNutrient`}>간식/영양제</NavLink></li>
                    <li><NavLink to={`/products/${kind}/hygiene`}>위생</NavLink></li>
                    <li><NavLink to={`/products/${kind}/beautyCare`}>미용/케어</NavLink></li>
                    <li><NavLink to={`/products/${kind}/living`}>리빙</NavLink></li>
                    <li><NavLink to={`/products/${kind}/walkPlay`}>산책/놀이</NavLink></li>
                    <li><NavLink to={`/products/${kind}/clothesAccessorie`}>의류/악세사리</NavLink></li>
                </ul>
            </div>

            <div className="productList">
                {filteredData.map((item) => (<ProductItem mockData={item} />))}
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