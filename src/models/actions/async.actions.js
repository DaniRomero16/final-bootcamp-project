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

const GetTasksSucc = payload => ({
  payload,
  type: 'GET_TASKS_SUCCESS'
});

const GetComparisonsSucc = payload => ({
  payload,
  type: 'GET_COMP_SUCCESS'
});
const GetGraphicsSucc = payload => ({
  payload,
  type: 'GET_GRAPH_SUCCESS'
});
const GetPostsError = payload => ({
  payload,
  type: 'GET_POSTS_ERROR'
});
const AddPostSucc = payload => ({
  payload,
  type: 'ADD_POST_SUCCESS'
});

const AddTaskSucc = payload => ({
  payload,
  type: 'ADD_TASK_SUCCESS'
});
const removePostSucc = payload => ({
  payload,
  type: 'REMOVE_POST_SUCCESS'
});
const removeTaskSucc = payload => ({
  payload,
  type: 'REMOVE_TASK_SUCCESS'
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

const UpdateTask = payload => ({
  payload,
  type: 'UPDATE_TASK'
});

const AddComparisonSucc = payload => ({
  payload,
  type: 'ADD_COMPARISON'
});
const removeComparisonSucc = payload => ({
  payload,
  type: 'REMOVE_COMPARISON'
});

const AddCompareItemSucc = payload => ({
  payload,
  type: 'ADD_COMPARE_ITEM'
});
const removeCompareItemSucc = payload => ({
  payload,
  type: 'REMOVE_COMPARE_ITEM'
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

export const getComparisons = () => dispatch => {
  axios.get("http://localhost:3001/comparison/get")
    .then(response => {
      dispatch(GetComparisonsSucc(response.data))
    })
    .catch(err => {
      console.log(err);
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

export const getTasks = () => dispatch => {
  axios.get("http://localhost:3001/task/get")
    .then(response => {
      dispatch(GetTasksSucc(response.data))
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

export const addTask = (task) => dispatch => {
  axios.post("http://localhost:3001/task/new", task)
    .then(response => {
      console.log(response);
      dispatch(AddTaskSucc(response.data))
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

export const updateTask = (task) => dispatch => {
  axios.post("http://localhost:3001/task/update", task)
    .then(response => {
      console.log(response);
      dispatch(UpdateTask(task))
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
export const removeTask = (task) => dispatch => {
  axios.post("http://localhost:3001/task/remove", {
      id: task
    })
    .then(response => {
      console.log(response)
      dispatch(removeTaskSucc({
        id: task
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

export const removeGoal = (id) => dispatch => {
  axios.post("http://localhost:3001/goal/remove", {
      id: id
    })
    .then(response => {
      console.log(response)
      dispatch(removeGoalSucc({
        id: id
      }))
    })
    .catch(err => {
      console.log(err);
    })

};

export const addComparison = (comp) => dispatch => {
  axios.post("http://localhost:3001/comparison/new", comp)
    .then(response => {
      console.log(response);
      dispatch(AddComparisonSucc(response.data))
    })
    .catch(err => {
      console.log(err);
    })

};

export const removeComparison = (id) => dispatch => {
  axios.post("http://localhost:3001/comparison/remove", {
      id: id
    })
    .then(response => {
      console.log(response)
      dispatch(removeComparisonSucc({
        id: id
      }))
    })
    .catch(err => {
      console.log(err);
    })

};

export const addCompareItem = (comp) => dispatch => {
  axios.post("http://localhost:3001/compare_item/new", comp)
    .then(response => {
      console.log(response);
      dispatch(AddCompareItemSucc(response.data))
    })
    .catch(err => {
      console.log(err);
    })

};

export const removeCompareItem = (id) => dispatch => {
  axios.post("http://localhost:3001/compare_item/remove", {
      id: id
    })
    .then(response => {
      console.log(response)
      dispatch(removeCompareItemSucc({
        id: id
      }))
    })
    .catch(err => {
      console.log(err);
    })

};




export const registerUser = (user, history) => dispatch => {
  axios.post("http://localhost:3001/users/register", user)
    .then(response => {
      dispatch(RegLogUserSucc(response.data));
      history.push('/profile');
    })
    .catch(err => {
      dispatch(RegLogUserError(err))
    })

};


export const loginUser = (user, history) => dispatch => {
  axios.post("http://localhost:3001/users/login", user)
    .then(response => {
      dispatch(RegLogUserSucc(response.data));
      history.push('/profile');
    })
    .catch(err => {
      dispatch(RegLogUserError(err))
    })

};

export const logoutUser = () => dispatch => {
  dispatch(LogoutUserS({}));
}

const AddGraphicItemSucc = payload => ({
  payload,
  type: 'ADD_GRAPHIC_ITEM'
});
const removeGraphicItemSucc = payload => ({
  payload,
  type: 'REMOVE_GRAPHIC_ITEM'
});


export const addGraphicItem = (graph) => dispatch => {
  axios.post("http://localhost:3001/graphic_item/new", graph)
    .then(response => {
      dispatch(AddGraphicItemSucc(response.data))
    })
    .catch(err => {
      console.log(err);
    })

};

export const removeGraphicItem = (id) => dispatch => {
  axios.post("http://localhost:3001/graphic_item/remove", {
      id: id
    })
    .then(response => {
      dispatch(removeGraphicItemSucc({
        id: id
      }))
    })
    .catch(err => {
      console.log(err);
    })

};

const AddGraphicSucc = payload => ({
  payload,
  type: 'ADD_GRAPHIC'
});
const removeGraphicSucc = payload => ({
  payload,
  type: 'REMOVE_GRAPHIC'
});

export const getGraphics = () => dispatch => {
  axios.get("http://localhost:3001/graphic/get")
    .then(response => {
      dispatch(GetGraphicsSucc(response.data))
    })
    .catch(err => {
      console.log(err);
    })

};

export const addGraphic = (comp) => dispatch => {
  axios.post("http://localhost:3001/graphic/new", comp)
    .then(response => {
      console.log(response);
      dispatch(AddGraphicSucc(response.data))
    })
    .catch(err => {
      console.log(err);
    })

};

export const removeGraphic = (id) => dispatch => {
  axios.post("http://localhost:3001/graphic/remove", {
      id: id
    })
    .then(response => {
      console.log(response)
      dispatch(removeGraphicSucc({
        id: id
      }))
    })
    .catch(err => {
      console.log(err);
    })

};
