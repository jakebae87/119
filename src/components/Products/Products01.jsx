import "./Products.css";
import React from "react";
import { useState } from "react";

import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function Products() {
    let title1, title2;

    const [kind, setKind] = useState("all");
    const [category, setCategory] = useState("all");

    const handleKindChange = (e) => {
        setKind(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const filteredKind = mockData.filter(item => {
        if (kind === "all") { return true; }
        if (kind === "dog") { title1 = "강아지"; return item.kind === "dog" || item.kind === "all"; }
        if (kind === "cat") { title1 = "고양이"; return item.kind === "cat" || item.kind === "all"; }
        return true;
    });

    const filteredData = filteredKind.filter(item => {
        if (category === "all") { title2 = "전체상품"; return true; }
        if (category === "feed") { title2 = "사료"; return item.category === "feed"; }
        if (category === "snackNutrient") { title2 = "간식/영양제"; return item.category === "snackNutrient"; }
        if (category === "hygiene") { title2 = "위생용품"; return item.category === "hygiene"; }
        if (category === "beautyCare") { title2 = "미용/케어용품"; return item.category === "beautyCare"; }
        if (category === "living") { title2 = "리빙 용품"; return item.category === "living"; }
        if (category === "walkPlay") { title2 = "산책/놀이용품"; return item.category === "walkPlay"; }
        if (category === "clothesAccessorie") { title2 = "의류/악세사리"; return item.category === "clothesAccessorie"; }
        return true;
    });

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>{title1} {title2}</h1>
            </div>
            <hr />

            <div className="productClassification">
                <ul>
                    <li>
                        <input type='radio' className="btn" name="kind" id="btn_kind_all" value='all' onChange={handleKindChange} />
                        <label htmlFor="btn_kind_all">전체</label>
                    </li>
                    <li>
                        <input type='radio' className="btn" name="kind" id="btn_kind_dog" value='dog' onChange={handleKindChange} />
                        <label htmlFor="btn_kind_dog">강아지</label>
                    </li>
                    <li>
                        <input type='radio' className="btn" name="kind" id="btn_kind_cat" value='cat' onChange={handleKindChange} />
                        <label htmlFor="btn_kind_cat">고양이</label>
                    </li>
                </ul>
                <ul>
                    <li>
                        <input type='radio' className="btn" name='category' id="btn_category_all" value='all' onChange={handleCategoryChange} />
                        <label htmlFor="btn_category_all">전체상품</label>
                    </li>
                    <li>
                        <input type='radio' className="btn" name='category' id="btn_category_feed" value='feed' onChange={handleCategoryChange} />
                        <label htmlFor="btn_category_feed">사료</label>
                    </li>
                    <li>
                        <input type='radio' className="btn" name='category' id="btn_category_snackNutrient" value='snackNutrient' onChange={handleCategoryChange} />
                        <label htmlFor="btn_category_snackNutrient">간식/영양제</label>
                    </li>
                    <li>
                        <input type='radio' className="btn" name='category' id="btn_category_hygiene" value='hygiene' onChange={handleCategoryChange} />
                        <label htmlFor="btn_category_hygiene">미용/케어</label>
                    </li>
                    <li>
                        <input type='radio' className="btn" name='category' id="btn_category_living" value='living' onChange={handleCategoryChange} />
                        <label htmlFor="btn_category_living">리빙</label>
                    </li>
                    <li>
                        <input type='radio' className="btn" name='category' id="btn_category_walkPlay" value='walkPlay' onChange={handleCategoryChange} />
                        <label htmlFor="btn_category_walkPlay">산책/놀이</label>
                    </li>
                    <li>
                        <input type='radio' className="btn" name='category' id="btn_category_clothesAccessorie" value='clothesAccessorie' onChange={handleCategoryChange} />
                        <label htmlFor="btn_category_clothesAccessorie">의류/악세사리</label>
                    </li>
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