import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { useState } from 'react'

function Login() {
    const {user, login, logout} = useAuthContext()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        const userData = {
            email: email.trim(), 
            password: password.trim()
        }

        login(userData)

        navigate("/profile")
    }

    return (
        <>
            <div className="login">
                <h3>Welcome back</h3>
                <form className="login-form" onSubmit={handleLogin}>
                    <input className="login-email" placeholder="Email" type="text" onChange={e => setEmail(e.target.value)}/>
                    <input className="login-password" placeholder="Password" type="text" onChange={e => setPassword(e.target.value)}/>
                    <button type="submit" className="login-button">Continue</button>
                </form>
            </div>
            <div className="registration">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </>
    )
}

export default Login


