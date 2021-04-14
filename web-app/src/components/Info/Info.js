import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import Tooltip from "@material-ui/core/Tooltip";
import { Help } from "@material-ui/icons";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

class Info extends PureComponent {
    render() {
        const {classes, content} = this.props;

        return (
            <Tooltip title={content} classes={{ tooltip: classes.tooltip }}>
                <span><Help className={classes.icons} /></span>
            </Tooltip>
        );
    }
}

Info.propTypes = {
    content: PropTypes.string.isRequired
}

export default withStyles(styles)(Info);