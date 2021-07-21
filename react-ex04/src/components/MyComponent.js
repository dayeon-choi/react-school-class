import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static propTypes = {
    name: PropTypes.string,
    favorateNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favorateNumber, children } = this.props;
    const { style } = {
      marginTop: 15,
    };

    return (
      <div style={style}>
        <h3>안녕하세요, 저는 ✨멋쟁이✨ {name}입니다.</h3>
        <p>{children}</p>
        <p>
          {name}이 좋아하는 숫자는 {favorateNumber}입니다.
        </p>
      </div>
    );
  }
}

MyComponent.defaultProps = {
  name: "최다연",
};
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
