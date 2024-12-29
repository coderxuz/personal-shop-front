import axios from 'axios';
import classes from './login.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://192.168.1.20:8000/auth/login', {
                login: username,
                password: password
            });
            if (response.status === 200) {
                navigate('/dashboard');
            } else {
                setText('Password or username incorrect');
            }
        } catch (error) {
            console.error('Login failed', error);
            const errorMessage = error.response && error.response.data
                ? error.response.data.message
                : 'Login failed, please try again';
            setText(errorMessage);
        }
    };

    return (
        <>
            <form onSubmit={handleClick} className={classes.login}>
                <input
                    placeholder="Username"
                    className={classes.username}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                />
                <input
                    placeholder="Password"
                    id="password"
                    className={classes.password}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                />
                {text && <p className={classes.errorText}>{text}</p>}
                <a href="" className={classes.forgot}>Forgot password?</a>
                <input className={classes.but} type="submit" value="Login" />
            </form>
        </>
    );
}
