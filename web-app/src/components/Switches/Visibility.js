import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";

import Button from "components/CustomButtons/Button.js";
import { setPublic } from "stateStore/actions/deckConstructor/decklist.js";
import getApiStage from "utils/getApiStage.js";
import { getAuthHeaders } from "utils/authToken.js";
import { API_URL } from "shared/constants.js";

import Switch from "@material-ui/core/Switch";
import { RiShareFill } from "react-icons/ri";

class Visibility extends PureComponent {
   flipVisibility = async (event) => {
      const { deckLoaded, decklist, setPublic } = this.props;
      const checked = event.target.checked;
      const config = getAuthHeaders();
      const body = { deckName: deckLoaded, isPublic: checked };

      const res = await axios.put(API_URL + getApiStage() + "/users/deck", body, config);
      if (res.data.statusCode === 200) {
         const storage = window.sessionStorage;
         const decks = JSON.parse(storage.getItem("decks"));
         decks[deckLoaded] = { ...decklist, public: checked };
         storage.setItem("decks", JSON.stringify(decks));

         setPublic(checked);
      } else console.log(JSON.stringify(res));
   };

   render() {
      const { isPublic, player, deckLoaded } = this.props;

      return (
         <Fragment>
            <div>
               <Switch checked={isPublic} onChange={this.flipVisibility} color="primary" style={{ color: "#9c27b0" }} />
               Visibility: {isPublic ? "Public" : "Private"}
            </div>
            {isPublic && (
               <Button color="primary" round target="_blank" href={"/deck?user=" + player.replace(/ /g, "_") + "&name=" + deckLoaded.replace(/ /g, "_")}>
                  <RiShareFill color="white" /> Share Deck
               </Button>
            )}
         </Fragment>
      );
   }
}

function mapStateToProps(state) {
   return { deckLoaded: state.settings.deckLoaded, decklist: state.decklist, isPublic: state.decklist.public };
}

Visibility.propTypes = {
   player: PropTypes.string.isRequired,
   deckLoaded: PropTypes.string.isRequired,
   decklist: PropTypes.object.isRequired,
   setPublic: PropTypes.func.isRequired,
   isPublic: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, { setPublic })(Visibility);
