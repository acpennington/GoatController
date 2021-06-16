import React, { PureComponent } from "react";

import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import { withStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/wall.js";

const newPosts = [
   {
      author: "Someone Unimportant",
      date: "2021-04-02",
      avatar: "https://i.imgur.com/qXATFOp.jpg",
      message: "I've got a great cat."
   },
   {
      author: "Official Announcements",
      date: "2021-04-07",
      avatar: "https://i.imgur.com/qXATFOp.jpg",
      message:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis odio nec nisl interdum mattis. Nullam quis pharetra nisi. Praesent ut diam a tellus maximus porttitor. Etiam tincidunt imperdiet ante, eu tristique orci tristique et. Integer vitae nunc dictum, posuere augue a, faucibus sem. Sed ut iaculis enim. Ut at odio placerat arcu egestas elementum. Integer molestie sed nibh a molestie. Mauris orci tellus, eleifend at facilisis non, laoreet quis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ex purus, iaculis vitae metus eget, pulvinar bibendum nisl. Sed consectetur arcu a pellentesque rhoncus. Ut non pulvinar sapien. Praesent a est dui. Quisque cursus, mauris id finibus fermentum, odio mauris ornare nulla, vel fermentum mauris elit id quam. Phasellus fermentum sem sed ultrices convallis. Fusce at massa ullamcorper, tristique orci a, ornare erat. Nullam semper ac odio at malesuada. Donec facilisis efficitur quam, eu rutrum urna porttitor nec. Nam dapibus lectus at augue interdum commodo. Donec quis dolor in sapien vehicula consequat ac sit amet erat. Aliquam vulputate faucibus luctus. Suspendisse bibendum magna ut sapien elementum molestie. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam congue arcu non diam sollicitudin, quis pharetra enim interdum. Proin ultricies mauris id metus fermentum, efficitur consequat dolor iaculis. Curabitur pulvinar turpis eu dui feugiat, vitae finibus libero commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac augue at nunc congue dignissim. Etiam vulputate porta odio, eu congue lacus vulputate non. Proin convallis, tellus at euismod accumsan, libero risus auctor sem, nec cursus nisi metus et odio. Duis eleifend nunc vitae purus varius sodales. Donec eget metus sit amet eros eleifend eleifend. Sed eget mauris et justo venenatis ultricies. Duis fermentum nibh ut tincidunt scelerisque. Suspendisse finibus hendrerit lacus, non lobortis lacus ultrices ac. Phasellus a mauris metus. Sed vel gravida ipsum. Duis quis iaculis nibh. Etiam rutrum arcu felis, at congue nulla viverra non. Integer efficitur metus non nulla ultrices luctus. Pellentesque hendrerit ipsum massa, at venenatis enim imperdiet at. Sed quis quam et elit luctus mollis in sit amet eros. Proin lacinia vestibulum consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi nec mi lacus. Praesent in imperdiet diam. Fusce in viverra nisi. Ut pellentesque scelerisque gravida. Mauris elementum lectus justo, nec malesuada augue tristique id. Morbi vehicula, dolor sed vestibulum imperdiet, est felis pretium felis, et sagittis massa felis non nibh."
   }
];
const subbedTo = ["Someone Unimportant", "Official Announcements"];

class GetPosts extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { postFilter: "All" };
   }

   setPostFilter = (postFilter) => this.setState({ postFilter });

   render() {
      const { classes } = this.props;
      const { postFilter } = this.state;

      let posts = newPosts;
      if (postFilter === "All") posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      else posts = posts.filter((post) => postFilter === "All" || post.author === postFilter);

      return (
         <div className={classes.bigContainer}>
            <CustomDropdown
               buttonText={"Posts By: " + postFilter}
               buttonProps={{
                  color: "transparent"
               }}
               dropdownList={[
                  <div onClick={() => this.setPostFilter("All")}>All</div>,
                  ...subbedTo.map((name) => <div onClick={() => this.setPostFilter(name)}>{name}</div>)
               ]}
            />
            <div className={classes.container}>
               {posts.map((post, index) => (
                  <div className={classes.post} key={index}>
                     <div className={classes.header}>
                        <div className={classes.avatar} style={{ backgroundImage: 'url("' + post.avatar + '")' }}></div>
                        <div className={classes.namedate}>
                           {post.author}
                           <br />
                           {post.date}
                        </div>
                     </div>
                     <div className={classes.content}>{post.message}</div>
                  </div>
               ))}
            </div>
         </div>
      );
   }
}

export default withStyles(styles)(GetPosts);
