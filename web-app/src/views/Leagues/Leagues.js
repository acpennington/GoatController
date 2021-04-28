import React, { Component } from "react";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";

class Leagues extends Component {
    constructor(props) {
       super(props);
       checkToken();
 
       const settings = JSON.parse(window.sessionStorage.getItem("settings"));
       setBodyImage(settings.gamebg);
    }
 
    render() {
       const { classes, ...rest } = this.props;
 
       return (
          <div>
             <Header
                absolute
                color="transparent"
                brand="Goat Duels"
                rightLinks={<HeaderLinks loggedInAs={window.sessionStorage.getItem("username")} />}
                fixed
                changeColorOnScroll={{
                   height: 100,
                   color: "semitransparent"
                }}
                {...rest}
             />
             <div className={classes.pageHeader}>
                <div className={classes.container}>
                   <div style={{ marginTop: "-5vh", marginBottom: "-100%" }}>
                   </div>
                </div>
             </div>
          </div>
       );
    }
 }

 export default Leagues;