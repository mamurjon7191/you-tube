import React from "react";
import SearchBar from "./SearchBar.js";
import axios from "axios";
import VideoList from "./VideoList.js";
import VideoItem from "./VideoItem.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputKey: "",
      videoListArr: [],
    };
  }
  getData = async (kalitSoz) => {
    const key = "AIzaSyBXLaVmouQHc1TnhlQV8jv_-fuBQltRjfw";
    const data = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          type: "video",
          maxResults: 10,
          key: key,
          q: kalitSoz,
        },
      }
    );
    this.setState({
      videoListArr: data,
    });
    console.log(data);
  };
  render() {
    return (
      <div>
        <SearchBar getRequest={this.getData} />
        <VideoList data={this.state.videoListArr} />
        <VideoItem />
      </div>
    );
  }
}
export default App;

//Appdam funksiya search ga boradi argumentini olib appd aishlatadi
