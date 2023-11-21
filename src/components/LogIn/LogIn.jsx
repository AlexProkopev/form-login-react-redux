import React from 'react';


import { useSelector } from 'react-redux';

import LoginForm from 'components/LoginForm/LoginForm';
import RouteCabinet from 'components/RouteCabinet/RouteCabinet';
import { getIsLoginState } from 'redux/selectors';

const LogIn = () => {
  const isLoading = useSelector(getIsLoginState);

  return (
    <div>
      {!isLoading && <LoginForm />}
      {isLoading && <RouteCabinet/> }
    </div>
  );
};

export default LogIn;
