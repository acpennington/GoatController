import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Modal from "./Modal/Modal.js";
import StandardTools from "./StandardTools/StandardTools.js";

function RightTools({ height, discardPile, solo }) {
   const modal = useSelector((state) => state.settings.modal);
   return (
      <Fragment>
         {modal ? <Modal pile={modal} height={height} /> : <StandardTools discardPile={discardPile} solo={solo} />}
      </Fragment>
   );
}

RightTools.propTypes = {
   height: PropTypes.number.isRequired,
   discardPile: PropTypes.string.isRequired,
   solo: PropTypes.bool
};

export default RightTools;
