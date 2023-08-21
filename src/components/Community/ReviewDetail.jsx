import { Link } from "react-router-dom";

export default function ReviewDetail() {

    // 외부 이미지 주소를 배열로 담아 사용할 위치에 인덱스를 입력한다.
    let images = [
        'http://bampic.gmarket.co.kr/v1/424/412/2490412424/01376/2490412424396184037600.jpg',
        'https://bampic.auction.co.kr/v1/174/555/b901555174/00159/b901555174233948515900.jpg'
    ];

    return (
        <div className="ReviewDetail">
            <div className="cateTitle">
                <h1>상품후기</h1>
            </div>

            <div className="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
                        <td>우리아이가 잘 먹어요</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>배**</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>2023-05-11</span></td>
                        <th scope="row">조회수</th>
                        <td><span>112</span></td>
                    </tr>
                    <tr>
                        <th scope="row">상품명</th>
                        <td>
                            <a href="../category/cate_search.html">데이스포 장영양제 250g</a>
                        </td>
                        <th scope="row">평점</th>
                        <td>
                            <div className="productRating">
                                <i className="fa-solid fa-star" style={{ color: '#f60404' }}></i>
                                <i className="fa-solid fa-star" style={{ color: '#f60404' }}></i>
                                <i className="fa-solid fa-star" style={{ color: '#f60404' }}></i>
                                <i className="fa-regular fa-star" style={{ color: '#fa0000' }}></i>
                                <i className="fa-regular fa-star" style={{ color: '#fa0000' }}></i>

                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img className="contentImage"
                                    src={images[0]} />
                                <img className="contentImage"
                                    src={images[1]} />
                            </div>
                            <div className="contents">
                                <p>계속 먹이던건데 얼마안남아서 주문했어요. 효과가 있는건지 없는건지 잘 모르겠지만 강아지가 간식인것처럼 잘먹고 안먹이면 제 마음이 불편할거같아서 계속</p>
                                <p>먹이는중이네요. 효과가 있길 바래요.</p>
                            </div>
                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to="/community/review"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
