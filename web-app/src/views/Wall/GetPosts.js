import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import GenericFinder from "components/CardFinder/GenericFinder.js";
import GridContainer from "components/Grid/GridContainer.js";

import Post from "./Post.js";
import getApiStage from "utils/getApiStage.js";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

const apiurl = (getApiStage() === "dev" ? "http://localhost:3000" : "https://goatduels.com") + "/jdbs/wallposts.json";
const subbedTo = ["Goat Duels"];

class GetPosts extends PureComponent {
   constructor(props) {
      super(props);
      this.newPosts = { "Goat Duels": null };
      this.state = { postFilter: "All", doneFetching: false, newPosts: { "Goat Duels": null } };
   }

   componentDidMount() {
      this.fetchPosts();
   }

   fetchPosts = async () => {
      const res = await axios.get(apiurl);
      if (res.status === 200) {
         this.newPosts = { "Goat Duels": res.data };
         this.setState({ doneFetching: true });
      } else console.log(JSON.stringify(res));
   };

   setPostFilter = (postFilter) => this.setState({ postFilter });

   render() {
      const { classes } = this.props;
      const { postFilter, doneFetching } = this.state;
      const { newPosts } = this;

      console.log(JSON.stringify(newPosts));

      let posts = [];
      if (doneFetching) {
         if (postFilter === "All") {
            for (const source of subbedTo) posts.push(...newPosts[source]);
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));
         } else posts = newPosts[postFilter].sort((a, b) => new Date(b.date) - new Date(a.date));
      }

      return (
         <div className={classes.bigContainer}>
            <div className={classes.flexRow}>
               <span style={{ textAlign: "right", paddingRight: "5px", width: "50%" }}>Posts by:</span>
               <GenericFinder
                  value="All"
                  options={[
                     { value: "All", name: "All" },
                     ...subbedTo.map((name) => {
                        return { value: name, name };
                     })
                  ]}
                  onChange={this.setPostFilter}
               />
            </div>
            {doneFetching ? (
               <GridContainer className={classes.grid}>
                  {posts.map((post, index) => (
                     <Post content={post} key={index} />
                  ))}
               </GridContainer>
            ) : (
               <div className={classes.container}>Fetching posts...</div>
            )}
         </div>
      );
   }
}

GetPosts.propTypes = {
   classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GetPosts);
