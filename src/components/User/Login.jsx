import './Login.css'
import { Link } from 'react-router-dom';
import '../../App.css'

function Login () {
    return (
        <div className="Login">
        <div className="cateTitle">
            <h1>로그인</h1>
        </div>

        <div className="login_">
            <form method="post" action="#" id="login-form">
                <input type="text" className="loginbox" name="userName" placeholder="아이디" />
                <input type="password" className="loginbox" name="userPassword" placeholder="비밀번호" />
                <input type="submit" className="loginBtn" value="로그인" />
            </form>
            <hr/>
            <button className="kakao">카카오로 로그인</button>
            <button className="naver">네이버로 로그인</button>
            <ul>
                <Link to='/signup'><li>회원가입</li></Link>
                <Link to="/findID"><li>아이디 찾기</li></Link>
                <Link to="/findPW"><li>비밀번호 찾기</li></Link>
            </ul>
        </div>
    </div>
    )
};

export default Login;