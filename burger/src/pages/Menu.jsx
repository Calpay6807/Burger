import React from 'react'
import {MenuList} from "../Helper/MenuList"

function Menu() {
  return (
    <div className='menu'>

    <h1 className='menuTitle'>Our Menü</h1>
    <div className='menuList'>
    {
        MenuList.map((list, key) => {
            return <div key={key} className='menuItem'>
            <div>
            <img src={list.image} alt="" /></div>
            <h3>{list.name}</h3>
            <p>{list.price}$</p>
            
            </div>
        })
    }
    </div>
    
    </div>
  )
}

export default Menu