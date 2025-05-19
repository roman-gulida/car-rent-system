import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

function Account() {
    const {user, setUser, login, logout} = useAuthContext()

    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const changePassword = (e) => {
        e.preventDefault()

        const userData = {
            email: user.email.trim(), 
            password: password.trim()
        }

        setUser(userData)
    }

    return (
        <div className="account">
            <label className="account-email">
                Email
                <input placeholder={user?.email} disabled/>
            </label>
            <form className="account-password" onSubmit={changePassword}>
                Password
                <input className="password" type="password" onChange={e => setPassword(e.target.value)} placeholder={user?.password}/>
                <button type="submit" className="account-update-password">Update Password</button>
            </form>
            <button className="account-logout-button" onClick={() => {
                logout()
                navigate("/")
            }}>Logout</button>
        </div>
    )
}

export default Account