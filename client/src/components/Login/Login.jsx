import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './Login.module.css'
import {Redirect} from 'react-router-dom'
import {fetchLogin} from '../../redux/action'
import Footer from '../Footer/Footer.jsx'
import { Link } from "react-router-dom";

export class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }
    
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick= ()=>{
        if(this.state.email!==""&& this.state.password!==""){
            
            if(this.checkEmail(this.state.email)){
                this.props.fetchLogin(this.state)
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

    
    checkEmail = (input)=>{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input))
        {
            return (true)
        }
            alert("You have entered an invalid email address!")
            return (false)
        }
    

        
    render() {
        return (
            <div>
                <div className={styles.bgWhite}>
                <Link to="/"><div>Register</div></Link>
                </div>
                <div>
                    <div className={styles.cardPadding}>
                        <div className={styles.cardBody}>
                        <div class="card-header" style={{background:"grey"}}>
                        <h3 className={styles.forgot}>Login</h3>
                        </div>
                        <div class="card text-center" >
                        <div class="card-body">
                            <p class="card-text text-center">Enter Details</p>
                            <input type="text" name="email" placeholder="email" onChange={this.handleChange} className={styles.dat}></input><br/>
                            <input type="password" name="password" placeholder="password" onChange={this.handleChange} className={styles.dat}></input><br/>
                            
                            <button className={styles.btnCss} onClick={this.handleClick}>Login</button>
                        </div>
                        {this.state.enter?<div style={{color:'red'}}>Enter all details</div>:""}
                        </div>
                        </div>
                        {!this.props.logSuccess.success?<p>{this.props.logError.message}</p>:
                        <Redirect to="/profile" />
                    }                  
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    logError:state.logError,
    logSuccess:state.logSuccess
})

const mapDispatchToProps = dispatch=>{
    return {
        fetchLogin: (n) => dispatch(fetchLogin(n))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)