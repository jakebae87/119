import "./Event.css";
import EventItem from "./EventItem";
import { useState } from "react";

// 이미지
import EventImg_photo from '../../assets/Images/event/event_photo.jpg'
import EventImg_survay from '../../assets/Images/event/event_survay.jpg'
import EventImg_dogsDay from '../../assets/Images/event/event_dogs.jpg'
import EventImg_bestReview from '../../assets/Images/event/event_bestReview.jpg'

// Mock Data
const mockData = [
    {
        id: 0,
        title: '펫밀리 포토리뷰 이벤트',
        content: '매일 5명에게 5만원 상당의 펫밀리 제품을 드립니다',
        startDate: new Date('2023-01-01 00:00:00'),
        endDate: new Date('2024-01-01 00:00:00'),
        progress: "",
        img: EventImg_photo
    },
    {
        id: 1,
        title: '펫밀리 설문 이벤트',
        content: '1분이면 끝나는 설문 이벤트! 의견을 남겨주시면 선물을 드립니다',
        startDate: new Date('2023-01-01 00:00:00'),
        endDate: new Date('2024-01-01 00:00:00'),
        progress: "",
        img: EventImg_survay
    },
    {
        id: 2,
        title: '개린이날 기념 UP TO 78%',
        content: '강아지 산책/놀이 및 간식관련 제품들을 최대 78%까지 할인된 가격으로 만나보세요',
        startDate: new Date('2023-01-01 00:00:00'),
        endDate: new Date('2023-08-01 00:00:00'),
        progress: "",
        img: EventImg_dogsDay
    },
    {
        id: 3,
        title: '베스트리뷰 이벤트',
        content: '커뮤니티 상품후기의 베스트 리뷰왕에게 상품을 드립니다!',
        startDate: new Date('2024-01-01 00:00:00'),
        endDate: new Date('2025-01-01 00:00:00'),
        progress: "",
        img: EventImg_bestReview
    }
]

function Event() {
    const [selectedFilter, setSelectedFilter] = useState("all");
    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    };

    const date = new Date();

    mockData.map(item => {
        if (date < item.startDate) { return item.progress = "beforeOpen"; }
        else if (date <= item.endDate) { return  item.progress = "onGoing"; }
        else { return item.progress = "closed"; }
    });

    const filteredData = mockData.filter(item => {
        if (selectedFilter === "all") { return true; }
        if (selectedFilter === "onGoing") { return date >= item.startDate && date <= item.endDate; }
        if (selectedFilter === "closed") { return date > item.endDate; }
        if (selectedFilter === "beforeOpen") { return date < item.startDate; }
        return true;
    });

    return (
        <div className="Event">
            <div className="cateTitle">
                <h1>이벤트</h1>
            </div>
            <hr />

            <div id="eventTop">
                <span>펫밀리의 이벤트와 혜택을 알아보세요!</span>
                <select name="searchPeriod" onChange={handleFilterChange}>
                    <option value="all">전체목록</option>
                    <option value="onGoing">진행중</option>
                    <option value="closed">마감</option>
                    <option value="beforeOpen">진행전</option>
                </select>
            </div>

            <div id="eventList">
                {filteredData.map(it => (<EventItem key={it.id} {...it} />))}
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

export default Event;