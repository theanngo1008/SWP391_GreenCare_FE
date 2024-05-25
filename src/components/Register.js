import React, { useState } from 'react';


function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleRegister(e) {
        e.preventDefault()
        // Code to handle login goes here
        props.toggle()
    }

    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Login</h2>
                <form onSubmit={handleRegister}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <label>
                        Confirm password:
                        <input type="text" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                    </label>
                    <button type="submit">Register</button>
                </form>
                <button onClick={props.toggle}>Close</button>
            </div>
        </div>
    )
}
export default Register;