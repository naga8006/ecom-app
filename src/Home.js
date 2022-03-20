import React, { useState, useEffect } from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import axios from "axios"

function Home() {
  const BASE_URL = "http://13.235.87.215:4000"

  const [categorylist, setCategoryList] = useState([])

  useEffect(() => {
    const data = {
      token: localStorage.getItem("token"),
    }
    axios
      .post(BASE_URL + "/api/v1/category/all", data)
      .then(function (response) {
        console.log(response)
      })
  }, [])
  return (
    <div id="homepage">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="home-title text-centre">WELCOME TO ECOMMERCE</h2>
            <div className="category-list d-flex flex-row justify-content-center align-items-center ">
              <div className="category-item  rounded-3 d-flex justify-content-center align-items-center">
                <Link to={"/products"}>ALL PRODUCTS</Link>
              </div>
              {categorylist.map((category) => (
                <div
                  key={category.categorylist}
                  className="category-item  rounded-3 d-flex justify-content-center align-items-center"
                >
                  <p>{category.name}</p>
                </div>
              ))}
            </div>
            <div className="category-title text-centre">
              Select the caterory to START SHOPPING
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
