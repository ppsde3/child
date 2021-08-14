import React from 'react';

export default function DistrictListing(props) {
  return (
    <div className="col-4">
    <div className="antialiased shadow-xl bg-white text-gray-900 rounded-lg overflow-hidden my-6 sm:w-64 lg:m-1 lg:self-start">
    <div className="p-4 truncate">
      <div className="uppercase text-sm font-medium text-gray-700">
      <input
          type="text"
          placeholder={props.district_name}
          name="state"
          className="text-success block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
        />
      <input
          type="text"
          placeholder={props.state_id}
          name="state"
          className="text-success block my-2 shadow p-1 appearance-none text-xl border lg:text-xl lg:px-4 rounded-lg text-gray-700 focus:outline-none focus:shadow-outline sm:w-full sm:flex-grow"
        />
      </div>
      {/* Details */}
    </div>
  </div>
  </div>
  );
}
