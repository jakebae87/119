import { Link } from "react-router-dom";
import SearchedInquiry from "./SearchedInquiry";

export default function Inquiry() {
    return (
        <div className="Inquiry">
            <div className="cateTitle">
                <h1>상품문의</h1>
            </div>
            <div className="commnunityList">
                <ul>
                    <li><Link to="/community/notice">공지사항</Link></li>
                    <li><Link to="/community/inquiry">상품문의</Link></li>
                    <li><Link to="/community/review">상품후기</Link></li>
                    <li><Link to="/community/faq">자주묻는질문</Link></li>
                </ul>
            </div>

            <SearchedInquiry />

            <div className="search">
                <form action="#">
                    <div className="searchConditions">
                        <div>
                            <select name="searchPeriod">
                                <option value="all">전체</option>
                                <option value="week">일주일</option>
                                <option value="month">한달</option>
                                <option value="firstQuarter">세달</option>
                            </select>
                            <select name="searchCriteria">
                                <option value="subject">제목</option>
                                <option value="content">내용</option>
                                <option value="writer">글쓴이</option>
                            </select>
                        </div>
                    </div>
                    <div className="searchInput">
                        <div>
                            <input className="searchWord" name="searchWord" type="text" />
                            <input type="submit" value="검색" />
                        </div>
                        {/* 
                        상품문의 리스트는 글목록만 보여주는 목적이다.
                        11월22일 회의를 통해서 상품문의 글쓰기 버튼을 상품상세페이지에 삽입하기로 함
                        <div className="board_write">
                            <Link to="/board/inquiry">글쓰기</Link>
                        </div> 
                        */}
                    </div>
                </form>
            </div>

            <div className="pagination">
                <a href="#">&laquo;</a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">&raquo;</a>
            </div>
        </div>
    )
}
