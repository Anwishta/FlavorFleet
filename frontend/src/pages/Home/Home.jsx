import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Navbar/Header/Header'
import Menu from '../../components/Navbar/Menu/Menu'

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
