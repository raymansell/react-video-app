import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [credentials, setCredentials] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerRequest(credentials));
    history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            placeholder='Nombre'
            type='text'
            name='name'
            value={credentials.name}
            onChange={handleInput}
          />
          <input
            className='input'
            placeholder='Correo'
            type='text'
            name='email'
            value={credentials.email}
            onChange={handleInput}
          />
          <input
            className='input'
            placeholder='Contraseña'
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleInput}
          />
          <button className='button'>Registrarme</button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;
