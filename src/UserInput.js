import React from 'react';
import Crime from './crime';






class UserInput extends React.Component{


  constructor(props){
    super(props)

    this.state={
      value: ""
    };

    
    this.clickMe = this.clickMe.bind(this);
  }

  handleChange = (e) =>{

    this.setState({value: e.target.value});
    
        
    }
  


    clickMe=()=>{
        console.log(this.state.value);
    }

    

    render(){
     
        return(
            <div>
            <select 
            value={this.state.selectValue} 
            onChange={this.handleChange} 
          >
            <option value="VANDALISM">VANDALISM</option>
            <option value="ROBBERY">ROBBERY</option>
            <option value="ASSAULT">ASSAULT</option>
          </select>
          <button
            className="btn btn-primary"
            onClick={this.clickMe}>
            submit 
          </button>

       
            <Crime value = {this.state.value}/>

            </div>

        )
        
    }
}

export default UserInput; 