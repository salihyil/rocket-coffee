import React from "react";
import PropTypes from "prop-types";

function Text({ children }) {
  return <span>{children}</span>;
}

Text.propTypes = {
  children: PropTypes.node,
};

export default Text;
