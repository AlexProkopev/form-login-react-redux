import React from 'react';
import { useDispatch } from 'react-redux';
import { addLogin } from 'redux/login.reducer';
import css from './FormComponentsInput.module.css';

const FormComponentsInput = () => {
  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    const passwordUser = e.currentTarget.elements.password.value;
    const login = e.currentTarget.elements.login.value;
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;

    const finalFormResult = {
      name,
      passwordUser,
      login,
      email,
    };
    dispatch(addLogin(finalFormResult));
    alert("Вы успешо зарегестрировались, перейдите во вкладку Личный кабинет что бы войти")

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.formWrapper}>
      <label>Введите логин</label>
      <input type="text" name="login" required  className={css.inputForm}/>
      <label>Введите пароль</label>
      <input type="text" name="password" required className={css.inputForm}/>
      <label>Введите Имя</label>
      <input type="text" name="name"  required className={css.inputForm}/>
      <label>Введите E-mail</label>
      <input type="text" name="email" required className={css.inputForm}/>

      <button type="submit" className={css.btnForm}>Log In</button>
    </form>
  );
};

export default FormComponentsInput;
