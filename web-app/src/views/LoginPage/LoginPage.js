import React, { useState, Fragment } from "react";
import axios from "axios";

import InputAdornment from "@mui/material/InputAdornment";
import { MdPeople, MdLockOutline, MdRecordVoiceOver } from "react-icons/md";

import PageTemplate from "components/Header/PageTemplate.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CardForm from "components/Card/CardForm.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import apiErrors from "utils/apiErrors.js";
import getApiStage from "utils/getApiStage.js";
import getQueryParams from "utils/getQueryParams.js";
import { API_URL, headers } from "shared/constants.js";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
const useStyles = makeStyles(styles);

const objects = ["settings", "decks", "leagues"];

export default function LoginPage() {
   const query = getQueryParams().ref;
   const [isLogin, setIsLogin] = useState(!query);
   const [cardAnimation, setCardAnimation] = useState("cardHidden");
   const [errors, setErrors] = useState(false);
   const [username, setUsername] = useState(window.localStorage.getItem("username") || "");
   const usernameEvent = (event) => {
      setUsername(event.target.value);
   };
   const [password, setPassword] = useState("");
   const passwordEvent = (event) => {
      setPassword(event.target.value);
   };
   const [passwordTwo, setPasswordTwo] = useState("");
   const passwordTwoEvent = (event) => {
      setPasswordTwo(event.target.value);
   };
   const [referredby, setReferredby] = useState(query);
   const referredbyEvent = (event) => {
      setReferredby(event.target.value);
   };

   const submit = async () => {
      if (!isLogin && password !== passwordTwo) setErrors("Passwords do not match.");
      else {
         const user = isLogin ? { username, password } : { username, password, referredby };
         const config = { headers };
         const body = JSON.stringify(user);

         setErrors("Authenticating...");
         const res = await axios.post(API_URL + getApiStage() + "/users" + (isLogin ? "/auth" : ""), body, config);
         if (res.data.statusCode === 200) {
            const data = res.data.body;
            const storage = window.sessionStorage;
            const local = window.localStorage;

            for (const item in data) {
               if (item === "username") local.setItem("username", data[item]);
               if (item === "settings") local.setItem("gamebg", data[item].gamebg);

               if (objects.includes(item)) storage.setItem(item, JSON.stringify(data[item]));
               else storage.setItem(item, data[item]);
            }

            window.location.href = isLogin ? "/wall" : "/settings";
         } else setErrors(apiErrors(res.data.body.errors));
      }
   };

   const enterToSubmit = (event) => {
      if (event.key === "Enter") submit();
   };

   setTimeout(function () {
      setCardAnimation("");
   }, 700);

   const classes = useStyles();
   const headerText = isLogin ? "Login" : "Register";

   return (
      <PageTemplate noToken gap addFooter>
         <GridContainer justifyContent="center" alignItems="center">
            <GridItem xs={12} sm={8} md={4}>
               <CardForm classes={classes} className={classes[cardAnimation]} style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                     <h4>{headerText}</h4>
                  </CardHeader>
                  <p className={classes.divider} style={{ color: errors && (errors === "Authenticating..." ? "green" : "red") }}>
                     {errors ? errors : "Goat Duels Await You..."}
                  </p>
                  <CardBody>
                     <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                           defaultValue: username,
                           onChange: usernameEvent,
                           onKeyPress: enterToSubmit,
                           type: "text",
                           endAdornment: (
                              <InputAdornment position="end">
                                 <MdPeople className={classes.inputIconsColor} />
                              </InputAdornment>
                           )
                        }}
                     />
                     <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{ fullWidth: true }}
                        inputProps={{
                           onChange: passwordEvent,
                           onKeyPress: enterToSubmit,
                           type: "password",
                           endAdornment: (
                              <InputAdornment position="end">
                                 <MdLockOutline className={classes.inputIconsColor} />
                              </InputAdornment>
                           ),
                           autoComplete: "off"
                        }}
                     />
                     {!isLogin && (
                        <Fragment>
                           <CustomInput
                              labelText="Re-type Password"
                              id="pass2"
                              formControlProps={{ fullWidth: true }}
                              inputProps={{
                                 onChange: passwordTwoEvent,
                                 onKeyPress: enterToSubmit,
                                 type: "password",
                                 endAdornment: (
                                    <InputAdornment position="end">
                                       <MdLockOutline className={classes.inputIconsColor} />
                                    </InputAdornment>
                                 ),
                                 autoComplete: "off"
                              }}
                           />
                           <CustomInput
                              labelText="Referred by"
                              id="referredby"
                              formControlProps={{
                                 fullWidth: true
                              }}
                              inputProps={{
                                 defaultValue: query,
                                 onChange: referredbyEvent,
                                 onKeyPress: enterToSubmit,
                                 type: "text",
                                 endAdornment: (
                                    <InputAdornment position="end">
                                       <MdRecordVoiceOver className={classes.inputIconsColor} />
                                    </InputAdornment>
                                 ),
                                 autoComplete: "off"
                              }}
                           />
                        </Fragment>
                     )}
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                     <Button simple color="primary" size="lg" onClick={submit}>
                        {headerText}
                     </Button>
                     {isLogin && (
                        <Button simple color="primary" size="lg">
                           Forgot Password?
                        </Button>
                     )}
                  </CardFooter>
                  <hr />
                  <CardFooter className={classes.cardFooter}>
                     {isLogin ? "Need an account?" : "Did you mean to login?"}
                     <Button
                        simple
                        color="primary"
                        size="lg"
                        onClick={() => {
                           if (getApiStage() === "dev") setIsLogin(!isLogin);
                           else window.location.href = "/beta";
                        }}
                     >
                        {isLogin ? "Register" : "Login"}
                     </Button>
                  </CardFooter>
               </CardForm>
            </GridItem>
         </GridContainer>
      </PageTemplate>
   );
}
