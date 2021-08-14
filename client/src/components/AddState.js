import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';
import ReactLoading from 'react-loading';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
 
function AddState() { 
  const { register, handleSubmit, errors } = useForm();
  const [alert, setAlert] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  
  const onSubmit = async (data) => {
    setIsFetching(true);
    console.log(data);
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://15.206.43.124:5000/api/state',
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
                        to={`/state`}
                      />
                    )
                  }
                  value="View State"
                  type="submit"
                  className="block md:inline bg-themeGreen mx-1 px-3 py-1 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
                />
              </React.Fragment>
            }
          >
            State created!
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
        Something Wrong happened !
        </SweetAlert>
      );
    }
  };
  return (
      <>
    <div className="col-4">
    {alert}
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="antialiased shadow-xl bg-white text-gray-900 rounded-lg overflow-hidden my-6 sm:w-64 lg:m-1 lg:self-start">
      <div className="p-4 truncate">
        <div className="uppercase text-sm font-medium text-gray-700">
        <input
            type="text"
            placeholder="Enter State"
            name="state_name"
            ref={register({ required: true, maxLength: 80 })}
            className="block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-black-700 focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
          />
           {errors.name && (
            <span className="my-2 text-red-600">Please provide a State Name.</span>
          )}
        <input
            type="number"
            placeholder="Enter State Id"
            name="state_id"
            ref={register({ required: true, maxLength: 80 })}
            className="block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
          />
           {errors.name && (
            <span className="my-2 text-red-600">Please provide a State Id.</span>
          )}
        </div>
        {/* Details */}
      </div>
    </div>
    <input
            type="submit"
            className="block my-2 md:inline bg-themeYellow mx-1 px-3 lg:mt-6 py-1 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
          />
    </form>
    </div>
    <div
        className={`${
          isFetching ? '' : 'hidden'
        } w-full bg-yellow-100 m-auto flex justify-center content-center items-center`}
      >
        <ReactLoading type="spin" color="#7BFFB7" height={70} width={70} />
        <p className="text-2xl text-teal-400 mx-4">Processing...</p>
      </div>
      </>
  );
}

export default AddState;
