import React, { useState } from "react";
import axios from "axios";
import "../style/crime.css";
import { seeCrimes } from "../redux";
import { useSelector, useDispatch } from "react-redux";

const Crime = () => {
  const crime = useSelector((state) => state.crimes);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const [data, setData] = useState("");

  const results = () => {
    var url = `https://data.sfgov.org/resource/cuks-n6tp.json?pddistrict=MISSION&dayofweek=Friday&$order=date%20DESC&$where=date%3E%272018-01-01T12:00:00%27&category=${value}`;
    axios.get(url).then((response) => {
      const crimes = response.data;
      dispatch(seeCrimes(crimes));
    });
    setData(value);
  };

  return (
    <div className="crime">
      <select
        className="select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {" "}
        <option value="Select">PLEASE SELECT</option>
        <option value="LARCENY/THEFT">LARCENY/THEFT</option>
        <option value="ROBBERY">ROBBERY</option>
        <option value="ASSAULT">ASSAULT</option>
        <option value="DRUG/NARCOTIC">DRUG/NARCOTIC</option>
      </select>
      <button className="btn btn-primary" onClick={results}>
        submit
      </button>
      <h3 className="nameInsert">{data}</h3>
      {crime.slice(0, 20).map((crime) => (
        <ul className="records">
          <li>
            {crime.address} {crime.time} {crime.descript}{" "}
          </li>
        </ul>
      ))}
    </div>
  );
};
export default Crime;
