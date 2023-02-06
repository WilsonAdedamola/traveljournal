import { BoxIconElement } from 'boxicons'
import React from 'react'

const Header = () => {

   const [isGoingOut, setIsGoingOut] = React.useState(true)
   function click(){
       isGoingOut ? setIsGoingOut ===false : setIsGoingOut === true
   }  
   console.log(click)
  return (
    <div className='header'>
      <box-icon name='world' className="world" size='sm' color='white'></box-icon>
      <p className='header__text'>my travel journal</p>
    </div>
  )
}

export default Header
