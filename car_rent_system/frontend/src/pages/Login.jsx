import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { useState } from 'react'
import axios from 'axios'
import '../styles/Auth.css'

function Login() {
    const { login } = useAuthContext()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("/api/auth/login", {
                email: email.trim(),
                password: password.trim()
            })

            login(res.data)
            navigate("/profile")
        } catch (err) {
            setError("Invalid email or password.")
        }
    }

    return (
        <>
            <div className="login">
                <h3>Welcome back</h3>
                <form className="login-form" onSubmit={handleLogin}>
                    <input className="login-email" placeholder="Email" type="text" onChange={e => setEmail(e.target.value)} />
                    <input className="login-password" placeholder="Password" type="text" onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="login-button">Continue</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
            <div className="registration">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </>
    )
}

export default Login
