import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import GridItem from "components/Grid/GridItem.js";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

class Post extends PureComponent {
   constructor(props) {
      super(props);

      this.state = { mouseOver: false };
   }

   render() {
      const { classes, content } = this.props;
      const { title, type, id } = content;
      const { mouseOver } = this.state;
      const isVideo = type === "video";

      return (
         <GridItem sm={12} md={6} className={classes.gridItem}>
            <div
               className={classes.postContainer}
               onMouseEnter={() => this.setState({ mouseOver: true })}
               onMouseLeave={() => this.setState({ mouseOver: false })}
               href={isVideo && "https://youtube.com/watch?v=" + id}
               target="_blank"
            >
               {isVideo && (
                  <a href={"https://youtube.com/watch?v=" + id} target="_blank" rel="noreferrer">
                     <span className={classes.link}></span>
                  </a>
               )}
               <h4 className={classes.header}>{title}</h4>
               <div className={classes[type]} style={isVideo && { backgroundImage: 'url("https://img.youtube.com/vi/' + id + '/maxresdefault.jpg")' }}>
                  <img className={classes.playButton} src="playvid.png" style={{ opacity: mouseOver ? 1 : 0.75 }} />
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
