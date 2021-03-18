import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Outputs from './Outputs';

var reArraay = JSON.parse(localStorage.getItem("key"));
class ListUser extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="result_name">
        <label
          style={{ fontSize: "24px", textAlign: "center" }}
          id="result-label"
        >
          Details
        </label>
        <table id="Result-List" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {reArraay.map((element, index) => {
              return (
                <tr key={index}>
                  <td style={{ padding: "10px", color: "crimson" }}>
                    {element.fname + " " + element.lname} 
                  </td>
                  <td style={{ padding: "10px", color: "crimson" }}>
                    <Link to = {`/Outputs/${element.id}`}>View</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListUser;
