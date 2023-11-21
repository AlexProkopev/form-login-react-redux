import FormComponentsInput from "./FormComponentsInput/FormComponentsInput";
import css from "./App.module.css"
import LogIn from "./LogIn/LogIn";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
// import { lazy } from "react";

export const App = () => {

  return (
    <div className={css.App}>
     <Layout>
      <Routes>
        <Route path="/registration" element={<FormComponentsInput />} />
        <Route path="/login/*" element={<LogIn />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
      </Layout>
    </div>
  )
};

