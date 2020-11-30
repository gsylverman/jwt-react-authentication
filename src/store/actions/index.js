import { USER_LOGIN, USER_LOGIN_FAILED } from "./types"
import axios from 'axios';

export const loginAction = ({email, password}) => async dispatch => {
  try{
    const request = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password })
    const token = request.data.access_token
    localStorage.setItem("token", token);
    dispatch({
      type: USER_LOGIN,
      payload: request.data.access_token
    })
  }catch(err){
    localStorage.removeItem("token")
    dispatch({
      type: USER_LOGIN_FAILED,
      payload: "You are not authorized!"
    })
    console.log(err)
  }
}