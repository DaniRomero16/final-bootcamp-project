const addProductGen = payload => ({
  payload,
  type: 'ADD_PRODUCT'
});
const removeProductGen = payload => ({
  payload,
  type: 'REMOVE_PRODUCT'
});

export const addProduct = (p) => dispatch => {
  dispatch(addProductGen(p));
};

export const removeProduct = (p) => dispatch => {
  dispatch(removeProductGen(p));
};
