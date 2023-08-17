import "./Profile.css";
// import "./global.css";
import React from "react";

export default function Profile() {
  return (
    <div className="Profile">
      <div className="profile_form">
        <h1>회원정보</h1>

        <form action="#" id="profileForm">
          <div>
            <table className="table">
              <tr>
                <th>이름</th>
                <td>
                  <span className="profile">김펫밀리</span>
                </td>
              </tr>
              <tr>
                <th>아이디</th>
                <td>
                  <span className="profile">Petmily</span>
                </td>
              </tr>
              <tr>
                <th>비밀번호</th>
                <td>
                  <span className="profile">********</span>
                </td>
              </tr>
              <tr>
                <th>비밀번호 확인</th>
                <td>
                  <span className="profile">********</span>
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <span className="profile">petmily@petmily.com</span>
                </td>
              </tr>
              <tr>
                <th>생년월일</th>
                <td>
                  <div>
                    <span className="birth">1997</span>
                    <span className="birth">5</span>
                    <span className="birth">20</span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>
                  <div>
                    <span className="number">010</span>
                    <span className="number">1234</span>
                    <span className="number">5678</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <input type="submit" className="editBtn" value="수정하기" />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
