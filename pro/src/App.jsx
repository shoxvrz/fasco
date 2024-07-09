import React, { useState } from 'react'
import useGetData from './hooks/useGetData'
import './App.css'
import Categories from './components/Categories'
import { Outlet } from 'react-router-dom'

const App = () => {
  const { data } = useGetData()
  const [showData, setShowData] = useState(false)
  const [navData, setNavData] = useState(false)

  const handleContData = ()=> {
    setShowData((prev) => !prev)
  }



  return (
    <div className="app">
      <h1>asdfasda</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, maxime nulla? Ipsa ut, velit at nesciunt <br /> necessitatibus eius iusto repellat aliquid. Blanditiis ex beatae rerum eos veniam iusto reprehenderit repellat!</p>
      <Categories />
      <Outlet />
      <button onClick={handleContData}>Show Items</button>
      {showData && (
        <div className="products">
          {data.map((pro) => (
            <div className="card" key={pro.id}>
              <img src={pro.image} alt="" />
              <h1>{pro.title}</h1>
              <p>{pro.price}</p>
              <span>{pro.category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
