import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from "react-native";
import { commonStyles } from './Styles'

export default class PostView extends Component {

  constructor(props) {
    super(props);
    // As the url of the page is passed through, get these props
    this.navigate = this.props.navigation.navigate;
    this.params = this.props.navigation.state.params;
  }

  componentDidMount() {

  }

  render() {
    const postUrl = this.props.navigation.state.params.postUrl
    return (
      <Text>{postUrl}</Text>
    );
  }
}