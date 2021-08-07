import React, { PureComponent } from "react";

import ResizableContainer from "components/ResizableContainer/ResizableContainer.js";
import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner.js";

class ShareableDeck extends PureComponent {
   constructor(props) {
      super(props);

      this.state = { loading: true, message: "Loading Deck..." };
   }

   componentDidMount() {}

   render() {
      const { loading, message } = this.state;

      if (loading) return <LoadingSpinner message={message} />;

      return <ResizableContainer noToken></ResizableContainer>;
   }
}

export default ShareableDeck;
