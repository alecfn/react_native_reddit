
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import MainFeed from './screens/MainFeed';

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

  goToMainFeed = () => {
    this.props.navigation.navigate("MainFeed");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Yo </Text>
        <Button
          onPress={this.goToMainFeed}
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
  MainFeed: {screen: MainFeed}
});

export default createAppContainer(AppNavigator);
