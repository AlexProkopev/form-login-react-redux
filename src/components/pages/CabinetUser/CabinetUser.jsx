import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from 'redux/login.reducer';
import css from "./CaabinetUser.module.css"
import { Link } from 'react-router-dom';
import UserInfo from 'components/UserInfo/UserInfo';

const CabinetUser = () => {

    
    const dispatch = useDispatch();

   const handleLogOut =() => {
    dispatch(logOut())
    }

  return (
    <div className={css.wrapper}>
        <UserInfo/>
<Link to="/" onClick={handleLogOut} className={css.btnLogOut}>Log Out</Link>
    </div>
  )
}

export default CabinetUser