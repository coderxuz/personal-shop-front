import { Button } from '../button/button'
import classes from './login.module.css'
import React from 'react'

export default function login() {
    return (
        <>
            <div className={classes.login}>
                <input placeholder='Username' className={classes.username} />
                <input placeholder='Password' id='password' />
                <a href="" className={classes.forgot}>forgot password?</a>
                <Button>Login</Button>
            </div>
        </>
    )
}
