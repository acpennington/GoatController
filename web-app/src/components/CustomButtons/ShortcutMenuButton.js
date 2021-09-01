import React, { PureComponent, Fragment } from "react";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from "components/CustomButtons/Button.js";
import ChatShorcuts from "components/Switches/ChatShortcuts.js";
import { switchChatShortcuts } from "stateStore/actions/shared/settings.js";
import { FaKeyboard } from "react-icons/fa";

import { connect } from "react-redux";

class ShortcutMenuButton extends PureComponent {
   constructor(props) {
      super(props);

      this.state = { dialogOpen: false };

      const storage = window.localStorage;
      const chatShortcuts = storage.getItem("chatShortcuts");
      if (chatShortcuts === null) storage.setItem("chatShortcuts", false);
      else if (chatShortcuts === "true" && !props.chatShortcuts) this.props.switchChatShortcuts();
   }

   handleDialogOpen = () => {
      this.setState({ dialogOpen: true });
   };

   handleDialogClose = () => {
      this.setState({ dialogOpen: false });
   };

   render() {
      const { chatShortcuts } = this.props;
      const { dialogOpen } = this.state;

      const chat = chatShortcuts ? (
         <Fragment>
            <ChatShorcuts />
            <ul>
               <li><kbd>k</kbd> &mdash; send "OK" in chat</li>
               <li><kbd>n</kbd> &mdash; send "No" in chat</li>
               <li><kbd>?</kbd> &mdash; send "Response?" in chat</li>
            </ul>
         </Fragment>
      ) : (
         <ChatShorcuts />
      );

      return (
         <Fragment>
            <Button color="primary" fullWidth round onClick={this.handleDialogOpen}>
            <FaKeyboard />
            </Button>
            <Dialog
               open={dialogOpen}
               onClose={this.handleDialogClose}
               aria-labelledby="dialog-title"
               aria-describedby="alert-dialog-description"
               >
               <DialogTitle id="dialog-title">Keyboard Shortcuts</DialogTitle>
               <DialogContent id="alert-dialog-description">
                  <h4><strong>Duel</strong></h4>
                  <ul>
                     <li><kbd>↓</kbd>/<kbd>→</kbd> &mdash; go forward one Phase</li>
                     <li><kbd>↑</kbd>/<kbd>←</kbd> &mdash; go back one Phase</li>
                     <li><kbd>f</kbd> &mdash; declare effect of selected card</li>
                     <li><kbd>+</kbd>/<kbd>=</kbd> &mdash; increment selected card's counters</li>
                     <li><kbd>-</kbd>/<kbd>_</kbd> &mdash; decrement selected card's counters</li>
                     <li><kbd>d</kbd> &mdash; draw a card from the Deck</li>
                     <li><kbd>u</kbd> &mdash; undo the last draw</li>
                     <li><kbd>g</kbd> &mdash; move selected card to Graveyard</li>
                     <li><kbd>b</kbd> &mdash; move selected card to banished cards</li>
                     <li><kbd>m</kbd> &mdash; select next card in Monster Zone</li>
                     <li><kbd>M</kbd> &mdash; select previous card in Monster Zone</li>
                     <li><kbd>s</kbd>/<kbd>t</kbd> &mdash; select next card in Spell &amp; Trap Zone</li>
                     <li><kbd>S</kbd>/<kbd>T</kbd> &mdash; select previous card in Spell &amp; Trap Zone</li>
                     <li><kbd>0</kbd>-<kbd>9</kbd> &mdash; begin typing in the Life Points field</li>
                     <li><kbd>ESC</kbd> &mdash; exit out of search results</li>
                  </ul>
                  {chat}
                  <h4><strong>Deck</strong></h4>
                  <ul>
                     <li><kbd>m</kbd> &mdash; move card to Main Deck</li>
                     <li><kbd>s</kbd> &mdash; move card to Side Deck</li>
                     <li><kbd>d</kbd> &mdash; remove card frpm deck</li>
                     <li><kbd>ESC</kbd> &mdash; exit out of search results</li>
                  </ul>
               </DialogContent>
               <DialogActions>
                  <Button onClick={this.handleDialogClose} color="primary" autoFocus>
                     Close
                  </Button>
               </DialogActions>
            </Dialog>
         </Fragment>
      );
   }
}

function mapStateToProps(state) {
   return { chatShortcuts: state.settings.chatShortcuts };
}

export default connect(mapStateToProps, { switchChatShortcuts })(ShortcutMenuButton);
