import {connect} from 'react-redux';
import LoginScreen from './LoginScreen';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({});

const LoginScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
export default LoginScreenContainer;
