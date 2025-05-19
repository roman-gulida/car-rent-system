import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { useState } from "react";
import axios from "axios"
import '../styles/Auth.css'

function Register() {
    const { login } = useAuthContext()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleRegister = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("/api/auth/register", {
                name: name.trim(),
                email: email.trim(),
                password: password.trim()
            })

            login(res.data)
            navigate("/profile")
        } catch (err) {
            setError("Registration failed.")
        }
    }

    return (
        <>
            <div className="login">
                <h3>Create an account</h3>
                <form className="login-form" onSubmit={handleRegister}>
                    <input placeholder="Name" type="text" onChange={e => setName(e.target.value)} />
                    <input className="login-email" placeholder="Email" type="text" onChange={e => setEmail(e.target.value)} />
                    <input className="login-password" placeholder="Password" type="text" onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="login-button">Continue</button>
                </form>
                {error && <p className="error">{error}</p>}
            </div>
            <div className="registration">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </>
    )
}

export default Register
