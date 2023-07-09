import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span> 
      <div className='user'>
        <img src="https://images.pexels.com/photos/3978518/pexels-photo-3978518.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
