import React from "react";
import PropTypes from "prop-types";
import { Tooltip, StyledEngineProvider } from "@mui/material";

const PatchTooltip = ({ children, ...props }) => {
   return (
      <StyledEngineProvider injectFirst>
         <Tooltip {...props}>
            <span>{children}</span>
         </Tooltip>
      </StyledEngineProvider>
   );
};

PatchTooltip.propTypes = {
   children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]).isRequired
};

export default PatchTooltip;
