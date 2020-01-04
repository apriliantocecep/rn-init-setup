import actionTypes from '../../configs/actionTypes';

const initialState = {
  profile: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE:
      return Object.assign({}, state, {
        profile: action.payload,
      });

    default:
      return state;
  }
};

export default user;
