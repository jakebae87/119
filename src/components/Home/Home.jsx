import "./Home.css";
import React from "react";

import ImageSlider from "./ImageSlider";
import Introduce from "./Introduce";


import mockData from "../MockData/MockData_Home";

function Home({ onAddToCart }) {
    return (
        <div className="Home">
            <ImageSlider />
            
            <div id="mainWrap">
                {mockData.map((item, index) => (<Introduce props={[item, index]} onAddToCart={onAddToCart} />))}
            </div>
        </div>
    );
}

export default Home;
