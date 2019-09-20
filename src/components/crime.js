import React from "react";
import axios from "axios";
import "../style/crime.css";

class crime extends React.Component {
  constructor(props) {
    super(props);
    this.state = { crime: [], value: "" };
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  results = (e) => {
    const self = this;

    var url = `https://data.sfgov.org/resource/cuks-n6tp.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272018-01-01T12:00:00%27&category=${this.state.value}`;
    axios.get(url).then(function(response) {
      self.setState({ crime: response.data });
    });



  };
// mapping the
  render() {
    return (
      <div className="crime">
        <select
          className="select"
          value={this.state.selectValue}
          onChange={this.handleChange}
        >
          {" "}
          <option value="Select">PLEASE SELECT</option>
          <option value="LARCENY/THEFT">LARCENY/THEFT</option>
          <option value="ROBBERY">ROBBERY</option>
          <option value="ASSAULT">ASSAULT</option>
          <option value="DRUG/NARCOTIC">DRUG/NARCOTIC</option>
        </select>
        <button
          className="btn btn-primary"
          value={this.state.value}
          onClick={this.results}
        >
          submit
        </button>
        <h3 className="nameInsert">{this.state.value}</h3>
        {this.state.crime.slice(0,20).map(stat  => 
        <ul className="records">
              <li>
                {stat.address} {stat.time} {stat.descript}{" "}
              </li>
            </ul>
          
        )}
      </div>
    );
  }
}

export default crime;