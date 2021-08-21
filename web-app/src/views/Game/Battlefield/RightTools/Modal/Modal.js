import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import RenderCards from "./CardsToRender.js";
import ModalHeader from "./ModalHeader.js";
import ShortcutFooter from "./ShortcutFooter.js";

import getCardDetails from "shared/getCardDetails";
import { EXTRA_DECK, MODAL_CARD_SIZE } from "shared/constants.js";
import { fusions } from "shared/database";

import Button from "components/CustomButtons/Button.js";
import Switch from "@material-ui/core/Switch";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

const levels = [1, 3, 4, 5, 6, 7, 8, 9];

class Modal extends Component {
   constructor(props) {
      super(props);
      this.state = { metaTargets: true, levelFilter: false, hfHeights: 0 };
   }

   componentDidMount() {
      this.setMaxHeight();
   }

   componentDidUpdate() {
      this.setMaxHeight();
   }

   setMaxHeight = () => {
      const containerDiv = document.getElementById("modalcontainer");
      const headerDiv = document.getElementById("modalheader");
      const footerDiv = document.getElementById("modalfooter");
      const footerHeight = footerDiv ? footerDiv.offsetHeight : 0;
      const maxHeight = containerDiv && headerDiv ? containerDiv.offsetHeight - headerDiv.offsetHeight - footerHeight : 0;
      if (maxHeight !== this.state.maxHeight) this.setState({ maxHeight });
   };

   flipSwitch = (event) => {
      this.setState({ metaTargets: event.target.checked });
      if (!event.target.checked) this.setState({ levelFilter: false });
   };

   render() {
      const { classes, height, player, row, filter, autoClose, isExtra, allFusions, heroPlayer } = this.props;
      const { metaTargets, levelFilter, maxHeight } = this.state;
      const isHero = heroPlayer === player;

      const fusionNames =
         allFusions &&
         allFusions.filter((name) => {
            const cardDetails = getCardDetails(name);
            return !cardDetails.noMeta === metaTargets && (!levelFilter || levelFilter === cardDetails.levelOrSubtype);
         });

      return (
         <div className={classes.modalContainer} id="modalcontainer">
            <ModalHeader addName={!isExtra} player={player} row={row} />
            <RenderCards
               height={height * MODAL_CARD_SIZE}
               player={player}
               row={row}
               cardNames={fusionNames}
               maxHeight={maxHeight || 0}
               filter={filter}
               isHero={isHero}
               autoClose={autoClose}
            />
            {isHero && (
               <div id="modalfooter" className={classes["footer" + row]}>
                  {isExtra ? (
                     <Fragment>
                        <Switch checked={metaTargets} onChange={(event) => this.flipSwitch(event)} color="primary" style={{ color: "#9c27b0" }} />
                        Meta Targets
                        {metaTargets && (
                           <div className={classes.levelFilter}>
                              {levels.map((level, index) => (
                                 <Button
                                    color={levelFilter === level ? "primary" : "info"}
                                    size="sm"
                                    round
                                    justIcon
                                    onClick={() => {
                                       this.setState({ levelFilter: level === levelFilter ? false : level });
                                    }}
                                    key={index}
                                 >
                                    {level}
                                 </Button>
                              ))}
                           </div>
                        )}
                     </Fragment>
                  ) : (
                     <ShortcutFooter row={row} />
                  )}
               </div>
            )}
         </div>
      );
   }
}

function mapStateToProps(state, ownProps) {
   const { player, row, filter, autoClose } = ownProps.pile;
   const isExtra = row === EXTRA_DECK;
   const usedFusions = isExtra && state.field[player].usedFusions;
   const allFusions = isExtra && Object.keys(fusions).filter((name) => !usedFusions[name] || usedFusions[name] < 3);

   return { player, row, filter, autoClose, isExtra, usedFusions, allFusions };
}

Modal.propTypes = {
   classes: PropTypes.object.isRequired,
   height: PropTypes.number.isRequired,
   pile: PropTypes.object.isRequired,
   heroPlayer: PropTypes.string.isRequired
};

export default connect(mapStateToProps, {})(withStyles(styles)(Modal));
