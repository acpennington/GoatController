import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "components/CustomButtons/Button.js";
import FieldIcon from "components/FieldIcon/FieldIcon.js";

class MapStateToButtons extends PureComponent {
   render() {
      const { state } = this.props;
      const buttons = [];

      let count = 0;
      for (const key in state) {
         const value = state[key];
         if (value) {
            buttons.push(
               <Button color="primary" size="lg" round href={value} target="_blank" key={count}>
                  <FieldIcon field={key} noColor />
                  {key}
               </Button>
            );
            count++;
         }
      }

      return buttons;
   }
}

MapStateToButtons.propTypes = {
   state: PropTypes.object.isRequired
};

export default MapStateToButtons;
