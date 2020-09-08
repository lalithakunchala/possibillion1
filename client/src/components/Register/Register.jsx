import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './UserSignUp.module.css'
import NavBar from '../Navbar/NavBar.jsx';
import {Redirect} from 'react-router-dom'
import {fetchUserRegister} from '../../redux/userauth/action'

export class Register extends Component {

    constructor(props){
        super(props)
        this.state = {
            password:"",
            email:"",
            name:"",
            mobile:"",
            enter:false
        }
    }
    
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleClick= ()=>{
        if(this.state.email!==""&& this.state.name!==""&&this.state.password!==""){
            
            if(checkEmail(this.state.email) && checkMobile(this.state.mobile) && checkName(this.state.name)){
                this.props.fetchUserRegister(this.state)
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

    checkMobile = (input)=>{
        var numbers = /^[0-9]+$/;
            if(input.match(numbers))
            {
                return true;
            }
            else
            {
                alert('Please input numeric characters only');
                return false;
            }
    }

    checkName = (input)=>{
        var letters = /^[A-Za-z]+$/;
        if(input.match(letters))
        {
            return true;
        }
        else
        {
            alert('Please input alphabet characters only');
            return false;
        }
    }

    // checkEmail = (input)=>{
    //     var count = 0;
    //     var flag = true;
    //     var first_l = input[0];
    //   if(first_l=='.'||first_l=='@'){
    //     flag = false;
    //   }
    //   else{
    //     for(var i=1; i<input.length; i++){
    //       if(input[i]=='@'){
    //         if(input[i+1]=='.'){
    //           flag=false;
    //           break;
    //         }
    //       }
    //       if(input[i]=='.'){
    //         if(input[i+1]=='.'){
    //           flag=false;
    //           break;
    //         }
    //       }
    //     }
    //   }
    //   var count1=0;
    //   for(var i=0; i<input.length; i++){
    //     if(input[i]=='@'){
    //       count1++;
    //     }
    //   }
    //   if(count1<1 || count1>1){
    //     flag=false;
    //   }
    //   for(var i=0; i<input.length; i++){
    //     if(input[i]=='*'||input[i]=='('||input[i]==')'){
    //       flag=false;
    //     }
    //   }
    //   var s = input.split(".");
    //   var indx = (s.length)-1;
    //   if(s[indx]=='org'||s[indx]=='com'||s[indx]=='net'){
    //     for(var i=0; i<s.length; i++){
    //       if(s[i]=='org'||s[i]=='net'||s[i]=='com'){
    //         count++;
    //       }
    //     }
    //     if(count>1){
    //       flag=false;
    //     }
    //   }
    //   else{
    //     flag=false;
    //   }
    //   return flag;
    // }

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
                <NavBar />
                </div>
                <div>
                    <div className={styles.cardPadding}>
                        <div className={styles.cardBody}>
                        <div class="card-header" style={{background:"#CA005D"}}>
                        <h3 className={styles.forgot}>User SignUp</h3>
                        </div>
                        <div class="card text-center" >
                        <div class="card-body">
                            <p class="card-text text-center">Enter Details</p>
                            <input type="text" name="name" placeholder="name" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="text" name="email" placeholder="email" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <input type="text" name="password" placeholder="password" onChange={this.handleChange} className=" p-2 w-100"></input><br/>
                            <button className={styles.btnCss} onClick={this.handleClick}>Register</button>
                        </div>
                        {this.state.enter?<div style={{color:'red'}}>Enter all details</div>:""}
                        </div>
                        </div>
                        {!this.props.regSuccess.success?<p>{this.props.regSuccess.message}</p>:
                        <Redirect to="/login" />
                    }                  
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    regError:state.userauth.regError,
    regSuccess:state.userauth.regSuccess
})

const mapDispatchToProps = dispatch=>{
    return {
        fetchUserRegister: (n) => dispatch(fetchUserRegister(n))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)