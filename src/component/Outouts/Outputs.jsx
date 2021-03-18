import React, { Component } from "react";


var reArraay = JSON.parse(localStorage.getItem('key'));
class Outputs extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.match.params);
    }
    deleteHandler(e ,delBtnId) {
        // e.preventDefault();
        // let temp = this.state.todoArray;
        // localStorage.clear();
        // localStorage.setItem('key', JSON.stringify(temp))
        alert("coming soonn");
    }



    render() {
        return (
            <div id="result">
                <label style={{ fontSize: "24px",textAlign: "center" }} id="result-label">Details</label>
                <table id="Result-List" style={{ textAlign: "center" }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                         reArraay.map((element , index) =>{     

                             if(element.id === this.props.match.params.id){
                                return(<tr key ={index} >
                                    <td style={{padding:"10px" , color : "crimson"}}>{element.fname}</td>
                                    <td style={{padding:"10px" , color : "crimson"}}>{element.lname}</td>
                                    <td style={{padding:"10px" , color : "crimson"}}>{element.address}</td>
                                    <td style={{padding:"10px" , color : "crimson"}}>{element.mobile}</td>
                                    <td style={{padding:"10px" , color : "crimson"}}>{element.email}</td>
                                    <td><button id={"btn_" + index} onClick={(e ,index)=> {this.deleteHandler(e)}}>Delete</button></td>
                                </tr>);
                             }
                         })
                        }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Outputs;