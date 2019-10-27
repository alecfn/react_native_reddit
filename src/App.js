import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { commonStyles } from './screens/Styles'

import MainFeed from './screens/MainFeed';
import PostView from "./screens/PostView";

/**
 * Main page of the App. WIP.
 */
class App extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#373142"
    },
    headerTitleStyle: {
      color: "#FFF"
    }
  };

  _goToMainFeed = () => {
    this.props.navigation.navigate("MainFeed");
  };

  render() {
    return (
      <View style={commonStyles.container}>
        <Button
          onPress={this._goToMainFeed}
          title="Go to Main Feed"
        />
      </View>
      );
  }
}

const AppNavigator = createStackNavigator({
  Home: {screen: App},
  MainFeed: {screen: MainFeed},
  PostView: {screen: PostView}
});

export default createAppContainer(AppNavigator);
