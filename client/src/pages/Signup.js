import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '', firstName: '', lastName: '' });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(formState)

    //use try / catch instead of promises to handle errors
    try {
      //execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);

    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Sign Up</h4>
          <div className='card-body'>
            <form onSubmit={handleFormSubmit}>
            <input
                className='form-input'
                placeholder='First Name'
                name='firstName'
                type='firstName'
                id='firstName'
                value={formState.firstName}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Last Name'
                name='lastName'
                type='lastName'
                id='lastName'
                value={formState.lastName}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className='form-input'
                placeholder='Password'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              <button className='border-2 border-black rounded p-1' type='submit'>
                Submit
              </button>
            </form>
            {error && <div>Sign up failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
