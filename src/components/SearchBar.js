import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",
    };
  }
  onChangeInput = (e) => {
    this.setState({
      keyWord: e.target.value,
    });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.getRequest(this.state.keyWord);
  };
  render() {
    return (
      <div>
        <form
          onSubmit={this.onSubmitForm}
          className="ui category search container"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              onChange={this.onChangeInput}
              className="prompt"
              type="text"
              placeholder="Search animals..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </form>
        <h2>{this.state.keyWord}</h2>
      </div>
    );
  }
}

export default SearchBar;
