# Card Notes

This file contains notes regarding the monumental task of adding all Goat Format legal cards to Goat Duels. These cards all have not been added to the game yet.

## Notes

-  Fiend's Hand Mirror: It is possible that this card's PSCT may be incorrect, but this is not a big concern.
-  Graverobber: Already added, but its text not may be correct.
-  It is debatable (and almost entirely irrelevant) as to whether or not Tyler the Great Warrior is legal in Goat Format. It has not been added for now.
-  Cipher Soldier: should this be named Kinetic Soldier? At minimum should have alias?
-  Prohibition: Probably worked differently in Goat Format than it does in current format. We should perhaps research this and further clarify its text.

## Required

-  Ancient Telescope: We could just use a mill 5 script for this (pre: seems like this would be wrong as it would reveal them to the opponent?)
-  Big Eye: similar logic required as with Ancient Telescope?
-  Fruits of Kozaky's Studies: Requires script to look at top 3
-  Ray of Hope: Requires shuffle button (see ticket #227)
-  Reckless Greed: Requires draw skip script (see ticket #244)
-  Offerings to the Doomed: Requires draw skip script (see ticket #244)
-  Time Seal: Requires draw skip script (see ticket #244)
-  Reload: Requires shuffle button (see ticket #227)
-  Spellbook Organization: Requires significant scripting
-  Convulsion of Nature: This shit is far from "easy." Will require voodoo-level scripting.
-  Maharaghi: Will require significant scripting
-  Outstanding Dog Marron: Requires shuffle button (see ticket #227)
-  Recycle: Requires some sort of bottom of the deck script (see ticket #245)
-  Good Goblin Housekeeping: also requires the bottom of the deck script (see ticket #245)
-  Roc from the Valley of Haze: Requires shuffle button (see ticket #227)
-  Cyber Jar: Will require some sort of script to make this work. (see ticket #247)
-  Morphing Jar #2: needs some sort of script. (see ticket #248)
-  Parasite Paracide: requires complex scripting.
-  Dark Scorpion Chick the Yellow: requires some sort of bottom of deck script (see ticket #245)
-  Exchange/Amazoness Chain Master: God only knows how we're going to make this work.
-  Chain Destruction: can maybe just use Search Deck and count on player being honest, but really this is more similar to a one-sided Nobleman-type script
-  Chain Disappearance: similarly, though is closer to a more powerful one sided BANISH_ALL given it also covers the hand
-  Chosen One: sadly random discard doesn't not work here - scripting is going to be annoying
-  Coach Goblin: needs a bottom of deck script (see ticket #245)
-  Crimson Sentry: needs a bottom of deck script (see ticket #245)
-  Darkness Approaches: need ability to turn to face down Attack Position when this card is on the field :(
-  Different Dimension Capsule: face down banishing script
-  Lightforce Sword: similar to Different Dimension Capsule
-  Drop Off: need a script to ensure the card discarded is the card that was just drawn
-  Freed the Matchless General: need to be able to turn off auto draw...
-  Gamble: ditto, need ability to turn off auto draw when skipping turn
-  Grave Lure: Convulsion/Parasite Paracide-esque

### Optional / Convenience

-  D.D. Dynamite: This card has been added. However, we could prehaps consider more complicated prepopLP parameters to handle cases like these in the future (see ticket #225).
-  Wave-Motion Cannon: could track number of turns since activated for complex prepopLP (see ticket #225).
-  Ceasefire: complex prepopLP (see ticket #225).
-  Just Desserts: complex prepopLP (see ticket #225).
-  Secret Barrel: complex prepopLP (see ticket #225).
-  Des Koala: complex prepopLP (see ticket #225).
-  Restructer complex prepopLP (see ticket #225).
-  Solar Ray: complex prepopLP (see ticket #225).
-  The Spell Absorbing Life: complex prepopLP (see ticket #225).
-  Balloon Lizard: complex prepopLP (see ticket #225).
-  White Magician Pikeru: complex prepopLP (see ticket #225).
-  Gift of the Mystical Elf: complex prepopLP (see ticket #225).
-  Exodia: fancy win script? (user can technically just reveal hand)
-  Fiend Comedian: can have a custom script which handles the banishing (tedious to conditionally banish/mill cards)
-  Reversal Quiz: helper to send everything to graveyard? Optional script to swap LP?
-  Attack and Receive: could technically have a fancy complex prepopLP (see ticket #225) that counts "Attack and Receive" cards in the grave.
-  Big Burn: could use a Banish All script to simplify removing everything from the graveyard
-  Cemetary Bomb: complex prepopLP (see ticket #225).
-  Dark Snake Syndrome: can probably use a counter based complex prepopLP (see ticket #225).
-  Disturbance Strategy: possibly could use a helper script
-  Fire Sorceror/Fuh-Rin-Ka-Zan: add a parameter to RANDOM_DISCARD to allow it to discard 2 cards
-  Heavy Slump: needing to shuffle 8+ cards back into your deck is kind of obnoxious