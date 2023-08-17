import { Link } from "react-router-dom";
import Star from "../Community/Star";

import mockData from "../MockData/MockData_Review";

export default function Review() {
    return (

        <div className="Review">
            <div className="cateTitle">
                <h1>상품후기</h1>
            </div>
            <div className="commnunityList">
                <div>
                    <ul>
                        <li><Link to="/community/notice">공지사항</Link></li>
                        <li><Link to="/community/inquiry">상품문의</Link></li>
                        <li><Link to="/community/review">상품후기</Link></li>
                        <li><Link to="/community/faq">자주묻는질문</Link></li>
                    </ul>
                </div>
            </div>

            <div className="boardList">
                <table>
                    <colgroup>
                        <col className="attr1" />
                        <col className="attr2" />
                        <col className="attr3" />
                        <col className="attr4" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <th>평점</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>

                    {mockData.map((review) =>

                        <tr>
                            <td>
                                <div className="titleBox">
                                    <ul>
                                        <li>
                                            <Link to={review.url}><img src={review.image} alt={review.productName} /></Link>
                                        </li>
                                        <li>
                                            <strong>
                                                <p id="productName" name="productName">{review.productName}</p>
                                            </strong>
                                            <div>
                                                <Link to={review.url}>{review.subject}</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <Star star={review.star} />
                            </td>
                            <td>{review.usename}</td>
                            <td>{review.createDate.toDateString()}</td>
                        </tr>
                    )}
                </table>
            </div>

            <div className="search">
                <form action="#">
                    <div className="searchConditions">
                        <div>
                            <select name="searchSelections">
                                <option value="newest">최신순</option>
                                <option value="starRating">별점순</option>
                                <option value="recommendation ">추천순</option>
                            </select>
                            <select name="searchCategory">
                                <option value="" disabled selected>카테고리를 선택해주세요.</option>
                                <option value="subject">제목</option>
                                <option value="content">내용</option>
                                <option value="writer">글쓴이</option>
                            </select>
                        </div>
                    </div>
                    <div className="searchInput">
                        <div>
                            <input type="text" />
                            <input type="submit" value="검색" />
                        </div>
                        <div className="board_write">
                            <a><Link to="/board/review">글쓰기</Link></a>
                        </div>
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
