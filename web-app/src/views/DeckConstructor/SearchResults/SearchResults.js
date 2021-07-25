import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import useForceUpdate from "use-force-update";

import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll";
import SearchHeader from "./SearchHeader";
import RenderCards from "./RenderCards";
import { transferCard } from "stateStore/actions/deckConstructor/decklist";

import { allLocations, SEARCH_RESULTS, OVER_COLOR } from "utils/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/searchResults.js";

function SearchResults({ classes, player }) {
   const dispatch = useDispatch();
   const forceUpdate = useForceUpdate();
   useEffect(forceUpdate, []);

   const containerDiv = document.getElementById("searchContainer");
   const headerDiv = document.getElementById("searchHeader");
   const maxHeight = containerDiv && headerDiv ? containerDiv.offsetHeight - headerDiv.offsetHeight : 0;

   const [{ isOver, canDrop }, drop] = useDrop({
      accept: allLocations,
      canDrop: () => true,
      drop: (item) => dispatch(transferCard(item.name, SEARCH_RESULTS, item.type)),
      collect: (monitor) => ({
         isOver: !!monitor.isOver(),
         canDrop: monitor.canDrop()
      })
   });

   return (
      <div id="searchContainer" className={classes.container}>
         <SearchHeader />
         <FriendlyScroll
            id="renderSearch"
            flexDirection="column"
            style={{ maxHeight: maxHeight - 6 + "px", backgroundColor: isOver && canDrop && OVER_COLOR + "33" }}
            drop={drop}
         >
            <RenderCards player={player} height={maxHeight} />
         </FriendlyScroll>
      </div>
   );
}

SearchResults.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired
};

export default withStyles(styles)(SearchResults);
