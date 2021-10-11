import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';


const Login = () => {
    const [{user}, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch ({
                type: "SET_USER",
                user: result.user,
            })
        })
        .catch((error) => alert(error.message))
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://www.chsica.org/wp-content/uploads/2020/10/Facebook-Logo-PNG-Transparent-Like-17.png" alt="" />
                <img src="https://www.richardsidey.com/wp-content/uploads/facebook.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
