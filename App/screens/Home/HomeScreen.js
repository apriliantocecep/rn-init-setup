import React, {Component} from 'react';
import {View, SafeAreaView, Text, Button, Alert} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-community/async-storage';
import {screens, app} from '../../configs';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressLogout = async () => {
    AsyncStorage.removeItem(app.tokenName)
      .then(res => {
        this.props.navigation.navigate(screens.Auth);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text>Home Page</Text>
          <Button onPress={this.onPressLogout} title="Logout" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default HomeScreen;
