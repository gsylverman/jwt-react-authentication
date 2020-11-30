import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/actions';

const Logout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutAction());
  },[dispatch])
  return (
    <div>
      Bye
    </div>
  );
};

export default Logout;