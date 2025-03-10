import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({ setShowLogin }) => {

  const [menu, setMenu] = useState("home");

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>TRANG CHỦ</Link>
        <a href='#explore-menu' onClick={() => setMenu("store")} className={menu === "store" ? "active" : ""}>CỬA HÀNG</a>
        <a href='#app-download' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>LIÊN HỆ</a>
        <a href='#footer' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>THỰC ĐƠN</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>ĐĂNG NHẬP</button>
      </div>
    </div>
  )
}

export default Navbar