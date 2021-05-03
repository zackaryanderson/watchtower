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
    <main className='flex justify-center'>
      <div>
        <h4 className='font-bold'>Sign Up</h4>
        <div>
          <form onSubmit={handleFormSubmit} className="grid w-auto shadow-xl py-20 px-10 rounded-lg">
            <h3 className="flex">Name:</h3>
            <input
              className='form-input m-1 border-2 rounded p-1'
              placeholder='First'
              name='firstName'
              type='firstName'
              id='firstName'
              value={formState.firstName}
              onChange={handleChange}
            />
            <input
              className='form-input m-1 border-2 rounded p-1'
              placeholder='Last'
              name='lastName'
              type='lastName'
              id='lastName'
              value={formState.lastName}
              onChange={handleChange}
            />
            <h3 className="flex mt-2">Username:</h3>
            <input
              className='form-input m-1 border-2 rounded p-1'
              placeholder='Username'
              name='username'
              type='username'
              id='username'
              value={formState.username}
              onChange={handleChange}
            />
            <h3 className="flex mt-2">Email:</h3>
            <input
              className='form-input m-1 border-2 rounded p-1'
              placeholder='Email'
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange}
            />
            <h3 className="flex mt-2">Password:</h3>
            <input
              className='form-input m-1 border-2 rounded p-1'
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
        {/* </div> */}
      </div>
    </main >
  );
};

export default Signup;
