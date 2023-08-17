import "./Cart.css";
import { Link, useParams } from "react-router-dom";

// Mock Data
import mockData from "../MockData/MockData_Products";

export default function Cart() {

  const { id } = useParams();
  const product = mockData.find((item) => item.id === parseInt(id));

  return (
    <div className="Cart">
      <div className="titleArea">
        <ul type="square">
          <li>
            <h1>장바구니</h1>
          </li>
        </ul>
      </div>
      <div className="cartProcess">
        <ul>
          <li>장바구니</li>
          <li>주문서작성</li>
          <li>결제완료</li>
          <li>주문완료</li>
        </ul>
      </div>
      <div className="cartMain">
        <div className="cartProduct">
          <table className="cartInfo">
            <colgroup>
              <col style={{ width: 100 }} />
              <col style={{ width: 180 }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: 150 }} />
              <col style={{ width: 120 }} />
              <col style={{ width: 130 }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <input type="checkbox" />
                </th>
                <th scope="col">이미지</th>
                <th scope="col">상품정보</th>
                <th scope="col">판매가</th>
                <th scope="col">수량</th>
                <th scope="col">합계</th>
                <th scope="col">선택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>
                  <div className="cartImage">
                    <img src={product.img} alt="product1" />
                  </div>
                </td>
                <td>
                  <span>{product.title}</span>
                </td>
                <td>
                  <span>{product.price}</span>
                </td>
                <td>
                  <span>1</span>
                </td>
                <td>
                  <span>{product.price}</span>
                </td>
                <td>
                  <Link to="/order">
                    <button type="submit" id="order" name="order">
                      주문하기
                    </button>
                  </Link>
                  <button
                    type="button"
                    id="deleteCartProduct"
                    name="deleteCartProduct"
                  >
                    삭제
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th colspan="7">
                  <span>상품구매금액 </span>
                  <strong>
                    <span className="productPrice">{product.price}</span>원
                  </strong>
                  <span className="deliveryPrice"> + 배송비 3000원 = </span>
                  <span>합계 : </span>
                  <strong>
                    <span className="cartPrice">{product.price + 3000}</span>원
                  </strong>
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="cartOrder">
          <Link to={`/order/${id}`}>
            <a className="allOrder" href>
              전체상품주문
            </a>
          </Link>
          <Link to={`/order/${id}`}>
            <a className="selectOrder">선택상품주문</a>
          </Link>
          <Link>
            <a className="returnShop">쇼핑계속하기</a>
          </Link>
        </div>
        <div className="Guide">
          <h3>이용안내</h3>
          <div className="cartGuideInner">
            <h4>장바구니 이용안내</h4>
            <ol className="cartGuide">
              <li>
                [쇼핑계속하기] 버튼을 누르시면 쇼핑을 계속 하실 수 있습니다.
              </li>
              <li>
                장바구니와 관심상품을 이용하여 원하시는 상품만 주문하거나
                관심상품으로 등록하실 수 있습니다.
              </li>
            </ol>
            <h4>무이자할부 이용안내</h4>
            <ol className="payGuide">
              <li>
                상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여
                [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.
              </li>
              <li>
                [전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든
                상품에 대한 주문/결제가 이루어집니다.
              </li>
              <li>
                단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을
                받으실 수 없습니다.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
