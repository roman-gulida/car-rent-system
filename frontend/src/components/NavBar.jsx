import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'

function NavBar() {
    const {user, login, logout} = useAuthContext()

    const navigate = useNavigate()

    return ( 
        <nav>
            <div className="navbar-brand">
                <Link to="/">
                    <img src="#" alt="Logo icon" className="navbar-logo"/>
                    <p className="navbar-brand-name">Car Rent</p>
                </Link>    
            </div>    
            <div className="navbar-login">
                {!user ? (
                <Link to="/login">
                    <img src="#" alt="Login icon" className="login-image"/>
                    <p className="login-text">Login</p>
                </Link>) : (
                    <div className="profile-nav">
                        <Link to="/profile">
                            <img src="#" alt="Profile icon" className="profile-image"/>  
                            <p className="profile-text">Profile</p>
                        </Link>
                        <button className="logout-button" onClick={() => {
                            logout()
                            navigate("/")}
                        }>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar