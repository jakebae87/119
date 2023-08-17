import './Success.css'
import { Link } from 'react-router-dom';
import '../../App.css'

function Success() {
    return (
        <div className='Success'>
            <h2>회원가입을 축하드립니다!</h2>
            <div className='gotologin'>
                <Link to="/Login"><button className='login-btn'>로그인하러가기</button></Link>
            </div>
        </div>
    )
};

export default Success;