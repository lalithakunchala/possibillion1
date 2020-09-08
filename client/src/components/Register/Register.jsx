import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Register.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect} from 'react-router-dom'
import {fetchRegister} from '../../redux/action'

export class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            password:"",
            email:"",
            name:"",
            mobile:"",
            enter:false,
            stDate: new Date()
        }
    }
    
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick= ()=>{
        if(this.state.email!==""&& this.state.name!==""&&this.state.password!==""){
            
            if(this.checkEmail(this.state.email) && this.checkMobile(this.state.mobile) && this.checkName(this.state.name)){
                this.props.fetchRegister(this.state)
                this.setState({
                    enter:false
                })
            }
            else{
                this.setState({
                    enter:true
                })
            }
        }
        else{
            this.setState({
                enter:true
            })
        }
        
    }

    checkMobile = (inpt)=>{
        inpt = Number(inpt);
            if(/^\d{10}$/.test(inpt))
            {
                return true;
            }
            else
            {
                alert('Please input numeric characters only for mobile number with 10 digits');
                return false;
            }
    }

    checkName = (input)=>{
        // var letters = /^[A-Za-z]+$/;
        if(/^[A-Za-z]+$/.test(input))
        {
            return true;
        }
        else
        {
            alert('Please input alphabet characters only for Name');
            return false;
        }
    }

   

    checkEmail = (input)=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
        }
    

        handleDateChange(date) {
            this.setState({
            stDate: date
            })
            }

    render() {
        return (
            <div>
                <div className={styles.bgWhite}>
                {/* <NavBar /> */}
                </div>
                <div>
                    <div className={styles.cardPadding}>
                        <div className={styles.cardBody}>
                        <div class="card-header" style={{background:"grey"}}>
                        <h3 className={styles.forgot}>Register</h3>
                        </div>
                        <div class="card text-center" >
                        <div class="card-body">
                            <p class="card-text text-center">Enter Details</p>
                            <input type="text" name="name" placeholder="name" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="text" name="email" placeholder="email" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="text" name="mobile" placeholder="mobile" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="date" name="date" placeholder="Date" format="mm-dd-yyyy"onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                                                        
                            <DatePicker
                            selected={ this.state.stDate }
                            onChange={ this.handleDateChange }
                            dateFormat="MMMM d, yyyy"
                            className="form-control"
                            />

                        <input class="datepicker" type="date" data-date-format="mm/dd/yyyy"/>

                            
                            <div className="form-check col-6">
                            <input class="form-check-input align-left" type="radio" name="exampleRadios" id="exampleRadios1" value="male" checked />
                            <label class="form-check-label" for="exampleRadios1">
                                Male
                            </label>
                            </div>
                            <div className="form-check col-6">
                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="female" />
                            <label class="form-check-label" for="exampleRadios2">
                                Female
                            </label>
                            
                            </div>
                            
                            <button className={styles.btnCss} onClick={this.handleClick}>Register</button>
                        </div>
                        {this.state.enter?<div style={{color:'red'}}>Enter all details</div>:""}
                        </div>
                        </div>
                        {!this.props.regSuccess.success?<p>{this.props.regSuccess.message}</p>:
                        <Redirect to="/login" />
                    }                  
                    </div>
                    {/* <Footer /> */}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    regError:state.regError,
    regSuccess:state.regSuccess
})

const mapDispatchToProps = dispatch=>{
    return {
        fetchRegister: (n) => dispatch(fetchRegister(n))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)