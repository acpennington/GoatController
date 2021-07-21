# users
username: string (primary key)
activeDeck: string
decks: map
    {
        deckname1: {
            decktype: string,
            maindeck: list of strings*,
            sidedeck: list of strings*,
            visibility: string,
            wins: number,
            losses: number
        },
        deckname2: {},
        etc
    }
goatGold: number
hashword: string
leagues: set of strings
settings: map
    {
        gamebg: string,
        sleeves: string,
        email: string,
        discord: string
    }
verified: boolean

*to be changed later to list of objects, see ticket #147

# leagues
placeholder, coming soon

# matches
placeholder, coming soon