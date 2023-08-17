import { Link } from "react-router-dom";

const faqData = [
    {
        id: 0,
        url: '/community/faqDetail',
        type: '환불/반품',
        subject: '반품하려면 어떻게 하나요?',
        usename: '펫밀리',
        createDate: new Date('2023-05-10 00:00:00')
    },
    {
        id: 1,
        url: '/community/faqDetail',
        type: '결제/배송',
        subject: '배송기간은 얼마나 되나요?',
        usename: '펫밀리',
        createDate: new Date('2023-01-05 00:00:00')
    },
    {
        id: 2,
        url: '/community/faqDetail',
        subject: '비회원도 주문가능 하나요?',
        usename: '펫밀리',
        createDate: new Date('2022-12-11 00:00:00')
    },
    {
        id: 3,
        url: '/community/faqDetail',
        type: '회원가입/정보',
        subject: '회원가입은 어떻게 하나요?',
        usename: '펫밀리',
        createDate: new Date('2022-11-24 00:00:00')
    },
    {
        id: 4,
        url: '/community/faqDetail',
        type: '교환/환불/반품',
        subject: '주문취소는 어떻게 하나요?',
        usename: '펫밀리',
        createDate: new Date('2022-10-25 00:00:00')
    }
];

export default function Faq() {
    return (

        <div className="Faq">
            <div className="cateTitle">
                <h1>자주묻는질문</h1>
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

                    {faqData.map((faq) =>
                        <tr>
                            <td><Link to={faq.url}>[{faq.type}]{faq.subject}</Link></td>
                            <td>{faq.usename}</td>
                            <td>{faq.createDate.toDateString()}</td>
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
