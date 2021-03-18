import "../../component/custom.css";
import React, { Component } from "react";
const { useState } = React;

class Accepts extends React.Component {
  constructor() {
    super();
    this.state = {
      btn_submit: false,
      detailsArray: [],
      perDetaisobj: {},
    };
  }
  saveChanges(e) {
    e.preventDefault();
    // console.log(e.target.id);
    switch (e.target.id) {
      case "fname":
        this.state.perDetaisobj[e.target.id] = e.target.value;
        break;
      case "lname":
        this.state.perDetaisobj[e.target.id] = e.target.value;
        break;
      case "address":
        this.state.perDetaisobj[e.target.id] = e.target.value;
        break;
      case "mobile":
        this.state.perDetaisobj[e.target.id] = e.target.value;
        break;
      case "email":
        this.state.perDetaisobj[e.target.id] = e.target.value;
        break;
    }
    this.state.perDetaisobj["id"] = Math.floor(Math.random() * 100);
    console.log(this.state.perDetaisobj);
  }

  submitChange=async(e)=> {
    e.preventDefault();
    //this.state.detailsArray.push(initialState);
    console.log(this.state.perDetaisobj, this.state.detailsArray);
    await this.setState(prevState => {
        console.log("-----",prevState.detailsArray)
        return{
        detailsArray: [...prevState.detailsArray, this.state.perDetaisobj],
        perDetaisobj:{}
        }
    });
    localStorage.setItem('key', JSON.stringify(this.state.detailsArray));
    console.log(this.state.detailsArray);
  }
  render() {
    return (
      <div>
        <form className="selctform" id="form">
          <table>
            <tbody>
              <tr>
                <td>
                  <label>First Name</label>
                  <input
                    onChange={(e) => {
                      this.saveChanges(e);
                    }}
                    type="text"
                    id="fname"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Last Name </label>
                  <input
                    onChange={(e) => {
                      this.saveChanges(e);
                    }}
                    type="text"
                    id="lname"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Address </label>
                  <input
                    onChange={(e) => {
                      this.saveChanges(e);
                    }}
                    type="text"
                    id="address"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Mobile Number </label>
                  <input
                    onChange={(e) => {
                      this.saveChanges(e);
                    }}
                    type="text"
                    id="mobile"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email </label>
                  <input
                    onChange={(e) => {
                      this.saveChanges(e);
                    }}
                    type="text"
                    id="email"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="submit"
            onClick={(e) => {
              this.submitChange(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Accepts;
