import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Button from "components/CustomButtons/Button.js";

import { getAuthHeaders } from "utils/authToken.js";
import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import { API_URL, OFFICIAL_UNRANKED } from "utils/constants.js";

class JoinLeaveButton extends PureComponent {
   constructor(props) {
      super(props);
      const { pending, leave } = this.props;
      this.state = { pending, leave };
   }

   joinOrLeave = async () => {
      const config = { headers: getAuthHeaders() };

      const res = await axios.put(API_URL + getApiStage() + "/leagues?id=" + this.props.leagueId, config);
      console.log("button clicked");
   };

   render() {
      const { leave, pending } = this.state;

      if (pending)
         return (
            <Button color="warning" size="lg" round>
               Membership Pending Approval
            </Button>
         );
      else
         return (
            <Button color={leave ? "danger" : "success"} size="lg" round onClick={this.joinOrLeave}>
               {leave ? "Leave" : "Join"} League
            </Button>
         );
   }
}

JoinLeaveButton.propTypes = {
   leagueId: PropTypes.string.isRequired,
   pending: PropTypes.bool.isRequired,
   leave: PropTypes.bool.isRequired,
};

export default JoinLeaveButton;
