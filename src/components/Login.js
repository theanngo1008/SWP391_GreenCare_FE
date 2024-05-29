import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { RiLoginBoxLine } from "react-icons/ri";

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(e) {
        e.preventDefault();
        // Code to handle login goes here
        props.toggle();
    }

    function handleForgotPassword() {
        // Code to handle forgot password goes here
        console.log("Redirecting to forgot password page...");
        // You can replace the above line with actual navigation to the forgot password page
        // For example, if using React Router: history.push('/forgot-password')
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <span className="popup-close" onClick={props.toggle}><IoCloseOutline /></span>
                <form onSubmit={handleLogin}>
                    <label>
                        <MdOutlineMailOutline /> Email
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <FaLock /> Password
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button type="submit"><RiLoginBoxLine /> LOGIN</button>
                </form>
                <button className="forgot-password" onClick={handleForgotPassword}>Forgot Password?</button>
            </div>
        </div>
    );
}

export default Login;
