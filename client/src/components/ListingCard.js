import React from 'react';
import { Link } from 'react-router-dom';

export default function ListingCard(props) {
  return (
    <div className="col">
    <div className="antialiased shadow-xl bg-white text-gray-900 rounded-lg overflow-hidden my-6 sm:w-64 lg:m-1 lg:self-start">
      <div className="p-4 truncate">
        <div className="uppercase text-sm font-medium text-gray-700">
          <p>{`${props.state_id}`}</p>
        </div>
        <Link to={`/listing/${props.state_id}`} className="font-bold text-xl text-success">
          {props.state_name}
        </Link>
        {/* Details */}
      </div>
    </div>
    </div>
  );
}
