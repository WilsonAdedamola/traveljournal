import { BoxIconElement } from 'boxicons'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <box-icon name='world' className="world" size='sm' color='white'></box-icon>
      <p className='header__text'>my travel journal</p>
    </div>
  )
}

export default Header
