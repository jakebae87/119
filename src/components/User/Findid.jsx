import './Findid.css'

function Findid () {
    return (
        <div className="Findid">
        <div className="cateTitle">
            <h1>아이디찾기</h1>
        </div>

        <div className="find_ID">
            <form method="post" action="#" id="findID-form">
                <input type="text" className="findidbox" name="userName" placeholder="이름" />
                <input type="email" className="findidbox" name="userEmail" placeholder="이메일" />
                <input type="submit" className="findBtn" value="아이디찾기" />
            </form>
        </div>
    </div>
    )
};

export default Findid;