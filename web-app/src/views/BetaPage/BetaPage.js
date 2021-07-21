import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import PageTemplate from "components/Header/PageTemplate.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/betaPage.js";

class BetaPage extends PureComponent {
   render() {
      const { classes } = this.props;

      return (
         <PageTemplate noToken>
            <GridContainer>
               <GridItem xs={12}>
                  <div className={classes.container}>
                     <h2>Join Beta Testing</h2>
                     <h4>
                        We're glad that you want to join Goat Duels. The bad news is that this app is still in beta and is not open to the public. The good news
                        is that it's easy for you to become a beta tester if you want to. Please watch the video below about why I created Goat Duels and how
                        you can become a beta tester.
                     </h4>
                     <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/19aZg7pAW-A"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                     ></iframe>
                     <h4>
                        So to recap from the video, you'll need to send an email to contact@goatduels.com (Subject: Beta Testing) with your discord name,
                        country, and a couple of sentences on why you want to become a beta tester. Note that this app is still in development. It is not a
                        finished product. If you understand that and want to give constructive feedback on how to improve the features of Goat Duels, you will
                        make a great beta tester.
                     </h4>
                  </div>
               </GridItem>
            </GridContainer>
         </PageTemplate>
      );
   }
}

BetaPage.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BetaPage);
