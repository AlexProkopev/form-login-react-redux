import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from 'redux/login.reducer';

const CabinetUser = () => {

    const loginState = useSelector(state => state.loginStore.login);
    const dispatch = useDispatch();

   const handleLogOut =() => {
    dispatch(logOut())
    }

  return (
    <div>
        <h2>Привет: {loginState.name}</h2>
<button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default CabinetUser