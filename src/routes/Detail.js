import React from "react";
import "./About.css";

class Detail extends React.Component {
  render() {
    const { location, history } = this.props;
    if (location.state) {
      const { title, summary, year } = location.state;
      return (
        <div className="about__container">
          <span>{title}</span>
          <span>{summary}</span>
          <span>{year}</span>
        </div>
      );
    } else {
      history.push("/");
      return null;
    }
  }
}
export default Detail;
