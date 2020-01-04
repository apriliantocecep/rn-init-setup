import React, {Component} from 'react';
import {Provider} from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import RootNavigation from './routes/index';
import {styles, store} from './configs';

// TODO: define extended stylesheet here
EStyleSheet.build(styles);

class index extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    );
  }
}

export default index;
