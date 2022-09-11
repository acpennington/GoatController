# Card Notes

This file contains notes regarding the monumental task of adding all Goat Format legal cards to Goat Duels. These cards all have not been added to the game yet.

## Notes

-  Cipher Soldier: should this be named Kinetic Soldier? At minimum should have alias?
-  Fiend's Hand Mirror: It is possible that this card's PSCT may be incorrect, but this is not a big concern.
-  Graverobber: Already added, but its text not may be correct.
-  It is debatable (and almost entirely irrelevant) as to whether or not Tyler the Great Warrior is legal in Goat Format. It has not been added for now.
-  Prohibition: Probably worked differently in Goat Format than it does in current format. We should perhaps research this and further clarify its text.

## Required

-  Ancient Telescope: We could just use a mill 5 script for this (pre: seems like this would be wrong as it would reveal them to the opponent?)
-  Big Eye: similar logic required as with Ancient Telescope?
-  Chain Destruction, Chain Disappearance, Spell Vanishing: These should use some kind of banish all script similar to Nobleman.
-  Convulsion of Nature: This shit is far from "easy." Will require voodoo-level scripting.
-  Crimson Sentry: needs a bottom of deck script (see ticket #245)
-  Dark Sage: This card is currently impossible to search/summon. Need to figure out how we're going to do this.
-  Dark Scorpion Chick the Yellow: requires some sort of bottom of deck script + other weird stuff
-  Darkness Approaches: need ability to turn to face down Attack Position when this card is on the field :(
-  Different Dimension Capsule: face down banishing script
-  Drop Off: need a script to ensure the card discarded is the card that was just drawn
-  Exchange/Amazoness Chain Master: God only knows how we're going to make this work.
-  Freed the Matchless General: need to be able to turn off auto draw...
-  Fruits of Kozaky's Studies: Requires script to look at top 3
-  Gamble: ditto, need ability to turn off auto draw when skipping turn
-  Grave Lure: Convulsion/Parasite Paracide-esque
-  Lightforce Sword: similar to Different Dimension Capsule
-  Maharaghi: Will require significant scripting
-  Parasite Paracide: requires complex scripting.
-  Pharaoh's Treasure: Needs to be shuffled face up into the deck
-  Question: Need to be able to disable looking in the graveyard somehow (alternatively - log when looking in the Graveyard/Banished zone always)
-  Recycle: Requires some sort of bottom of the deck script (see ticket #245)
-  Senri Eye: Look at card on opponent's deck without them seeing.
-  Spellbook Organization: Requires significant scripting
-  Yado Karu: needs a bottom of deck script (see ticket #245)

### Optional / Convenience

-  Big Burn: could use a Banish All script to simplify removing everything from the graveyard
-  Cyber Jar: Could use a more detailed script. (see ticket #247)
-  Exodia: fancy win script? (user can technically just reveal hand)
-  Fiend Comedian: can have a custom script which handles the banishing (tedious to conditionally banish/mill cards)
