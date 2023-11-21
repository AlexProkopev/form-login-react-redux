import React from 'react';
import { useDispatch } from 'react-redux';
import { addLogin } from 'redux/login.reducer';
import css from './FormComponentsInput.module.css';
import { Notify } from 'notiflix';


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
    Notify.success("You have successfully registered, go to the Personal Account tab to log in")

    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.formWrapper}>
      <label htmlFor='login'>Create a username</label>
      <input type="text" name="login" required  className={css.inputForm}/>
      <label  htmlFor='password'>Create a password</label>
      <input type="text" name="password" required className={css.inputForm}/>
      <label  htmlFor='name'>Enter your name</label>
      <input type="text" name="name"  required className={css.inputForm}/>
      <label  htmlFor='email'>Enter your E-mail</label>
      <input type="text" name="email" required className={css.inputForm}/>

      <button type="submit" className={css.btnForm}>Registration</button>
    </form>
  );
};

export default FormComponentsInput;
