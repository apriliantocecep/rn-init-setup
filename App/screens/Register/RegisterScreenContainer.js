import {connect} from 'react-redux';
import RegisterScreen from './RegisterScreen';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({});

const RegisterScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterScreen);
export default RegisterScreenContainer;
