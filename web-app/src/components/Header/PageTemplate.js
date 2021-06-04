import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";

import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

class PageTemplate extends Component {
    constructor(props) {
        super(props);
        if (!this.props.noToken) checkToken();

        this.username = window.sessionStorage.getItem("username");
        setBodyImage();
    }

    render() {
        const { classes, noGap, addFooter, children } = this.props;

        return (
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="Goat Duels"
                    rightLinks={<HeaderLinks loggedInAs={this.username} />}
                    fixed
                    changeColorOnScroll={{
                        height: 100,
                        color: "semitransparent"
                    }}
                />
                <div className={classes.pageHeader}>
                    <div className={classes.container}>
                        <div style={noGap ? {} : { marginTop: "-5vh", marginBottom: "-100%" }}>
                            {children}
                        </div>
                    </div>
                    {addFooter && <Footer whitefont />}
                </div>
            </div>
        );
    }
}

PageTemplate.propTypes = {
    classes: PropTypes.object.isRequired,
    noToken: PropTypes.bool,
    noGap: PropTypes.bool,
    addFooter: PropTypes.bool
}

export default withStyles(styles)(PageTemplate);