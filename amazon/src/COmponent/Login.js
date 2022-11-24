import React, {useState} from "react";
import {Link,useHistory} from "react-router-dom";
import './login.css';
import {auth} from "../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
            .then(auth=>{
                history.push('/');
            }).catch(error =>alert(error.message));
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if(auth){
                    history.push('/');
                }
            })
            .catch(error => alert('여기서 에러났어요/'))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img className='image_logo'
                     src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=''/>
            </Link>

            <div className='login_container'>

                <h1>로그인</h1>

                <form>
                    <h5>이메일</h5>
                    <input type="text" value={email}  onChange={e => {
                        setEmail(e.target.value)
                    }}/>
                    <h5>비밀번호</h5>
                    <input value={password}  type='password' onChange={e => {
                        setPassword(e.target.value)
                    }}/>
                    <button className='login_signButton' onClick={signIn}>로그인</button>
                </form>
                <p>계정이 없으십니까?</p>
                <button className='login_registerButton' onClick={register}>회원가입</button>
            </div>
        </div>);
}

export default Login;