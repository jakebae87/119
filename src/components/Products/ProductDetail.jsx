import "./ProductDetail.css";
import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";
import detailImage from "../../assets/Images/productDetail1.jpg";
import "https://kit.fontawesome.com/f060eab6a5.js";

// 이미지
import product1 from "../../assets/Images/product1.jpg";

export default function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="productPage">
        <div className="productImage">
          <img src={product1} alt="product1" />
        </div>
        <table className="productInfo">
          <tbody>
            <tr>
              <th>상품명</th>
              <td>강아지 사료</td>
            </tr>
            <tr>
              <th>원산지</th>
              <td>국내산</td>
            </tr>
            <tr>
              <th>가격</th>
              <td>34,000원</td>
            </tr>
            <tr>
              <th>수량</th>
              <td>
                <select name="quantity" id="quantity">
                  {Array.from({ length: 100 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th>배송비</th>
              <td>3000원</td>
            </tr>
            <tr>
              <td colSpan="2">
                <Link to="/order">
                  <a href="" className="buySoon">
                    바로구매하기
                  </a>
                </Link>
                <Link to="/">
                  <a href="" className="buyCart">
                    장바구니
                  </a>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="productDetailPage">
        <ul className="productDetailMenu">
          <li>
            <a href="#productDetailImg">상품정보</a>
          </li>
          <li>
            <a href="#productReview">리뷰</a>
          </li>
          <li>
            <a href="#productQA">Q&A</a>
          </li>
          <li>
            <a href="#buyGuide">구매안내</a>
          </li>
        </ul>
        <div id="productDetailImg" className="productDetailImg">
          <img src={detailImage} className="detailImage" alt="productDetail1" />
        </div>
        <div id="productReview" className="productReview">
          <div className="productReviewTitle">
            <h2>리뷰</h2>
          </div>
          <div className="reviewList">
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
              <tr>
                <td>
                  <div className="titleBox">
                    <ul>
                      <li>
                        <img src={product1} alt="product1" />
                      </li>
                      <li>
                        <strong>
                          <p id="productName" name="productName">
                            데이스포 장영양제 250g
                          </p>
                        </strong>
                        <div>
                          <a href="../../html/community/reviewDetail.html">
                            우리아이가 잘 먹어요
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="productRating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </td>
                <td>배**</td>
                <td>2023-05-11</td>
              </tr>
              <tr>
                <td>
                  <div className="titleBox">
                    <ul>
                      <li>
                        <img src={product1} alt="product1" />
                      </li>
                      <li>
                        <strong>
                          <p id="productName" name="productName">
                            애견비책 오리 연어 화식사료 120g x 10
                          </p>
                        </strong>
                        <a href="#">가성비가 안좋아요</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="productRating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </td>
                <td>김**</td>
                <td>2023-04-25</td>
              </tr>
              <tr>
                <td>
                  <div className="titleBox">
                    <ul>
                      <li>
                        <img src={product1} alt="product1" />
                      </li>
                      <li>
                        <strong>
                          <p id="productName" name="productName">
                            NPABC-844-A-반려동물 사각캔 닭고기+소고기 100gx24
                          </p>
                        </strong>
                        <a href="#">닭가슴살 부족할 때, 내가 먹어도 꿀맛임</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="productRating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                  </div>
                </td>
                <td>최**</td>
                <td>2023-01-05</td>
              </tr>
              <tr>
                <td>
                  <div className="titleBox">
                    <ul>
                      <li>
                        <img src={product1} alt="product1" />
                      </li>
                      <li>
                        <strong>
                          <p id="productName" name="productName">
                            기둥 컴팩트 애견배변판 배변용품 반려동물 애완
                          </p>
                        </strong>
                        <a href="#">배변 교육시키는데 너무 좋네요</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="productRating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </td>
                <td>은**</td>
                <td>2022-12-29</td>
              </tr>
              <tr>
                <td>
                  <div className="titleBox">
                    <ul>
                      <li>
                        <img src={product1} alt="product1" />
                      </li>
                      <li>
                        <strong>
                          <p id="productName" name="productName">
                            gooby 메모리폼 스텝인 하네스 편안한 강아지 가슴줄
                          </p>
                        </strong>
                        <a href="#">산책 필수템!</a>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>
                  <div className="productRating">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </td>
                <td>박**</td>
                <td>2022-12-11</td>
              </tr>
            </table>
          </div>
        </div>
        <div id="productQA" className="productQA">
          <div className="productReviewTitle">
            <h2>Q&A</h2>
          </div>
          <div className="qaList">
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
              <tr>
                <td>
                  <a href="./inquiryDetail.html">유통기한 확인요청</a>
                </td>
                <td>배**</td>
                <td>2023-05-11</td>
              </tr>
              <tr>
                <td>
                  <a href="#">사이즈가 궁금해요</a>
                </td>
                <td>김**</td>
                <td>2023-04-25</td>
              </tr>
              <tr>
                <td>
                  <a href="#">배송 언제 되나요?</a>
                </td>
                <td>최**</td>
                <td>2023-01-05</td>
              </tr>
              <tr>
                <td>
                  <a href="#">유통기한 확인 해주세요</a>
                </td>
                <td>은**</td>
                <td>2022-12-29</td>
              </tr>
              <tr>
                <td>
                  <a href="#">우리 강아지가 먹어도 될까요?</a>
                </td>
                <td>박**</td>
                <td>2022-12-11</td>
              </tr>
            </table>
          </div>
        </div>
        <div id="buyGuide" className="buyGuide">
          <div className="buyGuide">
            <div className="returnInfo">
              <h4 className="tit">반품/교환 정보</h4>
              <table className="prdc_detail_table">
                <caption>반품/교환 정보 테이블</caption>
                <colgroup>
                  <col style={{ width: "18%" }} />
                  <col />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">반품/교환 배송비</th>
                    <td>
                      (구매자귀책) 3,000원/6,000원 초기배송비 무료시 반품배송비
                      부과방법 : 왕복(편도x2)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">반품/교환지 주소</th>
                    <td>XX시 XX구 XX동 XXX</td>
                  </tr>
                  <tr>
                    <th scope="row">반품/교환 안내</th>
                    <td>상세설명 참조</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="tit">반품/교환 기준</h4>
              <div className="b_product_info_cont">
                <p className="c_product_info_cont">
                  상품 수령 후 7일 이내에 신청하실 수 있습니다. 단, 제품이
                  표시·광고 내용과 다르거나, 계약과 다르게 이행된 경우는 제품
                  수령일부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던
                  날부터 30일 이내에 교환/반품이 가능합니다.
                </p>
                <dl className="c_product_info_list">
                  <dt>
                    추가적으로 다음의 경우 해당하는 반품/교환은 신청이 불가능할
                    수 있습니다.
                  </dt>
                  <dd>
                    소비자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우
                    (단지, 상품 확인을 위한 포장 훼손 제외)
                  </dd>
                  <dd>
                    소비자의 사용 또는 소비에 의해 상품 등의 가치가 현저히
                    감소한 경우
                  </dd>
                  <dd>
                    시간의 경과에 의해 재판매가 곤란할 정도로 상품 등의 가치가
                    현저히 감소한 경우
                  </dd>
                  <dd>복제가 가능한 상품 등의 포장을 훼손한 경우</dd>
                  <dd>
                    소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에
                    들어간 경우
                  </dd>
                </dl>
              </div>

              <h4 className="tit">판매자정보</h4>
              <table className="prdc_detail_table">
                <caption>판매자정보 테이블</caption>
                <colgroup>
                  <col style={{ width: "18%" }} />
                  <col style={{ width: "32%" }} />
                  <col style={{ width: "18%" }} />
                  <col style={{ width: "32%" }} />
                </colgroup>
                <tbody>
                  <tr>
                    <th scope="row">판매자</th>
                    <td>폰마블</td>
                    <th scope="row">상호명/대표자</th>
                    <td>주식회사 마블프로듀스 │ 전현준</td>
                  </tr>

                  <tr>
                    <th scope="row">사업자구분</th>
                    <td>법인사업자 </td>

                    <th scope="row">고객문의 대표번호</th>
                    <td>1833-3454</td>
                  </tr>

                  <tr>
                    <th scope="row">사업자등록번호</th>
                    <td>5298100403</td>

                    <th scope="row">통신판매업신고</th>
                    <td>2021-서울금천-1539</td>
                  </tr>
                  <tr>
                    <th scope="row">E-Mail</th>
                    <td>marvelproduce@naver.com</td>

                    <th scope="row">고객문의 가능시간</th>
                    <td>10시 ~ 17시 (점심시간, 토요일, 일요일, 공휴일 제외)</td>
                  </tr>

                  <tr>
                    <th scope="row">영업소재지</th>
                    <td colspan="3">
                      서울특별시 금천구 가산디지털1로 168
                      (가산동,우림라이온스밸리) B동 710호, 711호
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="btm_txt cfix">
                <p className="info03">
                  11번가 결제대금예치업 등록번호: 02-006-00022
                </p>
                <ul className="dot">
                  <li>
                    <span className="ico"></span>11번가는 전자금융거래법에 따라
                    금융감독(원)위원회에 결제대금예치업을
                    등록(등록번호:02-006-000022)하였으며, 모든 입점 판매자는
                    자동적으로 동 서비스에 가입하였습니다.
                  </li>
                  <li>
                    <span className="ico"></span>본 판매자는 고객님의 안전거래를
                    위해 구매금액, 결제수단에 상관없이 모든 거래에 대하여 저희
                    11번가 쇼핑몰이 가입한 11번가(주)의 구매안전 서비스를
                    자동으로 적용하고 있습니다.
                  </li>
                </ul>
              </div>

              <h4 className="tit">구매시 주의사항</h4>
              <div className="list_wrap">
                <ul className="dot">
                  <li>
                    <span className="ico"></span>「전자상거래 등에서의
                    소비자보호에 관한 법률」에 의한 반품규정이 판매자가 지정한
                    반품조건보다 우선합니다.
                  </li>
                  <li>
                    <span className="ico"></span>미성년자가 물품을 구매하는
                    경우, 법정대리인이 동의하지 않으면 미성년자 본인 또는
                    법정대리인이 구매를 취소할 수 있습니다.
                  </li>
                  <li>
                    <span className="ico"></span>공산품, 전기용품 등 인증대상
                    상품을 구매하실 경우 '전기용품 및 생활용품 안전관리법' 등
                    관련 법률에 따라 허가 받은 상품인지 확인하시기 바랍니다.
                  </li>
                  <li>
                    <span className="ico"></span>11번가의 결제시스템을 이용하지
                    않고 판매자와 직접거래 하실 경우 상품을 받지 못하거나.
                    구매한 상품과 상이한 상품을 받는 등 피해가 발생 할 수 있으니
                    유의하시기 바랍니다.
                  </li>
                  <li>
                    <span className="ico"></span>등록된 판매물품과 내용은
                    판매자가 등록한 것으로 11번가(주)가 운영하는 11번가에 등록된
                    내용에 대하여 일체의 책임을 지지 않습니다.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
