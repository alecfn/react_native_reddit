import React, { Component } from 'react'
import { View, Text, ScrollView, Image, FlatList, StyleSheet,
         TouchableHighlight } from 'react-native';
import { commonStyles } from './Styles'

/**
 * Displays the main feed of the Reddit front page by ingesting the JSON.
 * 
 * Currently just gets the most basic form of JSON. WIP.
 */
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
  
  _goToPost(url) {
    // Note this must be https, http fetches are not allowed by default
    const fullUrl = "https://www.reddit.com" + url
    console.log(fullUrl)
    this.props.navigation.navigate("PostView", {postUrl: fullUrl})
  }

  renderPostRows(posts) {
    return (
      <View style={commonStyles.container}>
        <FlatList
        data={posts}
        renderItem={({item}) =>(
          <TouchableHighlight
          // onPress must be bound with () or it will call on render multiple times
          onPress={() => this._goToPost(item.permalink)} 
          underlayColor="white" >
            <View style={{flexDirection: 'row', alignContext:'stretch'}}>
                  <Text style={commonStyles.postText}>
                    {item.title}
                  </Text>
                  <Image
                  style={{width: 80, height: 80}}
                  source={{uri: item.thumbnail}}
                  />
            </View>
          </TouchableHighlight>
          )}
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
      // Put all the post entries in their own array for easy access.
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
})
