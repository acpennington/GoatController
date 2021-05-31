import React, { PureComponent } from "react";

import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import setBodyImage from "utils/setBodyImage.js";
import { checkToken } from "utils/authToken.js";

import Tooltip from "@material-ui/core/Tooltip";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { MdCreate } from "react-icons/md";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";

class Leagues extends PureComponent {
   constructor(props) {
      super(props);
      checkToken();

      this.username = window.sessionStorage.getItem("username");
      setBodyImage();

      this.state = { joinExpanded: false, leaguesList: false };
   }

   swapExpanded = () => {
      const { joinExpanded, leaguesList } = this.state;
      if (!joinExpanded && !leaguesList) this.fetchLeaguesList();
      this.setState({ joinExpanded: !joinExpanded });
   };

   fetchLeaguesList = async () => {};

   render() {
      const { classes, ...rest } = this.props;
      const { joinExpanded, leaguesList } = this.state;

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
               {...rest}
            />
            <div className={classes.pageHeader}>
               <div className={classes.container}>
                  <div style={{ marginTop: "-5vh", marginBottom: "-100%" }}>
                     <GridContainer justify="center">
                        <GridItem xs={12}>
                           <div style={{ textAlign: "center" }}>
                              <h3>Your Leagues</h3>
                           </div>
                        </GridItem>
                        <GridItem xs={12}>
                           <div style={{ textAlign: "center" }}>
                              <Tooltip
                                 id="leagues"
                                 title={"Click to " + (joinExpanded ? "collapse list" : "show list of leagues")}
                                 classes={{ tooltip: classes.tooltip }}
                              >
                                 <h3 onClick={this.swapExpanded}>Join League {joinExpanded ? <ArrowDropDownIcon /> : <ArrowRightIcon />}</h3>
                              </Tooltip>
                              {joinExpanded && (
                                 <div style={{ marginBottom: "10px" }}>
                                    {leaguesList
                                       ? leaguesList.map((league, index) => (
                                            <Tooltip id={league.name} title={league.description} classes={{ tooltip: classes.tooltip }}>
                                               <Button color="success" size="lg" href={"/league?name=" + league.name} key={index}>
                                                  {league.name}
                                               </Button>
                                            </Tooltip>
                                         ))
                                       : "Fetching list of all leagues..."}
                                 </div>
                              )}
                           </div>
                        </GridItem>
                        <GridItem xs={12}>
                           <div style={{ textAlign: "center" }}>
                              <Button color="primary" size="lg" round href="/createleague">
                                 <MdCreate /> Create League
                              </Button>
                           </div>
                        </GridItem>
                     </GridContainer>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(Leagues);
