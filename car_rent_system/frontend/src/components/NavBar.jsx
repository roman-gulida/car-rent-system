import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import '../styles/Home.css'
import logoImg from '../assets/carRentLogo.jpg'
import loginImg from '../assets/loginIcon.jpg'
import profileImg from '../assets/profileIcon.jpg'

function NavBar() {
    const {user, login, logout} = useAuthContext()

    const navigate = useNavigate()

    return ( 
        <div className="navbar-contrainer">
            <nav>
                <div className="navbar-brand">
                    <Link to="/">
                        <img src={logoImg} alt="Logo icon" className="navbar-logo"/>
                        <p className="navbar-brand-name">Car Rent</p>
                    </Link>    
                </div>    
                <div className="navbar-login">
                    {!user ? (
                    <Link to="/login">
                        <img src={loginImg} alt="Login icon" className="login-image"/>
                        <p className="login-text">Login</p>
                    </Link>) : (
                        <div className="profile-nav">
                            <Link to="/profile">
                                <img src={profileImg} alt="Profile icon" className="profile-image"/>  
                                <p className="profile-text">Profile {user.email}</p>
                            </Link>
                            <button className="logout-button" onClick={() => {
                                logout()
                                navigate("/")}
                            }>Logout</button>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default NavBar