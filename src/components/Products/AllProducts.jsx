import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function AllProducts({ onAddToCart }) {
    // 상품 분류
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

    // 페이지네이션
    useEffect(() => {
        setCurrentPage(1);
    }, [kind, category]);

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
                {currentItems.map((item) => (
                    <ProductItem key={item.id} it={item} onAddToCart={onAddToCart} />
                ))}
            </div>

            {/* 페이지네이션 컴포넌트 */}
            <div className="pagination">
                {currentPage > 1 && (
                    <a className="prev-page" onClick={() => paginate(currentPage - 1)}>
                        이전 페이지
                    </a>
                )}

                {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
                    <a
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={index + 1 === currentPage ? "active" : ""}
                    >
                        {index + 1}
                    </a>
                ))}

                {currentPage < Math.ceil(filteredData.length / itemsPerPage) && (
                    <a className="next-page" onClick={() => paginate(currentPage + 1)}>
                        다음 페이지
                    </a>
                )}
            </div>
        </div>
    );
}

export default AllProducts;