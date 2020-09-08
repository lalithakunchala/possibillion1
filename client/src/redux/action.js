import axios from "axios";
import {FETCH_ADMIN_REGISTER_FAILURE,
        FETCH_ADMIN_REGISTER_REQUEST,
        FETCH_ADMIN_REGISTER_SUCCESS,
        FETCH_ADMIN_LOGIN_FAILURE,
        FETCH_ADMIN_LOGIN_REQUEST,
        FETCH_ADMIN_LOGIN_SUCCESS,
        LOGOUT} from './actionTypes'

const logout = ()=>{
  return {
    type: LOGOUT
  }
}

const fetchAdminRegisterRequest = () => {
  console.log("fetch user register request action called");
  
  return {
    type: FETCH_ADMIN_REGISTER_REQUEST,
    
  };
};

const fetchAdminRegisterSuccess = (res) => {
  console.log("fetch user register success action called");
  return {
    type: FETCH_ADMIN_REGISTER_SUCCESS,
    payload :res
  };
};

const fetchAdminRegisterFailure = error => {
  console.log("fetch user register failure action called");
  return {
    type: FETCH_ADMIN_REGISTER_FAILURE,
    payload:error
    
    // error: error
  };
};


const fetchRegister = (data) => {
  console.log("fetch register Data called", data);
  return dispatch => {
      dispatch(fetchAdminRegisterRequest())
      return  axios.post(
          "http://localhost:8000/auth/register",
            {
            "name": `${data.name}`,
            "email": `${data.email}`,
            "mobile": `${data.mobile}`,
            "dob": `${data.date}`,
            "gender": `${data.gender}`,
            "password": `${data.password}`
        }).then(res=>{
          console.log("response register success", res.data);
          return dispatch(fetchAdminRegisterSuccess(res.data));
        })
        .catch(error => fetchAdminRegisterFailure(error))
  }
}

const fetchAdminLoginRequest = () => {
  console.log("fetch user login request action called");
  
  return {
    type: FETCH_ADMIN_LOGIN_REQUEST
  };
};

const fetchAdminLoginSuccess = (res) => {
  console.log("fetch admin login success action called");
  return {
    type: FETCH_ADMIN_LOGIN_SUCCESS,
    payload: res,
    
  };
};

const fetchAdminLoginFailure = error => {
  console.log("fetch ADMIN login failure action called");
  return {
    type: FETCH_ADMIN_LOGIN_FAILURE,
    payload:error
    
  };
};


 const fetchLogin = (userdetails) => {
  console.log("fetch admin login data action called",userdetails);
  return dispatch => {
      dispatch(fetchAdminLoginRequest())
      return  axios.post(
          "http://localhost:8000/auth/login",
            {
            
            "password": `${userdetails.password}`,
            "email": `${userdetails.email}`
            
        }).then(res=>{
          console.log("response admin success", res.data);
          return (dispatch(fetchAdminLoginSuccess(res.data))
          );
        })
        .catch(error => fetchAdminLoginFailure(error.data))
  }
}




export {
  fetchRegister,
  fetchAdminRegisterFailure,
  fetchAdminRegisterRequest,
  fetchAdminRegisterSuccess,
  fetchLogin,
  fetchAdminLoginFailure,
  fetchAdminLoginRequest,
  fetchAdminLoginSuccess,
  logout
};