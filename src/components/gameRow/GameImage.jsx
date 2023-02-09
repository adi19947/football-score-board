import React from "react";
import "../../index.css";
import propTypes from "prop-types";
export default function GameImage({ imagePath }) {
  return <img src={imagePath} className="gameImage" alt="game image" />;
}

GameImage.propTypes = {
  imagePath: propTypes.string.isRequired,
};
