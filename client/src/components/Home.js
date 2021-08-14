import React from 'react';

function Home(props) {
  return (
     <>
    <div class="container border mt-5">
    <div class="row align-items-start">
    <th class="col">
      Name: Ramesh Prakash
    </th>
    <th class="col">
      Organization: Bal Vikash
    </th>
    <th class="col">
     Designation: Cluster Coordinator
    </th>
    </div>
    </div>
    <img src={require("../assets/images/cityscapes.png")} className="img-fluid mt-5" alt="..."></img>
     </>
  );
}

export default Home;
