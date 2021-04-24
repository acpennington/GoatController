import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import { FaSearch } from "react-icons/fa";

import { filterDeck } from "stateStore/actions/scripts.js";
import { SEARCH_DECK } from "utils/constants";

class CardScript extends PureComponent {
   runScript = (name, params) => {
      switch (name) {
         case SEARCH_DECK:
            this.props.filterDeck(params);
         default:
      }
   };

   render() {
      const { script } = this.props;
      const [name, params] = script.split(":");

      return (
         <Button color="primary" onClick={() => this.runScript(name, params)}>
            <ScriptName scriptName={name} />
         </Button>
      );
   }
}

function ScriptName({ scriptName }) {
   switch (scriptName) {
      case SEARCH_DECK:
         return (
            <Fragment>
               <FaSearch /> Search Deck
            </Fragment>
         );
      default:
         return <Fragment>{scriptName.replace(/_/g, " ")}</Fragment>;
   }
}

CardScript.propTypes = {
   script: PropTypes.string.isRequired
};

export default connect(null, { filterDeck })(CardScript);
