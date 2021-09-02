import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import Button from "./Button.js";

const DialogButton = React.forwardRef(
   ({ button, buttonProps, onConfirm, onDeny, dialogTitle, dialogContent, affirmative, affirmativeProps, negative, negativeProps }, ref) => {
      const [dialogOpen, setDialogOpen] = useState(false);

      const handleDialogOpen = () => {
         setDialogOpen(true);
      };

      const handleDialogAffirmativeClose = () => {
         setDialogOpen(false);
         if (onConfirm) onConfirm();
      };

      const handleDialogNegativeClose = () => {
         setDialogOpen(false);
         if (onDeny) onDeny();
      };

      const actions = negative ? (
         <DialogActions>
            <Button {...affirmativeProps} onClick={handleDialogAffirmativeClose}>
               {affirmative}
            </Button>
            <Button {...negativeProps} onClick={handleDialogNegativeClose} autoFocus>
               {negative}
            </Button>
         </DialogActions>
      ) : (
         <DialogActions>
            <Button {...affirmativeProps} onClick={handleDialogAffirmativeClose} autoFocus>
               {affirmative}
            </Button>
         </DialogActions>
      );

      return (
         <Fragment>
            <Button ref={ref} {...buttonProps} onClick={handleDialogOpen}>
               {button}
            </Button>
            <Dialog open={dialogOpen} onClose={handleDialogNegativeClose} aria-labelledby="dialog-title" aria-describedby="alert-dialog-description">
               <DialogTitle id="dialog-title">{dialogTitle}</DialogTitle>
               <DialogContent id="alert-dialog-description">{dialogContent}</DialogContent>
               {actions}
            </Dialog>
         </Fragment>
      );
   }
);

DialogButton.propTypes = {
   button: PropTypes.node.isRequired,
   buttonProps: PropTypes.object,
   onConfirm: PropTypes.func,
   onDeny: PropTypes.func,
   dialogTitle: PropTypes.node.isRequired,
   dialogContent: PropTypes.node.isRequired,
   affirmative: PropTypes.node.isRequired,
   affirmativeProps: PropTypes.object,
   negative: PropTypes.node,
   negativeProps: PropTypes.object
};

export default DialogButton;
