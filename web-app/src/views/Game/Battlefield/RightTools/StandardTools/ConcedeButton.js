import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Button from "components/CustomButtons/Button.js";
import { WebSocketContext } from "views/Game/WebSocketContext";
import { PLAYER_CONCEDED, CLEANUP_GAME } from "shared/constants.js";

class ConcedeButton extends PureComponent {
   constructor(props) {
      super(props);
      this.state = { dialogOpen: false };
   }

   handleDialogOpen = () => {
      this.setState({ dialogOpen: true });
   };

   handleDialogClose = (ok) => {
      this.setState({ dialogOpen: false });
      if (ok) concedeGame(this.context);
   };

   render() {
      const { concessionLink } = this.props;
      const { dialogOpen } = this.state;
      const color = concessionLink ? "primary" : "rose";
      const func = concessionLink ? () => quitGame(this.context) : this.handleDialogOpen;

      return (
         <Fragment>
            <Button color={color} round href={concessionLink ? concessionLink : undefined} onClick={func} style={{ marginBottom: "15px" }}>
               {concessionLink ? "Quit" : "Concede Duel"}
            </Button>
            <Dialog
               open={dialogOpen}
               onClose={this.handleDialogClose}
               aria-labelledby="alert-dialog-title"
               aria-describedby="alert-dialog-description"
               >
               <DialogTitle id="alert-dialog-title">Concede Duel</DialogTitle>
               <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                     Are you sure you wish to concede?
                  </DialogContentText>
               </DialogContent>
               <DialogActions>
                  <Button onClick={() => this.handleDialogClose(true)} color="primary">
                     Yes
                  </Button>
                  <Button onClick={() => this.handleDialogClose(false)} color="primary" autoFocus>
                     No
                  </Button>
               </DialogActions>
            </Dialog>
         </Fragment>
      );
   }
}

function concedeGame(socket) {
   if (socket && socket.api) {
      const payload = { action: PLAYER_CONCEDED, data: { token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }
}

function quitGame(socket) {
   window.sessionStorage.removeItem("activeMatch");

   if (socket && socket.api) {
      const payload = { action: CLEANUP_GAME, data: { token: socket.token, id: socket.matchId } };
      socket.api.send(JSON.stringify(payload));
   }
}

function mapStateToProps(state) {
   return { concessionLink: state.settings.concessionLink };
}

ConcedeButton.contextType = WebSocketContext;

export default connect(mapStateToProps)(ConcedeButton);
