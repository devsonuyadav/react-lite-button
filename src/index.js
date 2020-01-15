import React, { Component } from "react";
import PropTypes from "prop-types";
import Loader from "react-spinners";
export default class LiteButton extends Component {
  static propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.function,
    colors: PropTypes.array,
    textColor: PropTypes.string,
    textSize: PropTypes.number,
    width: PropTypes.number || PropTypes.string
  };

  render() {
    const {
      style,
      title,
      onClick,
      colors,
      textColor,
      textSize,
      width,
      loading,
      loaderType,
      loaderSize,
      loaderColor,
      shadow,
      height,
      borderRadius,
      children
    } = this.props;

    const styles = {
      button: {
        background: `linear-gradient(45deg, ${
          colors ? colors[0] : "#fe6b8b"
        } 30%, ${colors ? colors[1] : "#ff8e53"} 90%)`,
        borderRadius: borderRadius || 3,
        border: 0,
        color: textColor || "white",
        height: height || 48,
        width: width || "100%",
        padding: "0px 20px",
        boxShadow: shadow || `0px 3px 5px 2px rgba(255, 105, 135, 0.3)`,
        cursor: "pointer",
        textAlign: "center",
        fontSize: textSize ? textSize : 17,
        fontFamily: '"Gill Sans", sans-serif',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        outline: "none"
      }
    };

    const handleComponent = () => {
      const Indicator = Loader[loaderType] || Loader["ClipLoader"];
      if (loading) {
        return (
          <Indicator
            size={loaderSize || 30}
            color={loaderColor || white}
            loading={loading || false}
          />
        );
      } else return title;
    };

    return (
      <button style={styles.button} onClick={onClick || null}>
        {handleComponent()} {children}
      </button>
    );
  }
}
