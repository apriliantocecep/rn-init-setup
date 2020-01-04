import React, {Component} from 'react';
import {View, SafeAreaView, Text, Button, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import AsyncStorage from '@react-native-community/async-storage';
import {screens, app} from '../../configs';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onPressRegister = () => {
    this.props.navigation.navigate(screens.Register);
  };

  onPressLogin = async () => {
    let token =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpbnNpZ2h0LW1venphZ28tand0LW1lcmNoYW50Iiwic3ViIjo0LCJpYXQiOjE1NzgwNjQ1NjN9.2w0mOWHITFmMw6uTpvdmSAUWCor5dexaTC8IgmeblEk';
    AsyncStorage.setItem(app.tokenName, token)
      .then(res => {
        this.props.navigation.navigate(screens.App);
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
          <Text> LoginScreen </Text>
          <Icon name="rocket" size={30} color="#900" />
          <Button onPress={this.onPressLogin} title="Login" />
          <Text onPress={this.onPressRegister}>Go to Register?</Text>
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

export default LoginScreen;
