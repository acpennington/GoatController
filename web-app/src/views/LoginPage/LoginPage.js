import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
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

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
   const [isLogin, setIsLogin] = useState(true);
   const [cardAnimation, setCardAnimation] = useState("cardHidden");

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
                           <p className={classes.divider}>Goat Duels Await You...</p>
                           <CardBody>
                              {!isLogin && (
                                 <CustomInput
                                    labelText="Username"
                                    id="username"
                                    formControlProps={{
                                       fullWidth: true
                                    }}
                                    inputProps={{
                                       type: "text",
                                       endAdornment: (
                                          <InputAdornment position="end">
                                             <People className={classes.inputIconsColor} />
                                          </InputAdornment>
                                       )
                                    }}
                                 />
                              )}
                              <CustomInput
                                 labelText="Email"
                                 id="email"
                                 formControlProps={{
                                    fullWidth: true
                                 }}
                                 inputProps={{
                                    type: "email",
                                    endAdornment: (
                                       <InputAdornment position="end">
                                          <Email className={classes.inputIconsColor} />
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
                              <Button simple color="primary" size="lg">
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
