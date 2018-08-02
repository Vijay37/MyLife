import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import loginScreen from './screens/loginScreen';
import constants from './additionalComponents/constants';

class HomeScreen extends React.Component {
  static navigationOptions = {header: null};
  render() {
    return (
      <View style = {styles.container}>
          <Button onPress = {() => this.props.navigation.navigate("loginScreen")}
          color="#FFFF"
          fontWeight="bold"
          fontSize="30"
          accessibilityLabel="Click to Continue" title='My Life'></Button>
      </View>
    );
  }
}

const ScreenStack = createStackNavigator(
  {
    Home: HomeScreen,
    loginScreen: loginScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <ScreenStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',

  },
});
