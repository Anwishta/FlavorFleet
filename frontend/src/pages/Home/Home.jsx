import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import Menu from '../../components/Navbar/Menu/Menu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
