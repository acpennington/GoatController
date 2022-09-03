import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

import { makeStyles } from "@mui/styles";
import styles from "assets/jss/material-kit-react/components/customInputStyle.js";
const useStyles = makeStyles(styles);

const CustomInput = React.forwardRef((props, ref) => {
   const classes = useStyles();
   const { formControlProps, labelText, id, labelProps, inputProps, error, white, inputRootCustomClasses, inputCustomClasses, success } = props;

   const labelClasses = classNames({
      [" " + classes.labelRootError]: error,
      [" " + classes.labelRootSuccess]: success && !error
   });
   const underlineClasses = classNames({
      [classes.underlineError]: error,
      [classes.underlineSuccess]: success && !error,
      [classes.underline]: !white,
      [classes.whiteUnderline]: white
   });
   const marginTop = classNames({
      [inputRootCustomClasses]: inputRootCustomClasses !== undefined
   });
   const inputClasses = classNames({
      [classes.input]: true,
      [classes.whiteInput]: white,
      [inputCustomClasses]: inputCustomClasses !== undefined
   });
   var formControlClasses;
   if (formControlProps !== undefined) {
      formControlClasses = classNames(formControlProps.className, classes.formControl);
   } else {
      formControlClasses = classes.formControl;
   }
   return (
      <FormControl {...formControlProps} className={formControlClasses}>
         {labelText !== undefined ? (
            <InputLabel className={classes.labelRoot + " " + labelClasses} htmlFor={id} {...labelProps}>
               {labelText}
            </InputLabel>
         ) : null}
         <Input
            inputRef={ref}
            classes={{
               input: inputClasses,
               root: marginTop,
               disabled: classes.disabled,
               underline: underlineClasses
            }}
            id={id}
            {...inputProps}
         />
      </FormControl>
   );
});

CustomInput.propTypes = {
   labelText: PropTypes.node,
   labelProps: PropTypes.object,
   id: PropTypes.string,
   inputProps: PropTypes.object,
   formControlProps: PropTypes.object,
   inputRootCustomClasses: PropTypes.string,
   inputCustomClasses: PropTypes.string,
   error: PropTypes.bool,
   success: PropTypes.bool,
   white: PropTypes.bool
};

CustomInput.displayName = "CustomInput";

export default CustomInput;
