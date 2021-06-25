import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Button from "components/CustomButtons/Button.js";

import { getAuthHeaders } from "utils/authToken.js";
import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import { API_URL } from "utils/constants.js";

class JoinLeaveButton extends PureComponent {
   constructor(props) {
      super(props);
      const { pending, leave } = this.props;
      this.state = { pending, leave, errors: false };
   }

   joinOrLeave = async () => {
      const config = getAuthHeaders();
      const body = {};

      const res = await axios.put(API_URL + getApiStage() + "/leagues?id=" + this.props.leagueId, body, config);
      console.log(res);
   };

   render() {
      const { pending, leave } = this.state;

      return (
         <Button color={pending ? "warning" : leave ? "danger" : "success"} size="lg" round onClick={pending ? undefined : this.joinOrLeave}>
            {pending ? "Membership Pending Approval" : (leave ? "Leave" : "Join") + " League"}
         </Button>
      );
   }
}

JoinLeaveButton.propTypes = {
   leagueId: PropTypes.string.isRequired,
   pending: PropTypes.bool.isRequired,
   leave: PropTypes.bool.isRequired
};

export default JoinLeaveButton;
