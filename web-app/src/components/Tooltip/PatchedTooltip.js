import React from "react";
import PropTypes from "prop-types";
import { Tooltip, StyledEngineProvider } from "@mui/material";

const PatchTooltip = ({ children, ...props }) => {
   return (
      <StyledEngineProvider injectFirst>
         <Tooltip
            {...props}
            sx={{
               padding: "10px 10px",
               minWidth: "130px",
               color: "#555555",
               lineHeight: "1.7em",
               background: "#FFFFFF",
               border: "none",
               borderRadius: "3px",
               boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
               maxWidth: "200px",
               textAlign: "center",
               fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
               fontSize: "0.875em",
               fontStyle: "normal",
               fontWeight: "400",
               textShadow: "none",
               textTransform: "none",
               letterSpacing: "normal",
               wordBreak: "normal",
               wordSpacing: "normal",
               wordWrap: "normal",
               whiteSpace: "normal",
               lineBreak: "auto"
            }}
         >
            <span>{children}</span>
         </Tooltip>
      </StyledEngineProvider>
   );
};

PatchTooltip.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
};

export default PatchTooltip;
