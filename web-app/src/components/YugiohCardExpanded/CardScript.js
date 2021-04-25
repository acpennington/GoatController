import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import { FaSearch } from "react-icons/fa";
import FindInPageIcon from "@material-ui/icons/FindInPage";

import { moveCard } from "stateStore/actions/field.js";
import { filterDeck } from "stateStore/actions/scripts.js";
import { HERO, BANISHED, DECK, ST, SEARCH_DECK, BANISH_ALL } from "utils/constants";

class CardScript extends PureComponent {
   runScript = (name, params) => {
      switch (name) {
         case SEARCH_DECK:
            this.props.filterDeck(params);
            break;
         case BANISH_ALL:
            const deck = this.props.field.hero.deck;
            const deckLength = deck.length;
            for (let i = 0; i < deckLength; i++) {
               const card = deck[i];
               if (card && card.name === this.props.activeCard.name)
                  this.props.moveCard({
                     from: { player: HERO, row: DECK, zone: i },
                     to: { player: HERO, row: BANISHED, zone: 0 }
                  });
            }
            this.props.moveCard({ from: this.props.activeCard, to: { player: HERO, row: BANISHED, zone: 0 } });
            break;
         default:
      }
   };

   render() {
      const { script, variant, field } = this.props;
      const [name, params] = script.split(":");

      if (variant && !fieldContains(field, variant)) return <Fragment></Fragment>;

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
      case BANISH_ALL:
         return (
            <Fragment>
               <FindInPageIcon /> Banish All
            </Fragment>
         );
      default:
         return <Fragment>{scriptName.replace(/_/g, " ")}</Fragment>;
   }
}

function fieldContains(field, card) {
   switch (card) {
      case "Nobleman of Crossout":
         for (const zone of field.villain[ST]) if (zone && !zone.facedown && zone.name === card) return true;
         for (const zone of field.hero[ST]) if (zone && !zone.facedown && zone.name === card) return true;
      default:
         return false;
   }
}

function mapStateToProps(state) {
   return { field: state.field };
}

CardScript.propTypes = {
   script: PropTypes.string.isRequired,
   variant: PropTypes.string,
   activeCard: PropTypes.object
};

export default connect(mapStateToProps, { filterDeck, moveCard })(CardScript);
