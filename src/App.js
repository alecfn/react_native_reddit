import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import MainFeed from './screens/MainFeed';
import PostView from "./screens/PostView";

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
      <View style={styles.container}>
        <Button
          onPress={this._goToMainFeed}
          title="Go to Main Feed"
        />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppNavigator = createStackNavigator({
  Home: {screen: App},
  MainFeed: {screen: MainFeed},
  PostView: {screen: PostView}
});

export default createAppContainer(AppNavigator);
