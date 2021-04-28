import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import { FaSearch } from "react-icons/fa";
import { BiDownload } from "react-icons/bi";
import { CgCardHearts } from "react-icons/cg";
import FindInPageIcon from "@material-ui/icons/FindInPage";

import { SEARCH_DECK, BANISH_ALL, MILL_UNTIL, TOKENS } from "utils/constants";

class ScriptName extends PureComponent {
   render() {
      const { scriptName } = this.props;

      switch (scriptName) {
         case SEARCH_DECK:
            return (
               <Fragment>
                  <FaSearch /> Search Deck
               </Fragment>
            );
         case BANISH_ALL:
            return (
               <Fragment>
                  <FindInPageIcon /> Banish All
               </Fragment>
            );
         case MILL_UNTIL:
            return (
               <Fragment>
                  <BiDownload /> Mill Until
               </Fragment>
            );
         case TOKENS:
            return (
               <Fragment>
                  <CgCardHearts /> Make Tokens
               </Fragment>
            );
         default:
            return <Fragment>{scriptName.replace(/_/g, " ")}</Fragment>;
      }
   }
}

ScriptName.propTypes = {
   scriptName: PropTypes.string.isRequired
};

export default ScriptName;
