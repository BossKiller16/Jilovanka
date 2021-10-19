import React from 'react'
import { useState } from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import logo from '../album/logo.svg'
import './navbar.css'
function Navbar() {
   const [sidebar, setSidebar] = useState(false)

   const showSidebar = () => setSidebar(!sidebar)

   return (
      <nav className="navbar fixed-left  fixed-top">
         <div className={styles.brand}>
            <img src={logo} alt="logo" className={styles.logo} />
         </div>
         <div className={styles.menuIcon}>
            <i
               className={sidebar ? 'fas fa-times' : 'fas fa-bars'}
               onClick={showSidebar}
            ></i>
         </div>
         <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className={styles.list} onClick={showSidebar}>
               <li className="nav-item">
                  <Link className="nav-link link" to="/">
                     ÚVOD
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link link" to="/aktivity">
                     AKTIVITY
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link link" to="/galerie">
                     FOTOGOLERIE
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="link nav-link" to="/cenik">
                     CENÍK
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="link nav-link" to="/vybaveni">
                     VYBAVENÍ
                  </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link link" to="/kontakt">
                     KONTAKT
                  </Link>
               </li>
            </ul>
         </ul>
      </nav>
   )
}

export default Navbar
