import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import ListingCard from './ListingCard';
import AddState from './AddState';

function State() {
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState('');
  const [isFetching, setIsFetching] = useState(true);
  let state='';
  useEffect(() => {
    const fetchState = async () => {
      setIsFetching(true);
      try {
        const response = await axios({
          method: 'GET',
          url: 'http://15.206.43.124:5000/api/states',
        });
        if (response.status === 200) {
          setIsFetching(false);
          setData(response.data.state);
        }
      } catch (error) {
        return setAlert(
          <SweetAlert
            danger
            title="Woot!"
            customButtons={
              <React.Fragment>
                <input
                  onClick={() => window.location.reload(false)}
                  value="Try Again"
                  type="submit"
                  className="block md:inline bg-themeGreen mx-1 px-3 py-1 lg:text-2xl rounded-lg text-xl text-gray-800 focus:outline-none focus:shadow-outline shadow"
                />
              </React.Fragment>
            }
          >
            Problems to retrieve the State. Please, try again later.
          </SweetAlert>
        );
      }
    };
    fetchState();
  }, [state]);

  let results;
  if (data) {
    results = data.map((el, index) => <ListingCard key={index} {...el} />);
  }
  else {
    results = (
      <div className="flex items-center flex-col justify-center w-full h-full flex-grow bg-gray-100 text-gray-800">
        <h2 className="font-bold text-6xl">Sorry,</h2>
        <h3 className="font-base"> No State Added.</h3>
      </div>
    );
  }

  return (
    <>
    <div className="container">
       <div className="row">
       {alert}
         <AddState/>
         <div
        className={`${
          isFetching ? '' : 'hidden'
        } w-full bg-yellow-100 m-auto flex justify-center content-center items-center`}
      >
        <ReactLoading type="spin" color="#7BFFB7" height={70} width={70} />
        <p className="text-2xl text-teal-400 mx-4">Processing...</p>
      </div>
    {results}
    </div>
    </div>
    </>
  );
}

export default State;
