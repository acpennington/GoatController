import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import GenericFinder from "./GenericFinder.js";

import { nonfusions, cards } from "databases/cardDB.js";

class CardFinder extends PureComponent {
   render() {
      const { value, withFusions, onChange } = this.props;

      const cardList = [];
      const cardKeys = Object.keys(withFusions ? cards : nonfusions);
      cardKeys.sort();

      for (const card of cardKeys) {
         cardList.push({ name: card, value: card });
      }

      return <GenericFinder value={value} options={cardList} onChange={onChange} />;
   }
}

CardFinder.propTypes = {
   value: PropTypes.string,
   withFusions: PropTypes.bool,
   onChange: PropTypes.func
};

export default CardFinder;
