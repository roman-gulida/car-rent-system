import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext() 

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    useEffect( () => {
        const storedUser = localStorage.getItem("user")

        if (storedUser) {
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const login = (user) => {
        localStorage.setItem("user", JSON.stringify(user))
        setUser(user)
    }

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null)
    }

    const value = {
        user, login, logout    
    }

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}