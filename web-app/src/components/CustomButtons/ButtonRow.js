import React from "react";
import PropTypes from "prop-types";

function ButtonRow({ children }) {
   return <div style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>{children}</div>;
}

ButtonRow.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
};

export default ButtonRow;
