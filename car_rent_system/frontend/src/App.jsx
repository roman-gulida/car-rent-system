import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ProfileLayout from './components/ProfileLayout'
import './styles/App.css'
import Account from './pages/Profile/Account'
import AddCar from './pages/Profile/AddCar'
import BookingHistory from './pages/Profile/BookingHistory'
import CurrentBooking from './pages/Profile/CurrentBooking'
import RentedCars from './pages/Profile/RentedCars'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import PrivateRoute from './components/PrivateRoute'
import AdminRoute from './components/AdminRoute'


function App() {

  return (
    <>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={
            <PrivateRoute>
              <ProfileLayout />
            </PrivateRoute>
          }>
            <Route path='account' element={<Account />}/>
            <Route path='current-booking' element={<CurrentBooking />}/>
            <Route path='booking-history' element={<BookingHistory />}/>
            <Route path='add-car' element={
              <AdminRoute>
                <AddCar />
              </AdminRoute>}/>
            <Route path='rented-cars' element={
              <AdminRoute>
                <RentedCars />
              </AdminRoute>}/>
          </Route>
        </Routes>
      </main>
    </>
  )
}

export default App
