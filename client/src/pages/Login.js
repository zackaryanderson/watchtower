import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex justify-center'>
      <div>
          <h4 className='card-header font-bold'>Login</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit} className="grid w-auto shadow-xl py-20 px-10 rounded-lg">
              Email:
              <input
                className='form-input border-2 rounded px-1 my-2'
                placeholder='Your email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              Password:
              <input
                className='form-input border-2 rounded px-1 my-1'
                placeholder='******'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='btn d-block w-100 border-2 rounded px-1 my-2 hover:bg-fourth' type='submit'>
                Submit
              </button>
              {error && <div className="text-red-400">Login Failed</div>}
            </form>
          </div>
      </div>
    </main>
  );
};

export default Login;
