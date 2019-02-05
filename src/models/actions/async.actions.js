const registerUserSucc = payload => ({
  payload,
  type: 'REG_USER_SUCCESS'
});
const registerUserError = payload => ({
  payload,
  type: 'REG_USER_ERROR'
});

export const registerUser = (user) => dispatch => {
  fetch('http://localhost:3001/users/register', user)
    .then(res => res.json())
    .then(data => {
      dispatch(registerUserSucc(data));
    })
    .catch(err => {
      dispatch(registerUserError(err));
    });
};
