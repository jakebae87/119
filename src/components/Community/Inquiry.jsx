import { Link } from "react-router-dom";

const inquiryData = [
    {
        id: 0,
        url: '/community/inquiryDetail',
        subject: '유통기한 확인요청',
        usename: '배**',
        createDate: new Date('2023-05-11 00:00:00')
    },
    {
        id: 1,
        url: '/community/inquiryDetail',
        subject: '사이즈가 궁금해요',
        usename: '김**',
        createDate: new Date('2023-04-25 00:00:00')
    },
    {
        id: 2,
        url: '/community/inquiryDetail',
        subject: '배송 언제 되나요?',
        usename: '최**',
        createDate: new Date('2023-01-05 00:00:00')
    },
    {
        id: 3,
        url: '/community/inquiryDetail',
        subject: '유통기한 확인 해주세요',
        usename: '은**',
        createDate: new Date('2022-12-29 00:00:00')
    },
    {
        id: 4,
        url: '/community/inquiryDetail',
        subject: '우리 강아지가 먹어도 될까요?',
        usename: '박**',
        createDate: new Date('2022-12-11 00:00:00')
    }

];


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
            <div className="boardList">
                <table>
                    <colgroup>
                        <col className="attr1" />
                        <col className="attr2" />
                        <col className="attr3" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>

                    {inquiryData.map((inquiry) =>
                        <tr>
                            <td><Link to={inquiry.url}>{inquiry.subject}</Link></td>
                            <td>{inquiry.usename}</td>
                            <td>{inquiry.createDate.toDateString()}</td>
                        </tr>
                    )}

                </table>
            </div>

            <div className="search">
                <form action="#">
                    <div className="searchConditions">
                        <div>
                            <select name="searchPeriod">
                                <option value="week">일주일</option>
                                <option value="month">한달</option>
                                <option value="firstQuarter">세달</option>
                                <option value="all">전체</option>
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
                            <input name="searchWord" type="text" />
                            <input type="submit" value="검색" />
                        </div>
                        <div className="board_write">
                            <Link to="/board/inquiry">글쓰기</Link>
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
