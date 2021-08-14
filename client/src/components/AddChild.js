import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect,NavLink } from 'react-router-dom';
import ReactLoading from 'react-loading';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
 
function AddChild() { 
  const { register, handleSubmit, errors } = useForm();
  const [alert, setAlert] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  
  const onSubmit = async (data) => {
    setIsFetching(true);
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://15.206.43.124:5000/api/child',
        data: data,
      });
     
      if (response.status === 200) {
        setIsFetching(false);
        setAlert(
          <SweetAlert
            success
            title="Yay!"
            customButtons={
              <React.Fragment>
                <input
                  onClick={() =>
                    setAlert(
                      <Redirect
                        to={`/childs`}
                      />
                    )
                  }
                  value="View Childs"
                  type="submit"
                  className="block md:inline bg-themeGreen mx-1 px-3 py-1 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
                />
              </React.Fragment>
            }
          >
            Child created!
          </SweetAlert>
        );
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
                value="Ok"
                type="submit"
                className="block md:inline bg-themeGreen mx-1 px-3 py-1 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
              />
            </React.Fragment>
          }
        >
          Something wrong happened on our side. Try again later.
        </SweetAlert>
      );
    }
  };
  return (
    <div className="flex flex-col">
      {alert}
      <div className="px-6 py-3 bg-themeGreen">
        <button><NavLink to="/childs">Back</NavLink></button>
        <h1 className="font-bold text-2xl text-gray-900">Add Child</h1>
      </div>
      {/* Form */}
      <div className="flex flex-col p-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="font-bold text-gray-900 mt-4 text-xl">
            Child Information:
          </p>
          <hr className="border-orange-300 mb-4" />

        <label className="font-bold text-gray-900 mt-3">Name:</label>
          <input
            type="text"
            placeholder=""
            name="name"
            ref={register({ required: true, maxLength: 80 })}
            className="block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
          />
          {errors.name && (
            <span className="my-2 text-red-600">Please provide a Name.</span>
          )}

         <label className="font-bold text-gray-900 mt-3">Father's Name:</label>
          <input
            type="text"
            placeholder=""
            name="father_name"
            ref={register({ required: true, maxLength: 80 })}
            className="block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
          />
          {errors.name && (
            <span className="my-2 text-red-600">Please provide father name.</span>
          )}

          <label className="font-bold text-gray-900 mt-3">Mother's Name:</label>
          <input
            type="text"
            placeholder=""
            name="mother_name"
            ref={register({ required: true, maxLength: 80 })}
            className="block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
          />
          {errors.name && (
            <span className="my-2 text-red-600">Please provide mother name.</span>
          )}

          <label className="block font-bold text-gray-900 mt-3">
            Date of Birth:
          </label>
          <input
            type="date"
            placeholder="Date of Birth"
            name="dob"
            ref={register({ required: true })}
            className="my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline md:w-full md:flex-grow"
          />
          {errors.dob && (
            <span className="my-2 text-red-600">
              Please provide date of birth.
            </span>
          )}
           <div
        className={`${
          isFetching ? '' : 'hidden'
        } w-full bg-yellow-100 m-auto flex justify-center content-center items-center`}
      >
        <ReactLoading type="spin" color="#7BFFB7" height={70} width={70} />
        <p className="text-2xl text-teal-400 mx-4">Processing...</p>
      </div>
      
          <label className="font-bold text-gray-900 mt-3">District Id:</label>
          <input
            type="number"
            placeholder=""
            name="district_id"
            ref={register({ required: true, maxLength: 80 })}
            className="block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
          />
          {errors.district_id && (
            <span className="my-2 text-red-600">Please provide district id.</span>
          )} 
          <label className="font-bold text-gray-900 mt-3">Sex:</label>
          <input
            type="text"
            placeholder=""
            name="sex"
            ref={register({ required: true, maxLength: 80 })}
            className="block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
          />
          {errors.name && (
            <span className="my-2 text-red-600">Please provide details.</span>
          )} 
         
          <input
            type="submit"
            className="block my-2 md:inline bg-themeYellow mx-1 px-3 lg:mt-6 py-1 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
          />
        </form>
      </div>
    </div>
    
  );
}

export default AddChild;
