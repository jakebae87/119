import { Link } from "react-router-dom";
import Star from "../Community/Star";

import food_image1 from '../../assets/Images/products/food_image1.jpg';
import food_image2 from '../../assets/Images/products/food_image2.jpg';
import food_image3 from '../../assets/Images/products/food_image3.jpg';
import food_image4 from '../../assets/Images/products/food_image4.jpg';
import food_image5 from '../../assets/Images/products/food_image5.jpg';

const reviewData = [
    {
        id: 0,
        url: '/community/reviewDetail',
        image: food_image1,
        productName: "데이스포 장영양제 250g",
        star: 4,
        subject: '우리아이가 잘 먹어요',
        usename: '배**',
        createDate: new Date('2023-01-21 00:00:00')
    },
    {
        id: 1,
        url: '/community/reviewDetail',
        image: food_image2,
        productName: "애견비책 오리 연어 화식사료 120g x 10",
        star: 1,
        subject: '가성비가 안좋아요',
        usename: '김**',
        createDate: new Date('2023-01-15 00:00:00')
    },
    {
        id: 2,
        url: '/community/reviewDetail',
        image: food_image3,
        productName: "NPABC-844-A-반려동물 사각캔 닭고기+소고기 100gx24",
        star: 5,
        subject: '닭가슴살 부족할 때, 내가 먹어도 꿀맛임',
        usename: '최**',
        createDate: new Date('2023-01-05 00:00:00')
    },
    {
        id: 3,
        url: '/community/reviewDetail',
        image: food_image4,
        productName: "기둥 컴팩트 애견배변판 배변용품 반려동물 애완",
        star: 3,
        subject: '배변 교육시키는데 너무 좋네요',
        usename: '은**',
        createDate: new Date('2022-12-29 00:00:00')
    },
    {
        id: 4,
        url: '/community/reviewDetail',
        image: food_image5,
        productName: "gooby 메모리폼 스텝인 하네스 편안한 강아지 가슴줄",
        star: 4,
        subject: '산책 필수템!',
        usename: '박**',
        createDate: new Date('2022-12-11 00:00:00')
    }
];

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

                    {reviewData.map((review) =>

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
