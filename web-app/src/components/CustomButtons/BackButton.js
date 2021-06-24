import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Button from "./Button.js";
import { BsArrowLeftShort } from "react-icons/bs";

class BackButton extends PureComponent {
   render() {
      const { href, id, color } = this.props;

      return (
         <Button color={color} size="lg" href={"/" + href + (id ? "?id=" + id : "")} round>
            <BsArrowLeftShort /> To {href}
         </Button>
      );
   }
}

BackButton.propTypes = {
   href: PropTypes.string,
   id: PropTypes.string,
   color: PropTypes.string
};

BackButton.defaultProps = {
   href: "wall",
   color: "primary"
};

export default BackButton;
