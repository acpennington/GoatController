import React, { useState } from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

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

import { headers } from "utils/constants.js";
import setAuthToken from "utils/setAuthToken.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
const useStyles = makeStyles(styles);

export default function LoginPage(props) {
   const [isLogin, setIsLogin] = useState(true);
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

   const submit = async () => {
      const user = { username, password };
      const config = { headers };
      const body = JSON.stringify(user);

      try {
         setErrors("Authenticating...");

         const res = await axios.post("/api/" + (isLogin ? "auth" : "users"), body, config);
         const data = res.data;
         setAuthToken(data.token);

         window.location.href = isLogin ? "/wall" : "/settings";
      } catch (err) {
         const apiErrors = err.response.data.errors;
         let errorString = "";

         for (const error of apiErrors) errorString += error.msg + ". ";

         errorString = errorString.slice(0, -1);
         setErrors(errorString);
      }
   };

   const enterToSubmit = (event) => {
      if (event.key === "Enter") submit();
   };

   setTimeout(function () {
      setCardAnimation("");
   }, 700);

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
         <div
            className={classes.pageHeader}
            style={{
               backgroundImage: 'url("/backgrounds/thousandeyes.png")',
               backgroundSize: "cover",
               backgroundPosition: "center"
            }}
         >
            <div className={classes.container}>
               <GridContainer justify="center">
                  <GridItem xs={12} sm={8} md={4}>
                     <Card className={classes[cardAnimation]} style={{ backgroundColor: "rgba(255,255,255,0.92)" }}>
                        <form className={classes.form}>
                           <CardHeader color="primary" className={classes.cardHeader}>
                              <h4>{headerText}</h4>
                           </CardHeader>
                           <p
                              className={classes.divider}
                              style={{ color: errors && (errors === "Authenticating..." ? "green" : "red") }}
                           >
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
