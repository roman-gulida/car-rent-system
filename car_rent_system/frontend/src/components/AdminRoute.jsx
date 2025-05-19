import { Navigate } from "react-router-dom"

function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"))
  if (user?.email !== "admin") {
    return <Navigate to="/profile/account" replace />
  }
  return children;
}

export default AdminRoute;
