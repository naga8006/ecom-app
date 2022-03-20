import React, { useEffect, useState } from "react"
import "./Nav.css"
import { Link } from "react-router-dom"

function Nav() {
  const [username, setUserName] = useState("")

  useEffect(() => {
    setUserName(localStorage.getItem("username"))
  }, [])

  const logout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("userid")
    localStorage.removeItem("token")

    window.location.href = "/"
  }

  return (
    <div className="nav">
      <div className="nav-left">
        <h3>Ecommerce</h3>
      </div>
      <div className="nav-right">
        <Link className="text-decoration-none" to={"/account"}>
          Account
        </Link>
        <Link className="text-decoration-none" to={"/cart"}>
          Cart
        </Link>
        <div className="user-intro">hi {username}</div>
        <div onClick={logout} className="logout-btn">
          Logout
        </div>
      </div>
    </div>
  )
}

export default Nav
