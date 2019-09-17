
import React from 'react';
import axios from 'axios';
import '../style/crime.css'


class crime extends React.Component{

constructor(props){
  super(props)
 this.state = {crime: [],
 value: ""
};

}

 handleChange = (e) =>{
    
       this.setState({value: e.target.value});
        
            
         }
      

clickMe=()=>{
    
  
  const self = this;

  
  var url = `https://data.sfgov.org/resource/cuks-n6tp.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272018-01-01T12:00:00%27&category=${this.state.value}`
  axios.get(url).then(function(response){
    self.setState({crime: response.data});
  })


}

render(){
  return(
      <div className = 'crime'>
    <select className ='select'
    value={this.state.selectValue} 
    onChange={this.handleChange} 
   > <option value="Select">PLEASE SELECT</option>
    <option value="LARCENY/THEFT">LARCENY/THEFT</option>
    <option value="ROBBERY">ROBBERY</option>
    <option value="ASSAULT">ASSAULT</option>
    <option value="DRUG/NARCOTIC">DRUG/NARCOTIC</option>
  </select>
  <button
    className="btn btn-primary"
    value = {this.state.value}
    onClick={this.clickMe}>
    submit 
  </button>
  <h3 className = 'nameInsert'>{this.state.value}</h3>    
        {this.state.crime.map(function(stat, i){
          return(
              <ul className = 'records'>
              <li key={i}>{stat.address} {stat.time} {stat.descript} </li>
              </ul>

          )
        })}
    </div>
    
  )


}


}

export default crime;
