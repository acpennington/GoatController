import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import useForceUpdate from "use-force-update";

import { SizeContext } from "components/ResizableContainer/ResizableContainer.js";
import FriendlyScroll from "components/FriendlyScroll/FriendlyScroll";
import SearchHeader from "./SearchHeader.js";
import CardsToRender from "./CardsToRender.js";
import { transferCard } from "stateStore/actions/deckConstructor/decklist";

import { allLocations, SEARCH_RESULTS, OVER_COLOR } from "shared/constants";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/deckConstructorSections/rightPanel.js";

function SearchResults({ classes, player }) {
   const dispatch = useDispatch();
   const forceUpdate = useForceUpdate();
   useEffect(forceUpdate, []);

   const size = useContext(SizeContext);
   const headerDiv = document.getElementById("searchHeader");
   const maxHeight = headerDiv ? size - headerDiv.offsetHeight : 0;

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
            <CardsToRender player={player} maxHeight={maxHeight} />
         </FriendlyScroll>
      </div>
   );
}

SearchResults.propTypes = {
   classes: PropTypes.object.isRequired,
   player: PropTypes.string.isRequired
};

export default withStyles(styles)(SearchResults);
