import { Link } from "react-router-dom";

const noticeData = [
    {
        id: 0,
        url: '/community/noticeDetail',
        subject: '휴무 및 배송지연 안내',
        usename: '펫밀리',
        createDate: new Date('2023-01-01 00:00:00')
    },
    {
        id: 1,
        url: '/community/noticeDetail',
        subject: '5일 어린이날 배송 지연 안내',
        usename: '펫밀리',
        createDate: new Date('2023-01-01 00:00:00')
    },
    {
        id: 2,
        url: '/community/noticeDetail',
        subject: '2022년 설 배송 지연 및 휴무 안내',
        usename: '펫밀리',
        createDate: new Date('2023-01-01 00:00:00')
    },
    {
        id: 3,
        url: '/community/noticeDetail',
        subject: '플러스친구 쿠폰 받으세요',
        usename: '펫밀리',
        createDate: new Date('2023-01-01 00:00:00')
    },
    {
        id: 4,
        url: '/community/noticeDetail',
        subject: '크리스마스 배송 지연 안내',
        usename: '펫밀리',
        createDate: new Date('2023-01-01 00:00:00')
    }
];

export default function Notice() {

    return (
        <div className="Notice">
            <div className="cateTitle">
                <h1>공지사항</h1>
            </div>

            <div className="commnunityList">
                <ul>
                    <li><Link to="/community/notice">공지사항</Link></li>
                    <li><Link to="/community/inquiry">상품문의</Link></li>
                    <li><Link to="/community/review">상품후기</Link></li>
                    <li><Link to="/community/faq">자주묻는질문</Link></li>
                </ul>
            </div> {/* commnunityList */}

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

                    {noticeData.map((notice) =>
                        <tr>
                            <td><Link to={notice.url}>{notice.subject}</Link></td>
                            <td>{notice.usename}</td>
                            <td>{notice.createDate.toDateString()}</td>
                        </tr>
                    )}
                </table>
            </div> {/* boardList */}

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
