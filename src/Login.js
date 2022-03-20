import React, { useState } from "react"
import "./Login.css"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

const BASE_URL = "http://13.235.87.215:4000"

function Login() {
  const [showSignup, setShowSignup] = useState(false)

  const loginFn = () => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const data = {
      username: username.value,
      password: password.value,
    }
    axios.post(BASE_URL + "/api/v1/user/login", data).then(function (response) {
      console.log(response)
      if (response.data.success) {
        localStorage.setItem("username", response.data.data.username)
        localStorage.setItem("userid", response.data.data.userid)
        localStorage.setItem("token", response.data.data.token)
        window.location.href = "/home"
      }
    })
  }
  const signupFn = () => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const data = {
      username: username.value,
      password: password.value,
    }
    axios
      .post(BASE_URL + "/api/v1/user/signup", data)
      .then(function (response) {
        console.log(response)
        if (response.data.success) {
          localStorage.setItem("username", response.data.data.username)
          localStorage.setItem("userid", response.data.data.userid)
          localStorage.setItem("token", response.data.data.token)
          window.location.href = "/home"
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const toggleSignup = () => {
    setShowSignup(!showSignup)
  }
  return (
    <div id="loginpage">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="home-title text-centre">WELCOME TO LOGIN</h2>
            {!showSignup ? (
              <div className="login-wrapper">
                <h4 className="text-centre">login</h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    id="username"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    id="password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary "
                    value="Login as a user"
                    onClick={loginFn}
                    placeholder="password"
                    id="password"
                  />
                </div>
                <div
                  className="signup-btn text-centre text-info"
                  onClick={toggleSignup}
                >
                  don't have a acccount?signup
                </div>
                <div className="auth-error-msg text-danger text-center"></div>
              </div>
            ) : (
              <div className="login-wrapper">
                <h4 className="text-centre">Signup</h4>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="username"
                    id="username"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    id="password"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="submit"
                    className="form-control btn btn-primary "
                    value="signup as a user"
                    onClick={signupFn}
                    placeholder="password"
                    id="password"
                  />
                </div>
                <div
                  className="signup-btn text-centre text-info"
                  onClick={toggleSignup}
                >
                  Already have an account signin
                </div>
                <div className="auth-error-msg text-danger text-center"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
