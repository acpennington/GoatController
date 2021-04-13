import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import SelectSearch, { fuzzySearch } from "react-select-search";

import { nonfusions, cards } from "databases/cardDB.js"

import "./style.css";

class CardFinder extends PureComponent {
    render() {
        const { value, withFusions, onChange } = this.props;

        const cardList = [];
        const cardKeys = Object.keys(withFusions ? cards : nonfusions);
        cardKeys.sort();

        for (const card of cardKeys) {
            cardList.push({ name: card, value: card })
        }

        return (
            <SelectSearch
                printOptions="always"
                search
                filterOptions={fuzzySearch}
                options={cardList}
                value={value}
                onChange={onChange}
                name="Cards"
                autoComplete="on"
                emptyMessage="Not found"
                placeholder="Type to search"
            />
        );
    }
}

CardFinder.propTypes = {
    value: PropTypes.string,
    withFusions: PropTypes.bool,
    onChange: PropTypes.func
}

export default CardFinder;