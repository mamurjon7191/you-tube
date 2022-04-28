import React from "react";
import "../style.css";
import axios from "axios";

class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }
  takingChannelImage = async (id) => {
    const key = "AIzaSyBXLaVmouQHc1TnhlQV8jv_-fuBQltRjfw";
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&fields=items(id%2Csnippet%2Fthumbnails)&key=${key}`
    );
    const dataJson = await data.json();
    return dataJson.items[0].snippet.thumbnails.medium.url;
  };
  componentDidMount = async () => {
    const a = await this.takingChannelImage(this.props.value.snippet.channelId);
    this.setState({
      url: a,
    });
  };
  render() {
    return (
      <div className="card">
        <div key={this.props.value.id.videoId}>
          <img src={this.props.value.snippet.thumbnails.medium.url}></img>
        </div>
        <div className="right-side">
          <div className="title">
            <h1>{this.props.value.snippet.title}</h1>
          </div>
          <div className="def">
            <p>
              Video released:
              {String(this.props.value.snippet.publishTime).slice(0, 10)}
            </p>
            <p>
              Hour:
              {String(this.props.value.snippet.publishTime).slice(11, 19)}
            </p>
          </div>
          <div className="canalName">
            <img src={this.state.url} className="canalImg"></img>
            <p className="canalName1">
              {this.props.value.snippet.channelTitle}{" "}
            </p>
          </div>
          <div className="definition">
            <p>{this.props.value.snippet.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoDetails;
