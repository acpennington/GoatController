import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "./Button.js";
import { BsArrowLeftShort } from "react-icons/bs";

class BackButton extends PureComponent {
   render() {
      const { href, id, color, size } = this.props;

      return (
         <Button color={color} size={size} href={"/" + href + (id ? "?id=" + id : "")} round>
            <BsArrowLeftShort /> To {href}
         </Button>
      );
   }
}

BackButton.propTypes = {
   href: PropTypes.string.isRequired,
   id: PropTypes.string,
   color: PropTypes.string,
   size: PropTypes.string
};

BackButton.defaultProps = {
   href: "wall",
   color: "primary",
   size: "lg"
};

export default BackButton;
