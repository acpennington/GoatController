import React from "react";

import YugiohCard from "components/YugiohCard/YugiohCard.js";

export default function ExampleYugiohCard() {
   return (
      <YugiohCard
         name="Black Luster Soldier - Envoy of the Beginning"
         cardType="effectMonster"
         attribute="Light"
         levelOrSubtype={8}
         width={100}
      />
   );
}
