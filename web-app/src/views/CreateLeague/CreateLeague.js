import React, { PureComponent } from "react";

import Button from "components/CustomButtons/Button.js";
import BackButton from "components/CustomButtons/BackButton.js";
import PageTemplate from "components/Header/PageTemplate.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { FaSave } from "react-icons/fa";

class CreateLeague extends PureComponent {
   render() {
      return (
         <PageTemplate>
            <GridContainer justify="center">
               <GridItem xs={12}></GridItem>
               <GridItem xs={12}>
                  <div style={{ textAlign: "center", marginTop: "20px" }}>
                     <BackButton href="leagues" />
                     <Button color={"primary"} size="lg" round>
                        <FaSave /> Save and Create
                     </Button>
                  </div>
               </GridItem>
            </GridContainer>
         </PageTemplate>
      );
   }
}

export default CreateLeague;
