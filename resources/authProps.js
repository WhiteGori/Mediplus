// useAuthProps.js
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Redux/authSlice';

export default function useAuthProps() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const [direccion, setDireccion] = useState('');
  const [nombreFarmacia, setNombreFarmacia] = useState('');
  const [razonSocial, setRazonSocial] = useState('');
  const [cuit, setCuit] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    dispatch,
    handleLogin,
    handleLogout,
    email, setEmail,
    password, setPassword,
    rePassword, setRePassword,
    firstName, setFirstName,
    lastName, setLastName,
    birthDate, setBirthDate,
    direccion, setDireccion,
    nombreFarmacia, setNombreFarmacia,
    razonSocial, setRazonSocial,
    cuit, setCuit,
    auth,
  };
}
