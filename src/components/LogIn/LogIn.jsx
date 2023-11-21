import React from 'react';


import { useSelector } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';
import RouteCabinet from 'components/RouteCabinet/RouteCabinet';

const LogIn = () => {
  const isLoading = useSelector(state => state.loginStore.isLoggedIn);

  return (
    <div>
      {!isLoading && <LoginForm />}
      {isLoading && <RouteCabinet/> }
    </div>
  );
};

export default LogIn;
