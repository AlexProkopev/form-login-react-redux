import React from 'react'
import { useSelector } from 'react-redux';
import css from "./ProfileInfo.module.css"
import { getLoginState } from 'redux/selectors';

const ProfileInfo = () => {
    const {name,login,email} = useSelector(getLoginState);
  return (
    <div className={css.wrapper}>
        <h3 className={css.title}>Your name: <span className={css.span}>{name}</span></h3>
        <h3 className={css.title}>Your login: <span className={css.span}>{login}</span></h3>
        <h3 className={css.title}>Your email: <span className={css.span}>{email}</span></h3>
    </div>
  )
}

export default ProfileInfo