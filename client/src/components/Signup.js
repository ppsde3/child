import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';

function Signup(props) {
  const { setIsAuth } = useContext(AuthContext);
  const [alert, setAlert] = useState('');

  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://15.206.43.124:5000/api/user/register',
        data,
      });

      if (response.status === 200) {
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('userID', response.token);
        setIsAuth(true);
        props.history.push('/');
      }
    } catch (error) {
      return setAlert(
        <SweetAlert
          danger
          title="Woot!"
          customButtons={
            <React.Fragment>
              <input
                onClick={() => setAlert(null)}
                value="Try Again"
                type="submit"
                className="block md:inline bg-themeGreen mx-1 px-3 py-1 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
              />
            </React.Fragment>
          }
        >
          Something went wrong!
        </SweetAlert>
      );
    }
  };

  return (
    <div className="p-6 flex flex-grow flex-col lg:justify-center">
      {alert}
      <div className="lg:max-w-none lg:flex lg:flex-row lg:bg-gray-100 lg:shadow-inner lg:shadow-2xl lg:max-w-6xl lg:max-w-6xl">
        {/* Form */}
        <div className="lg:w-2/3 lg:mx-auto lg:p-16">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <h1 className="font-bold text-2xl text-gray-900 lg:text-5xl">
              Sign up
            </h1>
            <p className="font-light text-gray-900">
              Already a member?
              <Link to="/login" className="text-blue-700">
                {` `}Sign in
              </Link>
            </p>
            <label className="font-medium text-gray-900 mt-10">User Name:</label>
            <input
              type="text"
              name="username"
              placeholder="name"
              ref={register({ required: true, minLength: 4 })}
              className="my-4 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline md:w-full md:flex-grow"
            />
             <label className="font-medium text-gray-900 mt-10">Organization:</label>
            <input
              type="text"
              name="organization"
              placeholder="organization"
              ref={register({ required: true, minLength: 4 })}
              className="my-4 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline md:w-full md:flex-grow"
            />
             <label className="font-medium text-gray-900 mt-10">Designation:</label>
            <input
              type="text"
              name="designation"
              placeholder="designation"
              ref={register({ required: true, minLength: 4 })}
              className="my-4 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline md:w-full md:flex-grow"
            />
            <label className="font-medium text-gray-900">Password:</label>
            <input
              type="password"
              placeholder=""
              name="password"
              ref={register({ required: true, minLength: 8 })}
              className="my-4 shadow p-1 appearance-none text-xl border lg:px-4 lg:text-xl rounded-lg text-gray-700 focus:outline-none focus:shadow-outline md:w-full md:flex-grow"
            />
            {errors.password && (
              <span className="text-red-600">
                ⚠ Please provide a password with at least 8 characters.
              </span>
            )}

            <input
              type="submit"
              className="md:inline bg-themeYellow mx-1 px-3 py-1 lg:mt-2 lg:ml-6 lg:mx-8 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
