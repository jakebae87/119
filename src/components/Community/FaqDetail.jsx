import { Link } from "react-router-dom";

export default function DetailDetail() {

    return (
        <div className="DetailDetail">
            <div class="cateTitle">
                <h1>자주묻는질문</h1>
            </div>

            <div class="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
                        <td>[환불/반품] 반품하려면 어떻게 하나요?</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>펫밀리</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>2023-05-11</span></td>
                        <th scope="row">조회수</th>
                        <td><span>30</span></td>
                    </tr>
                    <tr>
                        <td class="contents">
                            <p>상품을 인도받은 날로부터 7일 이내에 한해 계약에 관한 청약철회가 가능합니다.</p>
                            <p>펫밀리 고객센터(☎1644-9603), 카카오톡 상담톡(@펫밀리) 또는 홈페이지 Q&A게시판에 반품접수를 해주시면 수거 접수를 도와드리고 있습니다.</p>
                            <p>반품 상품이 도착 후 자체 검수가 완료되면 환불처리를 해드립니다.</p>
                            <p>단순변심으로 인하여 반품을 하시는 경우에는 상품 등의 반환에 필요한 비용을 고객님이 부담하셔야 합니다.</p>
                            <p>* 단, 제품은 개봉하시지 않은 새상품 상태일 경우에만 반품이 가능하오며 사용하신 제품은 단순변심, 사용감 불만족으로 인한 반품이 불가합니다.</p>

                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to="/community/Faq"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
