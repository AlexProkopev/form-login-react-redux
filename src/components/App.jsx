import FormComponentsInput from "./FormComponentsInput/FormComponentsInput";
import css from "./App.module.css"
import { useSelector } from "react-redux";
import LogIn from "./LogIn/LogIn";
import { Link, Route, Routes } from "react-router-dom";

export const App = () => {

  const loginState = useSelector(state => state.loginStore.login);


  return (
    <div className={css.App}>
     <div className={css.wrapper}>
     {loginState === null && <Link to="/" className={css.registrationLink}> Регистрация </Link>}
      <Link to="/login" className={css.btnNav} >Личный кабинет</Link>
     </div>
      <Routes>
        <Route path="/" element={<FormComponentsInput />} />
        <Route path="/login/*" element={<LogIn />} />
      </Routes>
    </div>
  )
};

