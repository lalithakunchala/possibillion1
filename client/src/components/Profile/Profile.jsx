import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logout} from  '../../redux/action'
import { Link } from "react-router-dom";

export class Profile extends Component {
    render() {
        // const {logSuccess} = this.props
       var  logSuccess = 
            {
                data:{
                name: "Lalitha",
                email: "lalitha@gmail.com",
                mobile: 9542332852,
                dob: "22-08-1989",
                gender: "female"
        }}
        return (
            <div className="container">
                <Link to="/"><button onClick={this.props.logout}>Logout</button></Link>
               {
                   logSuccess&& 
                   <div>
                   <table class="table table-bordered">
                    <tbody>
                        <tr>
                        <th scope="row">Name</th>
                        <td colspan="2">{logSuccess.data.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Email</th>
                        <td colspan="2">{logSuccess.data.email}</td>
                        </tr>
                        <tr>
                        <th scope="row">D.O.B</th>
                        <td colspan="2">{logSuccess.data.dob}</td>
                        </tr>
                        <tr>
                        <th scope="row">Gender</th>
                        <td colspan="2">{logSuccess.data.gender}</td>
                        </tr>
                    </tbody>
                    </table>
                    </div>
               } 
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    logSuccess : state.logSuccess
})

const mapDispatchToProps = dispatch=>{
    return{
        logout : ()=> dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
