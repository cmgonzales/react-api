import React, { useState } from "react";
import axios from "axios";
import "../style/crime.css";

const Crime = () => {
  const [crime, setCrime] = useState([]);
  const [value, setValue] = useState("");

  const results = e => {
    console.log("test");
    var url = `https://data.sfgov.org/resource/cuks-n6tp.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272018-01-01T12:00:00%27&category=${value}`;
    axios.get(url).then(function(response) {
      setCrime(response.data);
    });
  };

  return (
    <div className="crime">
      <select
        className="select"
        value={value}
        onChange={e => setValue(e.target.value)}
      >
        {" "}
        <option value="Select">PLEASE SELECT</option>
        <option value="LARCENY/THEFT">LARCENY/THEFT</option>
        <option value="ROBBERY">ROBBERY</option>
        <option value="ASSAULT">ASSAULT</option>
        <option value="DRUG/NARCOTIC">DRUG/NARCOTIC</option>
      </select>
      <button className="btn btn-primary" value={value} onClick={results}>
        submit
      </button>
      <h3 className="nameInsert">{value}</h3>
      {crime.slice(0, 20).map(stat => (
        <ul className="records">
          <li>
            {stat.address} {stat.time} {stat.descript}{" "}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Crime;
