import React from "react";

import TextToCard from "components/TextToCard/TextToCard.js";
import Info from "components/Info/Info.js";

export default function TextToCardDemo() {
   return (
      <div style={{ backgroundColor: "purple", width: "100vw", height: "100vh" }}>
         <TextToCard name="Thousand-Eyes Restrict" /> is the best fusion monster in the game.
      </div>
   );
}
