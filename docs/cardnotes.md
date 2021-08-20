# Card Notes

This file contains notes regarding the monumental task of adding all Goat Format legal cards to Goat Duels. These cards all have not been added to the game yet.

## Basic

The following cards were labeled "basic" but are not.

- Ancient Telescope: We could just use a mill 5 script for this (pre: seems like this would be wrong as it would reveal them to the opponent?)
- D.D. Dynamite: This card has been added. However, we could prehaps consider more complicated prepopLP parameters to handle cases like these in the future (see ticket #225).
- Dark Designator: This will require very complex scripting (or perhaps just let villain view their entire deck). (see ticket #254)
- Fiend's Hand Mirror: It is possible that this card's PSCT may be incorrect, but this is not a big concern.
- Fruits of Kozaky's Studies: Requires script to look at top 3
- Gift of the Mystical Elf: complex prepopLP (see ticket #225).
- Graverobber: Already added, but its text not may be correct.
- Ray of Hope: Requires shuffle button (see ticket #227)
- Reckless Greed: Requires draw skip script (see ticket #244)
- Offerings to the Doomed: Requires draw skip script (see ticket #244)
- Time Seal: Requires draw skip script (see ticket #244)
- Reload: Requires shuffle button (see ticket #227)
- Restructer complex prepopLP (see ticket #225).
- Solar Ray: complex prepopLP (see ticket #225).
- Spellbook Organization: Requires significant scripting
- The Spell Absorbing Life: complex prepopLP (see ticket #225).

## Easy

Notes regarding cards labeled "easy".

- Balloon Lizard: complex prepopLP (see ticket #225).
- Convulsion of Nature: This shit is far from "easy." Will require voodoo-level scripting.
- Maharaghi: Will require significant scripting
- Outstanding Dog Marron: Requires shuffle button (see ticket #227)
- Recycle: Requires some sort of bottom of the deck script (see ticket #245)
- Good Goblin Housekeeping: also requires the bottom of the deck script (see ticket #245)
- Roc from the Valley of Haze: Requires shuffle button (see ticket #227)
- It is debatable (and almost entirely irrelevant) as to whether or not Tyler the Great Warrior is legal in Goat Format. It has not been added for now.
- White Magician Pikeru: complex prepopLP (see ticket #225).

## User Requested Cards

- Cyber Jar: Will require some sort of script to make this work. (see ticket #247)
- Morphing Jar #2: needs some sort of script. (see ticket #248)
- Vampire Lord: requires opponent to have ability to generically look in deck (see ticket #254)
- Parasite Paracide: requires complex scripting.
- Manju of the Ten Thousand Hands: need to be able to search for EITHER a Ritual Spell or a Ritual Monster (seeticket #253)

### Optional / Convenience

- Wave-Motion Cannon: could track number of turns since activated for complex prepopLP (see ticket #225).
- Cipher Soldier: should this be named Kinetic Soldier? At minimum should have alias?
- Ceasefire: complex prepopLP (see ticket #225).
- Just Desserts: complex prepopLP (see ticket #225).
- Secret Barrel: complex prepopLP (see ticket #225).
- Des Koala: complex prepopLP (see ticket #225).
- Exodia: fancy win script? (user can technically just reveal hand)
- Fiend Comedian: can have a custom script which handles the banishing (tedious to conditionally banish/mill cards)
- Reasoning/Monster Gate: convenience script to MILL_UNTIL does not contain "Cannot be Normal Summoned/Set." leave result in grave and let user decide if was successful. Need to avoid milling if no legal summons left (see PR #243).
- Reversal Quiz - helper to send everything to graveyard? Optional script to swap LP?
