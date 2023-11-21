import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from 'redux/login.reducer';

const LoginForm = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const dispatch = useDispatch();
  const loginState = useSelector(state => state.loginStore.login);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'login') {
      setLoginValue(value);
    } else if (name === 'password') {
      setPasswordValue(value);
    }
  };

  const handleLogIn = () => {
    if (loginValue !== loginState.login) return alert('Неверный логин');
    if (passwordValue !== loginState.passwordUser) return alert('Неверный пароль');
    alert('Вы успешно вошли в кабинет');

    dispatch(toggleLogin());
    return
  };

  return (
    <form action="" className={css.formWrapper} onSubmit={handleLogIn}>
      Войдите в личный кабинет
      <label htmlFor="login">Введите логин</label>
      <input
        type="text"
        placeholder="login"
        name="login"
        onChange={handleInputChange}
        className={css.inputForm}
        required
      />
      <label htmlFor="password">Введите пароль</label>
      <input
        type="text"
        placeholder="password"
        name="password"
        required
        onChange={handleInputChange}
        className={css.inputForm}
      />
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
