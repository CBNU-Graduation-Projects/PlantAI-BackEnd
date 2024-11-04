import React from 'react';
import { Link, useActionData, useLocation } from 'react-router-dom';
import './nav.css'

const Nav = () => {
  // 현재 페이지 상태를 나타내는 변수
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav-container">
      {/* 임시로고 이미지 */}
      <h2 style={{ color: 'white' }}>Plantalyze</h2>
      {/* <img className="logo-nav-img" src ="https://www.cbnu.ac.kr/site/www/images/contents/cts596_img01.png" alt="plant_wep" /> */}
      
      <ul className='links'>
        <li><Link to="/home" className={currentPath === "/home" ? "active" : ""}>Home</Link> </li>
        <li> <Link to="/Diagonose" className={currentPath === "/Diagonose" ? "active" : ""}>Diagonose</Link> </li>
        <li><Link to="/Contact" className={currentPath === "/Contact" ? "active" : ""}>Contact</Link> </li>

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