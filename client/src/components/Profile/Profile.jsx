import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Profile extends Component {
    render() {
        return (
            <div>
                <div onClick={this.props.logout}>Logout</div>
               {
                   this.props.logSuccess.success && 
                   <div>
                   <table class="table table-bordered">
                    <tbody>
                        <tr>
                        <th scope="row">Name</th>
                        <td colspan="2">{logSuccess.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Email</th>
                        <td colspan="2">{logSuccess.email}</td>
                        </tr>
                        <tr>
                        <th scope="row">D.O.B</th>
                        <td colspan="2">{logSuccess.dob}</td>
                        </tr>
                        <tr>
                        <th scope="row">Gender</th>
                        <td colspan="2">{logSuccess.gender}</td>
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
