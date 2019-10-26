import React, { Component } from 'react'
import { View, Text, ScrollView, Image, FlatList, StyleSheet }
from 'react-native';

export default class MainFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      homePageArray: [],
      isLoaded: false,
    }
  }

  // For now, just grab the front page JSON so it can be put into views.
  componentDidMount() { // todo willMount? await?
    fetch("https://www.reddit.com/.json")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          homePageArray: json,
        })
      });
  }

  renderPostRows = (posts) => {
    return (
      <View style={styles.container}>
        <FlatList
        data={posts}
        renderItem={({item}) =>(
          <View>
          <Text>
            {item.title}
          </Text>
          <Image
          style={{width: 50, height: 50}}
          source={{uri: item.thumbnail}}
          />
          </View>
          )}
          numColumns={2}
          keyExtractor={(x, i) => i}
        />
      </View>
    );
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
        posts.push(child.data));
      console.log(posts) // todo: posts could be a state prop
      return (
        this.renderPostRows(posts)
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
