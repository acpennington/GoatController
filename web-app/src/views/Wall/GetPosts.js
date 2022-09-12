import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Pagination from "@mui/material/Pagination";
import GenericFinder from "components/CardFinder/GenericFinder.js";
import GridContainer from "components/Grid/GridContainer.js";
import Shadow from "components/Shadow/Shadow.js";

import Post from "./Post.js";
import getApiStage from "utils/getApiStage.js";

import { withStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

const apiurl = (getApiStage() === "dev" ? "http://localhost:3000" : "https://goatduels.com") + "/jdbs/wallposts.json";
const subbedTo = ["Goat Duels"];
const maxPerPage = 10;

class GetPosts extends PureComponent {
   constructor(props) {
      super(props);
      this.newPosts = { "Goat Duels": null };
      this.state = { postFilter: "All", doneFetching: false, page: 0, newPosts: { "Goat Duels": null } };
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

   changePage = (event, number) => {
      this.setState({ page: number - 1 });
      window.scrollTo(0, 0);
   };

   render() {
      const { classes } = this.props;
      const { postFilter, doneFetching, page } = this.state;
      const { newPosts } = this;

      let posts = [];
      if (doneFetching) {
         if (postFilter === "All") {
            for (const source of subbedTo) posts.push(...newPosts[source].map((post) => ({ ...post, author: source })));
            posts.sort((a, b) => new Date(b.date) - new Date(a.date));
         } else posts = newPosts[postFilter].map((post) => ({ ...post, author: postFilter })).sort((a, b) => new Date(b.date) - new Date(a.date));
      }

      return (
         <div className={classes.bigContainer}>
            <div className={classes.flexRow}>
               <Shadow style={{width: "50%", display: "flex", justifyContent: "right", alignItems: "center", paddingRight: "5px"}}><strong>Posts by:</strong></Shadow>
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
                  {posts.map((post, index) => {
                     if (index >= page * maxPerPage && index < (page + 1) * maxPerPage) return <Post content={post} key={index} />;
                     else return null;
                  })}
                  {posts.length > maxPerPage && (
                     <div className={classes.pagination}>
                        <Pagination count={Math.ceil(posts.length / maxPerPage)} onChange={this.changePage} color="secondary" />
                     </div>
                  )}
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
