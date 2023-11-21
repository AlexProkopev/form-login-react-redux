import React from 'react'
import css from "./UserInfo.module.css"
import { NavLink, Route, Routes } from 'react-router-dom';
import ChangeFormUser from 'components/ChangeFormUser/ChangeFormUser';
import ProfileInfo from 'components/ProfileInfo/ProfileInfo';


const UserInfo = () => {

    
  return (
    <>
    <div className={css.wrapper}>


<NavLink to="change" className={css.burgerUserLink}>Change progfile</NavLink>
<NavLink to="info"className={css.burgerUserLink} >My progfile</NavLink>
<h3 className={css.title}>User Info</h3>

</div>
<div>
    <Routes>
        <Route path='change' element={<ChangeFormUser/>}/>
        <Route path='info' element={<ProfileInfo/>}/>
    </Routes>
</div>
</>

  )
}

export default UserInfo