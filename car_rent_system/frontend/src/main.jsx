import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'
import { BrowserRouter} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { RentedCarsProvider } from './contexts/RentedCarsContext.jsx'
import { BookingProvider } from './contexts/BookingContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RentedCarsProvider>
          <BookingProvider>
            <App />
          </BookingProvider>  
        </RentedCarsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
