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
      this.state = { errors: false };
   }

   joinOrLeave = async () => {
      const { leagueId, leagues, update } = this.props;
      const config = getAuthHeaders();
      const body = {};

      const res = await axios.put(API_URL + getApiStage() + "/leagues?id=" + leagueId, body, config);
      if (res.data.statusCode === 200) {
         const role = res.data.body.role;
         const storage = window.sessionStorage;

         if (role === "left") leagues.splice(leagues.indexOf(leagueId), 1);
         else leagues.push(leagueId);

         storage.setItem("leagues", JSON.stringify(leagues));
         update();
      } else this.setState({ errors: "Error: " + apiErrors(res.data.body.errors) });
   };

   render() {
      const { pending, leave } = this.props;
      const { errors } = this.state;

      if (errors) return <span style={{ color: "red" }}>{errors}</span>;
      else
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
   leave: PropTypes.bool.isRequired,
   leagues: PropTypes.array.isRequired,
   update: PropTypes.func.isRequired
};

export default JoinLeaveButton;
