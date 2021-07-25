import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import SelectSearch, { fuzzySearch } from "react-select-search";

import "./style.css";

class GenericFinder extends PureComponent {
   render() {
      const { value, options, onChange } = this.props;

      return (
         <SelectSearch
            search
            filterOptions={fuzzySearch}
            options={options}
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

GenericFinder.propTypes = {
   value: PropTypes.string,
   options: PropTypes.array.isRequired,
   onChange: PropTypes.func
};

export default GenericFinder;
