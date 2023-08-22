import React from "react";
import { Link, useParams } from "react-router-dom";

import mockData from "../MockData/MockData_Notice";

export default function NoticeDetail() {

    const { id } = useParams();
    const notice = mockData.find((item) => item.id === parseInt(id));

    const contents = notice.contents.split('\n').map((it) => <p>{it}</p>);

    return (
        <div className="NoticeDetail">
            <div className="cateTitle">
                <h1>공지사항</h1>
            </div>

            <div className="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
                        <td>{notice.subject}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{notice.username}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{notice.createDate.toLocaleDateString()}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{notice.hit}</span></td>
                    </tr>
                    <tr>
                        <td className="contents">
                            {contents}
                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to="/community/notice"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
