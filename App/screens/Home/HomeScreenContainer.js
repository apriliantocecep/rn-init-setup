import {connect} from 'react-redux';
import HomeScreen from './HomeScreen';

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = dispatch => ({});

const HomeScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
export default HomeScreenContainer;
