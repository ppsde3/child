import React, { Component } from 'react'  
import BootstrapTable from 'react-bootstrap-table-next';  
import axios from 'axios';  
import {NavLink} from 'react-router-dom';
import ReactLoading from 'react-loading';
export class Childs extends Component {  
        state = {  
                isFetching:true,
                childs: [],  
                columns: [
               {  
                  dataField: 'name',  
                  text: 'Name',  
                  sort:true  
                }, 
                {  
                  dataField: 'father_name',  
                  text: 'Father Name',  
                },  
                {  
                  dataField: 'mother_name',  
                  text: 'Mother Name',  
                },  
                {  
                  dataField: 'dob',  
                  text: 'Date of Birth',  
                  sort: true  
                },  
                {  
                  dataField: 'district_id',  
                  text: 'District',  
                  sort: true  
                },  
                {  
                  dataField: 'sex',  
                  text: 'sex',  
                  sort: true  
                },]  
              }  ;
    componentDidMount() { 
      this.setState({    
        isFetching:true  
  });     
      axios.get('http://15.206.43.124:5000/api/children').then(response => {   
        this.setState({    
              childs: response.data.children_profile ,
              isFetching: false   
        });    
      });    
    }   
render() {  
   return (  
      <div className="container"> 
      <div className="row">
        <div className="col"> 
     <button className="btn btn-primary">Childs List</button>
     </div>
     <div className="col">
     <button className="btn btn-primary"><NavLink to="/createChild">Add Child</NavLink></button>
     </div>
        </div>   
      <div style={{ marginTop: 20 }}>  
      <BootstrapTable   
      striped  
      hover  
      keyField='id'   
      data={ this.state.childs }   
      columns={ this.state.columns } ></BootstrapTable>  
    </div>
    <div
        className={`${
          this.state.isFetching ? '' : 'hidden'
        } w-full bg-yellow-100 m-auto flex justify-center content-center items-center`}
      >
        <ReactLoading type="spin" color="#7BFFB7" height={70} width={70} />
        <p className="text-2xl text-teal-400 mx-4">Processing...</p>
      </div>
    </div>  
   )  
  }  
}  

export default Childs;

