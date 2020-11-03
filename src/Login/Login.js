import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase';
import { actionType } from '../reducer';
import { useStateValue } from '../stateProvider';
import './Login.css';

function Login() {
    const [state, dispatch] = useStateValue();

    const handleSingIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionType.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://images.unsplash.com/photo-1596526131158-52be64dcc208?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80" />
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
            </div>
            <Button type="submit" onClick={handleSingIn}>
                Sign in
            </Button>
        </div>
    )
}

export default Login
