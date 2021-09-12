import React, { Component} from "react";
export default class Desc extends Component {
  render() {
    return (
      <div>
        <h1 className="desc">{this.props.desc}</h1>
      </div>
    );
  }
}
