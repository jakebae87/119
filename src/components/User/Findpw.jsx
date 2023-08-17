import './Findpw.css'

function Findpw () {
    return (
        <div className="Findpw">
        <div class="cateTitle">
            <h1>비밀번호찾기</h1>
        </div>

        <div className="find_PW">
            <form method="post" action="" id="findPW-form">
                <input type="text" className="findpwbox" name="userName" placeholder="아이디" />
                <input type="email" className="findpwbox" name="userEmail" placeholder="이메일" />
                <input type="submit" className="findBtn" value="비밀번호찾기" />
            </form>
        </div>
    </div>
    )
};

export default Findpw;