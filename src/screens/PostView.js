import React, { Component } from 'react'
import { FlatList, Text, View } from "react-native";
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

  componentDidMount() {
    // todo as this code is very similar to the MainFeed code, could generisize
    // really this should use the Reddit API, but just for learning this is fine
    let postUrlJsonEndpoint = this.props.navigation.state.params.postUrl + ".json"
    fetch(postUrlJsonEndpoint)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          postJson: json,
        })
      });
  }

  renderPost() {
    // Map the comments from JSON into something renderable
    var postJson = this.state.postJson;
    // JSON returns 0 with title information and 1 with comment info, so access by index
    var titleData = [];
    var commentData = [];
    
    console.log(postJson[1].data.children[1].data.body)
    commentData = postJson[1].data.children.forEach(comment =>
      commentData.push(comment.data.body));
    return(
      <View style={commonStyles.container}>
      <FlatList
      data={commentData}
      renderItem={({item}) =>(
        <View style={{flexDirection: 'row', alignContext:'stretch'}}>
              <Text style={commonStyles.postText}>
                  {item.title}
                </Text>
                <Image
                style={{width: 80, height: 80}}
                source={{uri: item.thumbnail}}
                />
          </View>
        )}
      />
    </View>
    )
  }

  render() {
    const postUrl = this.props.navigation.state.params.postUrl
    var { isLoaded, postJson } = this.state;
    if (!isLoaded) {
      return <Text>Loading post...</Text>
    }
    else {
      return (
        this.renderPost()
      );
    }
  }
}