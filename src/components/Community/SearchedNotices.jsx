import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Mock Data
import mockData from "../MockData/MockData_Notice";

function SearchedNotices() {

    const [searchParams, setSearchParams] = useSearchParams("");

    const search = searchParams.get('searchWord');
    // name이 searchWord인 값을 search에 저장한다. (?searchWord=휴무, search = '휴무')

    const getSearchResult = () => {
        if (search == null) {
            return mockData;
        } else {
            return search === "" ? mockData
                : mockData.filter((it) => it.subject.includes(search));
        }
    }

    return (
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

                {getSearchResult().map((notice) =>
                    <tr>
                        <td><Link to={notice.url}>{notice.subject}</Link></td>
                        <td>{notice.usename}</td>
                        <td>{notice.createDate.toDateString()}</td>
                    </tr>
                )}
            </table>
        </div>
    );
}

export default SearchedNotices;