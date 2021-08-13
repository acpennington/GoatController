import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import GenericFinder from "./GenericFinder.js";

import { nonfusions, cards } from "databases/cardDB/index.js";

class CardFinder extends PureComponent {
   render() {
      const { withFusions, onChange } = this.props;

      const cardList = [];
      const cardKeys = Object.keys(withFusions ? cards : nonfusions);
      cardKeys.sort();

      console.log(cardKeys.length / 1800 * 100 + "% of Goat Format legal cards loaded.");

      for (const card of cardKeys) {
         cardList.push({ name: card, value: card });
      }

      return <GenericFinder value={null} options={cardList} onChange={onChange} />;
   }
}

CardFinder.propTypes = {
   withFusions: PropTypes.bool,
   onChange: PropTypes.func
};

export default CardFinder;
