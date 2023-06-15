import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../styles/navbar.module.css"
const NavBar = () => {
  return (
    <div className={styles.nav}>
      <ul>
      <NavLink to='/'>Home</NavLink>
        <NavLink to='/teacherportal'>Teacher Portal</NavLink>
        <NavLink to='/parentportal'>Parent Portal</NavLink>
        <NavLink></NavLink>
      </ul>
    </div>
  )
}

export default NavBar
