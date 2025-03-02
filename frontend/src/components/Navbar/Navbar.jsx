import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {

  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>TRANG CHỦ</li>
        <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>THỰC ĐƠN</li>
        <li onClick={() => setMenu("store")} className={menu === "store" ? "active" : ""}>CỬA HÀNG</li>
        <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>LIÊN HỆ</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>ĐĂNG NHẬP</button>
      </div>
    </div>
  )
}

export default Navbar