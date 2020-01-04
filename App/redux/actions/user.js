import actionTypes from '../../configs/actionTypes';

export const getProfile = profile => ({
  type: actionTypes.GET_PROFILE,
  payload: profile,
});
