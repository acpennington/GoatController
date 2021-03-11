import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bind, unbind } from "mousetrap";

import Button from "components/CustomButtons/Button.js";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/gameSections/rightTools.js";

import LifeBar from "components/LifeBar/LifeBar.js";
import { switchDiscard } from "stateStore/actions/settings.js";
import { setTurn, nextPhase, prevPhase } from "stateStore/actions/turn.js";
import { HERO, VILLAIN, discardZones, phases } from "utils/constants.js";

class StandardTools extends PureComponent {
   componentDidMount() {
      bind("s", this.props.switchDiscard);
      bind("up", this.props.prevPhase);
      bind("down", this.props.nextPhase);
   }

   componentWillUnmount() {
      unbind(["s", "up", "down"]);
   }

   render() {
      const { classes, discardPile, turn, heroLP, villainLP } = this.props;
      const { player, phase } = turn;
      const otherZone = discardZones.filter((zone) => zone !== discardPile)[0];
      const isHero = player === HERO;
      const myColor = isHero ? "info" : "danger";

      return (
         <div className={classes.container}>
            <LifeBar life={villainLP} player={VILLAIN} />
            {phases.map((aPhase, index) => (
               <Button
                  color={myColor}
                  round
                  style={{ opacity: aPhase === phase || 0.8, border: aPhase === phase && "solid 3px white" }}
                  key={index}
                  onClick={isHero ? () => this.props.setTurn(player, aPhase) : undefined}
               >
                  {aPhase}
               </Button>
            ))}
            <Tooltip
               id="switch discard"
               title={"Click to switch to " + otherZone}
               placement="bottom"
               classes={{ tooltip: classes.tooltip }}
            >
               <Button color="primary" onClick={this.props.switchDiscard}>
                  Showing
                  <br />
                  {discardPile}
               </Button>
            </Tooltip>
            <LifeBar life={heroLP} player={HERO} />
         </div>
      );
   }
}

function mapStateToProps(state) {
   return { turn: state.turn, villainLP: state.field.villain.lifepoints, heroLP: state.field.hero.lifepoints };
}

StandardTools.propTypes = {
   discardPile: PropTypes.string.isRequired
};

export default connect(mapStateToProps, { switchDiscard, setTurn, nextPhase, prevPhase })(
   withStyles(styles)(StandardTools)
);
