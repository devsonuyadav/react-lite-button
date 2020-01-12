import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LiteButton extends Component {
  static propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.function,
    color: PropTypes.array,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    width: PropTypes.number || PropTypes.string
  };

  render() {
    const { title, onClick, color, textColor, textSize } = this.props;

    const styles = {
      button: {
        background: `linear-gradient(45deg, ${
          color ? color[0] : "#fe6b8b"
        } 30%, ${color ? color[1] : "#ff8e53"} 90%)`,
        borderRadius: 3,
        border: 0,
        color: textColor || "white",
        height: 48,
        width: "100%" || width,
        padding: "0px 20px",
        boxShadow: "0px 3px 5px 2px rgba(255, 105, 135, .3)",

        cursor: "pointer",
        textAlign: "center",
        fontSize: textSize ? textSize : 17,
        fontFamily: '"Gill Sans", sans-serif'
      }
    };

    return (
      <button style={styles.button} onClick={onClick}>
        {title}
      </button>
    );
  }
}
