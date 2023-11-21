import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from 'redux/login.reducer';
import Notiflix from 'notiflix';
import { getLoginState } from 'redux/selectors';

const LoginForm = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const loginState = useSelector(getLoginState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'login') {
      setLoginValue(value);
    } else if (name === 'password') {
      setPasswordValue(value);
    }
  };

  const handleLogIn = () => {
    if (loginValue !== loginState.login) return alert('Invalid login');
    if (passwordValue !== loginState.passwordUser) return alert('Invalid password');
    alert('You have successfully logged in');

    dispatch(toggleLogin());
    Notiflix.Notify.success(`Hello ${loginState.name}`)
    return
  };

  return (
    <form action="" className={css.formWrapper} onSubmit={handleLogIn}>
     Log in to your personal account
      <label htmlFor="login">Enter your login</label>
      <input
        type="text"
        placeholder="login"
        name="login"
        onChange={handleInputChange}
        className={css.inputForm}
        required
      />
      <label htmlFor="password">Enter your password</label>
      <input
        type="text"
        placeholder="password"
        name="password"
        required
        onChange={handleInputChange}
        className={css.inputForm}
      />
      <button type="submit" className={css.btnLogIn}>Log In</button>
    </form>
  );
};

export default LoginForm;
