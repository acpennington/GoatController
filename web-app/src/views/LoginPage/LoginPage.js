import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import People from "@material-ui/icons/People";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import setBodyImage from "utils/setBodyImage.js";
import { API_URL, headers } from "utils/constants.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/loginPage.js";
const useStyles = makeStyles(styles);

const objects = ["settings", "decks"];
const PROD = true;

export default function LoginPage(props) {
   const query = decodeQuery();
   const [isLogin, setIsLogin] = useState(!query);
   const [cardAnimation, setCardAnimation] = useState("cardHidden");
   const [errors, setErrors] = useState(false);
   const [username, setUsername] = useState("");
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
         const res = await axios.post(API_URL + (PROD ? "prod" : "dev") + "/users" + (isLogin ? "/auth" : ""), body, config);
         if (res.data.statusCode === 200) {
            const data = res.data.body;
            const storage = window.sessionStorage;

            for (const item in data) {
               if (objects.includes(item)) storage.setItem(item, JSON.stringify(data[item]));
               else storage.setItem(item, data[item]);
            }

            window.location.href = isLogin ? "/wall" : "/settings";
         } else {
            const apiErrors = res.data.body.errors;
            let errorString = "";

            for (const error of apiErrors) errorString += error.msg + ". ";

            errorString = errorString.slice(0, -1);
            setErrors(errorString);
         }
      }
   };

   const enterToSubmit = (event) => {
      if (event.key === "Enter") submit();
   };

   setTimeout(function () {
      setCardAnimation("");
   }, 700);

   useEffect(() => {
      setBodyImage();
   }, []);

   const classes = useStyles();
   const { ...rest } = props;
   const headerText = isLogin ? "Login" : "Register";

   return (
      <div>
         <Header
            absolute
            color="transparent"
            brand="Goat Duels: A Dueling Simulator Optimized For Goat Format"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
               height: 100,
               color: "semitransparent"
            }}
            {...rest}
         />
         <div className={classes.pageHeader}>
            <div className={classes.container}>
               <GridContainer justify="center">
                  <GridItem xs={12} sm={8} md={4}>
                     <Card className={classes[cardAnimation]} style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                        <form className={classes.form}>
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
                                 formControlProps={{
                                    fullWidth: true
                                 }}
                                 inputProps={{
                                    onChange: usernameEvent,
                                    onKeyPress: enterToSubmit,
                                    type: "text",
                                    endAdornment: (
                                       <InputAdornment position="end">
                                          <People className={classes.inputIconsColor} />
                                       </InputAdornment>
                                    )
                                 }}
                              />
                              <CustomInput
                                 labelText="Password"
                                 id="pass"
                                 formControlProps={{
                                    fullWidth: true
                                 }}
                                 inputProps={{
                                    onChange: passwordEvent,
                                    onKeyPress: enterToSubmit,
                                    type: "password",
                                    endAdornment: (
                                       <InputAdornment position="end">
                                          <Icon className={classes.inputIconsColor}>lock_outline</Icon>
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
                                       formControlProps={{
                                          fullWidth: true
                                       }}
                                       inputProps={{
                                          onChange: passwordTwoEvent,
                                          onKeyPress: enterToSubmit,
                                          type: "password",
                                          endAdornment: (
                                             <InputAdornment position="end">
                                                <Icon className={classes.inputIconsColor}>lock_outline</Icon>
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
                                                <RecordVoiceOver className={classes.inputIconsColor} />
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
                              <Button simple color="primary" size="lg" onClick={() => setIsLogin(!isLogin)}>
                                 {isLogin ? "Register" : "Login"}
                              </Button>
                           </CardFooter>
                        </form>
                     </Card>
                  </GridItem>
               </GridContainer>
            </div>
            <Footer whiteFont />
         </div>
      </div>
   );
}

function decodeQuery() {
   const urlString = window.location.href;
   const swappedString = urlString.replace(/_/g, " ");
   const trimmedString = swappedString.split("?")[1];
   if (trimmedString) {
      const [queryName, queryParam] = trimmedString.split("=");
      if (queryName === "ref") return queryParam.replace(/_/g, " ");
   }

   return "";
}
