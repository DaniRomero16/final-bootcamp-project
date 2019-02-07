import axios from 'axios';

const RegLogUserSucc = payload => ({
  payload,
  type: 'REG_LOG_USER_SUCCESS'
});
const RegLogUserError = payload => ({
  payload,
  type: 'REG_LOG_USER_ERROR'
});

const LogoutUserS = payload => ({
  payload,
  type: 'LOGOUT'
});


export const registerUser = (user) => dispatch => {
  axios.post("http://localhost:3001/users/register", user)
    .then(response => {
      dispatch(RegLogUserSucc(response.data))
    })
    .catch(err => {
      dispatch(RegLogUserError(err))
    })

};


export const loginUser = (user) => dispatch => {
  axios.post("http://localhost:3001/users/login", user)
    .then(response => {
      dispatch(RegLogUserSucc(response.data))
    })
    .catch(err => {
      dispatch(RegLogUserError(err))
    })

};

export const logoutUser = () => dispatch => {
  dispatch(LogoutUserS({}));
}
