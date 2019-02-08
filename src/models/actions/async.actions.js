import axios from 'axios';

const RegLogUserSucc = payload => ({
  payload,
  type: 'REG_LOG_USER_SUCCESS'
});
const RegLogUserError = payload => ({
  payload,
  type: 'REG_LOG_USER_ERROR'
});

const GetPostsSucc = payload => ({
  payload,
  type: 'GET_POSTS_SUCCESS'
});

const GetGoalsSucc = payload => ({
  payload,
  type: 'GET_GOALS_SUCCESS'
});
const GetPostsError = payload => ({
  payload,
  type: 'GET_POSTS_ERROR'
});
const AddPostSucc = payload => ({
  payload,
  type: 'ADD_POST_SUCCESS'
});
const removePostSucc = payload => ({
  payload,
  type: 'REMOVE_POST_SUCCESS'
});

const AddGoalSucc = payload => ({
  payload,
  type: 'ADD_GOAL_SUCCESS'
});
const removeGoalSucc = payload => ({
  payload,
  type: 'REMOVE_GOAL_SUCCESS'
});

const UpdateGoal = payload => ({
  payload,
  type: 'UPDATE_GOAL'
});


export const getPosts = () => dispatch => {
  axios.get("http://localhost:3001/post/get")
    .then(response => {
      dispatch(GetPostsSucc(response.data))
    })
    .catch(err => {
      dispatch(GetPostsError(err))
    })

};

export const getGoals = () => dispatch => {
  axios.get("http://localhost:3001/goal/get")
    .then(response => {
      dispatch(GetGoalsSucc(response.data))
    })
    .catch(err => {
      console.log(err)
    })

};


const LogoutUserS = payload => ({
  payload,
  type: 'LOGOUT'
});

export const addPost = (post) => dispatch => {
  axios.post("http://localhost:3001/post/new", post)
    .then(response => {
      console.log(response);
      dispatch(AddPostSucc(response.data))
    })
    .catch(err => {
      console.log(err);
    })

};

export const updateGoal = (goal) => dispatch => {
  axios.post("http://localhost:3001/goal/update", goal)
    .then(response => {
      console.log(response);
      dispatch(UpdateGoal(goal))
    })
    .catch(err => {
      console.log(err);
    })

};

export const removePost = (post) => dispatch => {
  axios.post("http://localhost:3001/post/remove", {
      id: post
    })
    .then(response => {
      console.log(response)
      dispatch(removePostSucc({
        id: post
      }))
    })
    .catch(err => {
      console.log(err);
    })

};
export const addGoal = (goal) => dispatch => {
  axios.post("http://localhost:3001/goal/new", goal)
    .then(response => {
      console.log(response);
      dispatch(AddGoalSucc(response.data))
    })
    .catch(err => {
      console.log(err);
    })

};

export const removeGoal = (goal) => dispatch => {
  axios.post("http://localhost:3001/goal/remove", {
      id: goal
    })
    .then(response => {
      console.log(response)
      dispatch(removeGoalSucc({
        id: goal
      }))
    })
    .catch(err => {
      console.log(err);
    })

};




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
