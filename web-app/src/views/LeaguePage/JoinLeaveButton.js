import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import Button from "components/CustomButtons/Button.js";

import { getAuthHeaders } from "utils/authToken.js";
import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import { API_URL, OFFICIAL_UNRANKED } from "utils/constants.js";

class JoinLeaveButton extends PureComponent {
   joinOrLeave = async () => {
      const config = { headers: getAuthHeaders() };

      const res = await axios.put(API_URL + getApiStage() + "/leagues?id=" + this.leagueId, config);
      console.log("button clicked");
   };

   render() {
      const { leave } = this.props;

      return (
         <Button color={leave ? "danger" : "success"} size="lg" round onClick={this.joinOrLeave}>
            {leave ? "Leave" : "Join"} League
         </Button>
      );
   }
}

JoinLeaveButton.propTypes = {
   leave: PropTypes.bool.isRequired
};

export default JoinLeaveButton;
