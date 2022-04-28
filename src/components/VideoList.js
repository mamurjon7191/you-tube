import React from "react";
import VideoDetails from "./VideoDetails.js";
import "../style.css";

class VideoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoData: "",
    };
  }
  renderList() {
    return this.props.data.data?.items.map((val) => {
      return (
        <div key={val.id.videoId}>
          <VideoDetails value={val} />
        </div>
      );
    });
  }
  render() {
    return <div className="all">{this.renderList()}</div>;
  }
}
export default VideoList;
