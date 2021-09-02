import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import { FaSearch, FaDice } from "react-icons/fa";
import { BiDownload, BiBlock } from "react-icons/bi";
import { CgCardHearts } from "react-icons/cg";
import { GiTwoCoins, GiCardPlay, GiUpCard } from "react-icons/gi";
import { ImShuffle } from "react-icons/im";
import FindInPageIcon from "@material-ui/icons/FindInPage";

import {
   SEARCH_DECK,
   BANISH_ALL,
   MILL_UNTIL,
   TOKENS,
   FLIP_COINS,
   ROLL_DICE,
   DISCARD_AND_DRAW,
   SHUFFLE_AND_DRAW,
   SKIP_DRAWS,
   GRAVEYARD,
   DRAW_N
} from "shared/constants";

class ScriptName extends PureComponent {
   render() {
      const { scriptName, params } = this.props;

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
                  <BiDownload /> Mill {typeof params === "number" ? params : "Until"}
               </Fragment>
            );
         case TOKENS:
            return (
               <Fragment>
                  <CgCardHearts /> Make Tokens
               </Fragment>
            );
         case FLIP_COINS:
            return (
               <Fragment>
                  <GiTwoCoins /> Flip Coins
               </Fragment>
            );
         case ROLL_DICE:
            return (
               <Fragment>
                  <FaDice /> Roll Dice
               </Fragment>
            );
         case DISCARD_AND_DRAW:
            return (
               <Fragment>
                  <GiCardPlay /> Discard {params === 0 ? "Hand" : "and Draw"}
               </Fragment>
            );
         case SHUFFLE_AND_DRAW:
            return (
               <Fragment>
                  <ImShuffle /> {params === GRAVEYARD ? "Shuffle into Deck" : "Reload Hand"}
               </Fragment>
            );
         case SKIP_DRAWS:
            return (
               <Fragment>
                  <BiBlock /> Skip Draws
               </Fragment>
            );
         case DRAW_N:
            return (
               <Fragment>
                  <GiUpCard /> Draw {params > 1 && params}
               </Fragment>
            );
         default:
            return <Fragment>{scriptName && scriptName.replace(/_/g, " ")}</Fragment>;
      }
   }
}

ScriptName.propTypes = {
   scriptName: PropTypes.string.isRequired,
   params: PropTypes.any
};

export default ScriptName;
