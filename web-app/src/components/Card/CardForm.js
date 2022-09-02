import React, { Component } from "react";
import PropTypes from "prop-types";

import Card from "./Card.js";

class CardForm extends Component {
   render() {
      const { classes, children, ...rest } = this.props;

      return (
         <Card {...rest}>
            <form className={classes.form}>{children}</form>
         </Card>
      );
   }
}

CardForm.propTypes = {
   classes: PropTypes.object.isRequired,
   children: PropTypes.element.isRequired
};

export default CardForm;
