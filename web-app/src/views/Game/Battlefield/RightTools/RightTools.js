import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import Modal from "./Modal/Modal.js";
import StandardTools from "./StandardTools/StandardTools.js";

function RightTools({ height, discardPile, player }) {
   const modal = useSelector((state) => state.settings.modal);
   return (
      <Fragment>
         {modal ? <Modal pile={modal} height={height} heroPlayer={player.name} /> : <StandardTools discardPile={discardPile} player={player} />}
      </Fragment>
   );
}

RightTools.propTypes = {
   height: PropTypes.number.isRequired,
   discardPile: PropTypes.string.isRequired,
   player: PropTypes.object.isRequired
};

export default RightTools;
