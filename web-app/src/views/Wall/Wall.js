import React, { PureComponent } from "react";

import PageTemplate from "components/Header/PageTemplate";
import SideNavigation from "./SideNavigation.js";
import GetPosts from "./GetPosts.js";

class Wall extends PureComponent {
   render() {
      return (
         <PageTemplate>
            <SideNavigation />
            <GetPosts />
         </PageTemplate>
      );
   }
}

export default Wall;
