import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  return (
    <nav className="nav-container">
      {/* 임시로고 이미지 */}
      <img className="logo-nav-img" src ="https://www.cbnu.ac.kr/site/www/images/contents/cts596_img01.png" alt="plant_wep" />
      
      <ul className='links'>
        <li><Link to="/home">Home</Link> </li>
        <li> <Link to="/Diagonose">Diagonose</Link> </li>
        <li><Link to="/Contact">Contact</Link> </li>

      </ul>

      <div className="language-select"> 
        <select>
            <option>한국어</option>
            <option>English</option></select>
      </div>

      <div className="login-btn">
      {/* <button className="button gradient"><Link to="/login"> 관리자 로그인 </Link></button> */}
      <Link to="/login" className="button"> 관리자 로그인 </Link>
      </div>


     </nav>
  );
};

export default Nav;