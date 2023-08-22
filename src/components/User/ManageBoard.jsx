
export default function ManageBoard() {
  return (
    <div className="ManageBoard">
      <div className="cateTitle">
        <h1>게시글 관리</h1>
      </div>
      <div className="boardList">
        <table>
          <colgroup>
            <col className="attr1" />
            <col className="attr2" />
            <col className="attr3" />
          </colgroup>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>제목</th>
            <th>글쓴이</th>
            <th>작성일</th>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#">유통기한 확인요청</a>
            </td>
            <td>은**</td>
            <td>2023-05-11</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#">사이즈가 궁금해요</a>
            </td>
            <td>은**</td>
            <td>2023-04-25</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#">배송 언제 되나요?</a>
            </td>
            <td>은**</td>
            <td>2023-01-05</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#">유통기한 확인 해주세요</a>
            </td>
            <td>은**</td>
            <td>2022-12-29</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#">우리 강아지가 먹어도 될까요?</a>
            </td>
            <td>은**</td>
            <td>2022-12-11</td>
          </tr>
        </table>
      </div>

      <div className="search">
        <form action="#">
          <div class="searchConditions">
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
            <div>
              <button class="deleteBoard">삭제</button>
            </div>
          </div>
          <div className="searchInput">
            <div>
              <input type="text" />
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
  );
}
