import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Modal from "./Modal.js";
import StandardTools from "./StandardTools.js";

function RightTools(props) {
   const modal = useSelector((state) => state.settings.modal);
   return (
      <Fragment>
         {modal ? <Modal pile={modal} height={props.height} /> : <StandardTools discardPile={props.discardPile} />}
      </Fragment>
   );
}

RightTools.propTypes = {
   height: PropTypes.number.isRequired,
   discardPile: PropTypes.string.isRequired
};

export default RightTools;
