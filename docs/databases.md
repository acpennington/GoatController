# users
username: string (primary key)<br/>
activeDeck: string<br/>
decks: map<br/>
    {<br/>
        deckname1: {<br/>
            decktype: string,<br/>
            maindeck: list of strings*,<br/>
            sidedeck: list of strings*,<br/>
            visibility: string,<br/>
            wins: number,<br/>
            losses: number<br/>
        },<br/>
        deckname2: {},<br/>
        etc<br/>
    }<br/>
goatGold: number<br/>
hashword: string<br/>
leagues: set of strings<br/>
settings: map<br/>
    {<br/>
        gamebg: string,<br/>
        sleeves: string,<br/>
        email: string,<br/>
        discord: string<br/>
    }<br/>
verified: boolean

*to be changed later to list of objects, see ticket #147

# leagues
placeholder, coming soon

# matches
placeholder, coming soon