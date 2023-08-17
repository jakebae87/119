import { Link } from "react-router-dom";

export default function InquiryDetail() {

    return (
        <div className="InquiryDetail">
            <div class="cateTitle">
                <h1>상품문의</h1>
            </div>

            <div class="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
                        <td>유통기한 확인요청</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>배**</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>2023-05-11</span></td>
                        <th scope="row">조회수</th>
                        <td><span>42</span></td>
                    </tr>
                    <tr>
                        <th scope="row">상품명</th>
                        <td>
                            <a href="../category/cate_search.html">애견비책 오리 연어 화식사료 120g x 10</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="contents">
                                <p>유통기한 확인 요청 드려요.</p>
                                <p>10개 전부 동일한 유통기한인가요?</p>
                            </div>

                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to="/community/inquiry"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
