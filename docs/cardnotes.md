# Card Notes

This file contains notes regarding the monumental task of adding all Goat Format legal cards to Goat Duels. These cards all have not been added to the game yet.

## Basic

The following cards were labeled "basic" but are not.

- Ancient Telescope: We could just use a mill 5 script for this.
- D.D. Dynamite: This card has been added. However, we could prehaps consider more complicated prepopLP parameters to handle cases like these in the future (see ticket #225).
- Dark Designator: This will require very complex scripting (or perhaps just let villain view their entire deck).
- Fiend's Hand Mirror: It is possible that this card's PSCT may be incorrect, but this is not a big concern.
- Fruits of Kozaky's Studies: Requires script to look at top 3
- Gift of the Mystical Elf: See D.D. Dynamite notes.
- Graverobber: Already added, but its text not may be correct.
- Ray of Hope: Requires shuffle button (see ticket #227)
- Reckless Greed: Requires draw skip script
- Offerings to the Doomed: Requires draw skip script
- Reload: Requires shuffle button (see ticket #227)
- Restructer Revolution: See D.D. Dynamite notes
- Solar Ray: See D.D. Dynamite notes
- Spellbook Organization: Requires significant scripting
- The Spell Absorbing Life: See D.D. Dynamite notes

## Easy

Notes regarding cards labeled "easy".

- Balloon Lizard: See D.D. Dynamite.
- Cobra Jar: Will require its own token and script.
- Convulsion of Nature: This shit is far from "easy." Will require voodoo-level scripting.
- Maharaghi: Will require significant scripting
- Outstanding Dog Marron: Requires shuffle button (see ticket #227)
- Recycle: Requires some sort of bottom of the deck script.
- Good Goblin Housekeeping: also requires the bottom of the deck script
- Roc from the Valley of Haze: Requires shuffle button (see ticket #227)
- It is debatable (and almost entirely irrelevant) as to whether or not Tyler the Great Warrior is legal in Goat Format. It has not been added for now.
- White Magician Pikeru: See D.D. Dynamite.

## User Requested Cards

- Cyber Jar: Will require some sort of script to make this work.
- Vampire Lord: requires opponent to hava ability to generically look in deck
- Parasite Paracide: could just be implemented with a standard search and then the user manually placing back on deck?

### Optional / Convenience

- Wave-Motion Cannon: could track number of turns since activated in order to prepop life points
- Level Limit - Area B: can have some script to turn Level 4+ monsters to Defense by default
- Lava Golem: move opponents monsters to graveyard?
- Cipher Soldier: should this be named Kinetic Soldier? At minimum should have alias?
- Ceasefire: could possibly compute life points
- Just Desserts: could compute LP to burn
- Secret Barrel: could compute like with Just Desserts
- Des Koala: could compute burn by counting cards in opponent's hand
- Book of Life: optionally could have a SEARCH_GRAVEYARD with Zombie filter script
- Exodia: win script?
- Fiend Comedian: can have a custom script which handles the banishing (tedious to conditionally banish/mill cards)
