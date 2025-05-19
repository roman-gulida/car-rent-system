import { NavLink, Outlet } from "react-router-dom"
import '../styles/CarCard.css'

function ProfileLayout() {
    const user = JSON.parse(localStorage.getItem("user"))
    const isAdmin = user?.email === "admin"

    return (
        <div className="profile-layout">
            <nav className="profile-sidebar">
                <NavLink to={"account"} className={({isActive}) => isActive ? "active" : ""}>Account</NavLink>
                <NavLink to={"current-booking"} className={({isActive}) => isActive ? "active" : ""}>Current Booking</NavLink>
                <NavLink to={"booking-history"} className={({isActive}) => isActive ? "active" : ""}>Booking History</NavLink>
                {isAdmin && (
                    <>
                        <NavLink to={"add-car"} className={({isActive}) => isActive ? "active" : ""}>Add Car</NavLink>
                        <NavLink to={"rented-cars"} className={({isActive}) => isActive ? "active" : ""}>Rented Cars</NavLink>
                    </>
                )}
                
            </nav>
            <section className="profile-content">
                <Outlet/>
            </section>
        </div>
    )
}

export default ProfileLayout