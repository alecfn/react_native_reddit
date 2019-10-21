import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList, StyleSheet } from 'react-native';

export default class MainFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homePageArray: [],
      isLoaded: false,
    }
  }

  // For now, just grab the front page JSON so it can be put into views.
  componentDidMount() {
    fetch("https://www.reddit.com/.json")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          homePageArray: json,
        })
      });
  }

  render() {

    // Load these values so we can access them while rendering.
    var { isLoaded, homePageArray } = this.state;

    if (!isLoaded) {
      return <Text>Loading... </Text>
    }
    else {
      // Put all the post titles in their own array for easy access.
      var posts = [];
      this.state.homePageArray.data.children.forEach(child =>
        posts.push(child.data.title));
      console.log(posts)
      return (
        <FlatList
          data={posts}
      //    renderItem={()}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
