import React from 'react'
import css from "./Layout.module.css"
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getIsLoginState } from 'redux/selectors';

const Layout = ({children}) => {
    const isLogin = useSelector(getIsLoginState);
  return (
   <>
    <div className={css.wrapper}>
    {!isLogin && <Link to="/registration" className={css.registrationLink}> Registration </Link>}
     <NavLink to="/login" className={css.btnNav} >Personal Area</NavLink>
     <NavLink to="/" className={css.btnNav}>Home</NavLink>
    </div>
    <div>
    {children}
 </div>
 </>
  )
}

export default Layout