import { USER_LOGIN, USER_LOGIN_FAILED, USER_LOGOUT } from "../actions/types";

export default function loginReducer(state={}, action) {
  switch(action.type) {
    case USER_LOGIN : 
    return {
      ...state,
      token: action.payload,
      error: ""
    };
    case USER_LOGIN_FAILED :
      return {
        ...state,
        error: action.payload,
        token: ''
      }
      case USER_LOGOUT :
        return {
          ...state,
          token: '',
          error: ''
        }
    default:
      return state;
  }
}