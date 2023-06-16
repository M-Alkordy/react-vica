import React from 'react'

import  './NavBarStyle.js'
const NavBar = ({logo , firstElement , secElement , thirdElement}) => {
    const li = {color:"red",}
  return (
    <div className='nav'>
        <img src={logo} alt="" />
        <ul>
            <li style={li}>{firstElement}</li>
            <li>{secElement}</li>
            <li>{thirdElement}</li>
        </ul>
    </div>
  )
}

export default NavBar