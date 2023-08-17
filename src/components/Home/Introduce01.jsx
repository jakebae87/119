import './Introduce.css'
import { Link } from 'react-router-dom';

import IntroduceItem from './IntroduceItem';


import NewProducts from "../Products/NewProducts";
import PopularProducts from "../Products/PopularProducts";
import DiscountedProducts from "../Products/DiscountedProducts";

import mockData2 from '../MockData/MockData_Products';

function Introduce({ mockData }) {
    const filteredData = mockData2.filter(item => {
        return item.new;
    });

    return (
        <div className="introduceWrap">
            <div className="introduce">
                <div>
                    <span>{mockData.title}</span>
                    <Link to={`${mockData.url}`}>+</Link>
                </div>

                <div>
                    <p>{mockData.content}<br /></p>
                </div>
            </div>

            <div className="productList">
                {filteredData.map((item) => (<IntroduceItem mockData={item} />))}
            </div>
        </div>
    );
}

export default Introduce;