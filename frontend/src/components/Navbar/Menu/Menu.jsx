import React from 'react'
import './Menu.css'
import { menu_list } from '../../../assets/assets'

const Menu = (category, setCategory) => {
  return (
    <div className='menu-list' id='menu-list'>
        <h1>Explore our menu</h1>
        <p className='menu-list-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem soluta debitis natus nesciunt at, aut dignissimos reprehenderit assumenda sed!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category==item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default Menu
