import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Image = ({ className = "", url, alternativeText }) => {
  if (!url) return null;

  if (url[0] === "/") {
    url = process.env.REACT_APP_API_URL + url;
  }

  return (
    <img className={className + " Image"} src={url} alt={alternativeText} />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string,
  alternativeText: PropTypes.string,
};

export default Image;
