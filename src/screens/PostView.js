import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from "react-native";
import { commonStyles } from './Styles'

/**
 * Displays a view of post clicked on in the MainFeed. WIP.
 */
export default class PostView extends Component {

  constructor(props) {
    super(props);
    // As the url of the page is passed through, get these props
    this.navigate = this.props.navigation.navigate;
    this.params = this.props.navigation.state.params;
    this.state = {
      isLoaded: false,
      postJson: [],
    }
  }

  async componentDidMount() {
    // todo as this code is very similar to the MainFeed code, could generisize
    let postUrlJsonEndpoint = this.props.navigation.state.params.postUrl + ".json"
    
    try {
      let response = await fetch(postUrlJsonEndpoint);
      this.setState({
        postJson: response.json(),
        isLoaded: true
      })
    } catch(err) {
      // todo do something useful
      console.log(err); 
    }
  }

  render() {
    const postUrl = this.props.navigation.state.params.postUrl
    var { isLoaded, postJson } = this.state;

    if (!isLoaded) {
      return <Text>Loading post...</Text>
    }
    else {
      
      return (
        <Text>{postUrl}</Text>
      );
    }
  }
}