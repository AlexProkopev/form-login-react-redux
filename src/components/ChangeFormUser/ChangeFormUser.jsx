import React from 'react'
import { useSelector } from 'react-redux';
import css from "./ChangeFormUser.module.css"
import { getLoginState } from 'redux/selectors';

const ChangeFormUser = () => {
    
    const {name,login,email} = useSelector(getLoginState);
  return (
   <div className={css.wrapper}>
    <form className={css.formWrapper} >
    <label htmlFor="name"  className={css.label}>
        Change name: {name} ?
        <input type="text" name='name' className={css.input} />
    </label>
    <label htmlFor="login" className={css.label}>
        Change login: {login} ?
        <input type="text" name='login' className={css.input} />
    </label>
    <label htmlFor="name" className={css.label}>
        Change E-mail: {email} ?
        <input type="text" name='email' className={css.input} />
    </label>
    <button type="submit" disabled className={css.buttonChange}>Save options</button>
   </form>
   </div>
  )
}

export default ChangeFormUser