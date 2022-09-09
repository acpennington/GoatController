import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import GridItem from "components/Grid/GridItem.js";
import Tooltip from "components/Tooltip/PatchedTooltip.js";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

class Post extends PureComponent {
   constructor(props) {
      super(props);

      this.state = { mouseOver: false, textClicked: false };
   }

   clicked = () => {
      const { content } = this.props;
      const { type, id } = content;

      if (type == "video") window.open("https://youtube.com/watch?v=" + id);
      else this.setState({ textClicked: !this.state.textClicked });
   };

   formatText = (text) => {
      const paragraphs = text.split("<br>");
      return paragraphs.map((par, index) => (
         <Fragment key={index}>
            {index !== 0 && (
               <Fragment>
                  <br />
                  <br />
               </Fragment>
            )}
            {par}
         </Fragment>
      ));
   };

   render() {
      const { classes, content } = this.props;
      const { title, type, id, author, date, story } = content;
      const { mouseOver, textClicked } = this.state;

      const isVideo = type === "video";
      const tip = author + " (" + date + ")";

      return (
         <GridItem sm={12} md={textClicked ? 12 : 6} className={classes.gridItem}>
            <div
               className={classes.postContainer}
               onMouseEnter={() => this.setState({ mouseOver: true })}
               onMouseLeave={() => this.setState({ mouseOver: false })}
               onClick={this.clicked}
            >
               <Tooltip id={tip} title={tip} classes={{ tooltip: classes.tooltip }} placement="top">
                  <h4 className={classes.header}>{title}</h4>
               </Tooltip>
               <div
                  className={classes[type]}
                  style={isVideo ? { backgroundImage: 'url("https://img.youtube.com/vi/' + id + '/maxresdefault.jpg")' } : { lineClamp: textClicked ? 0 : 10 }}
               >
                  {isVideo ? <img className={classes.playButton} src="playvid.png" style={{ opacity: mouseOver ? 1 : 0.75 }} /> : this.formatText(story)}
               </div>
            </div>
         </GridItem>
      );
   }
}

Post.propTypes = {
   classes: PropTypes.object.isRequired,
   content: PropTypes.object.isRequired,
   key: PropTypes.number
};

export default withStyles(styles)(Post);
