# users
* username: string (primary key)
* activeDeck: string
* decks: map {
  * deckname1: map {
    * decktype: string
    * maindeck: list of strings*
    * sidedeck: list of strings*
    * visibility: string
    * wins: number
    * losses: number }
  * deckname2: {}
  * etc }
* goatGold: number
* hashword: string
* leagues: set of strings
* settings: map {
  * gamebg: string
  * sleeves: string
  * email: string
  * discord: string }
* verified: boolean

*to be changed later to list of objects, see ticket #147

# leagues
* id: string (primary key)
* name: string
* description: string
* goatGold: number
* logo: string
* matchmaking: list of objects or map (structure depends on useQueue)*
* allowExarion: boolean
* allowMultis: boolean
* autoApprove: boolean
* useQueue: boolean
* useRatings: boolean
* discord: string
* twitch: string
* creationDate: string (of the form YYYY-MM-DD)
* paidUntil: string (of the form YYYY-MM-DD)
* center: number
* kvalue: number
* decay: number
* newPlayerBonus: boolean
* members: map {
  * user1: map {
    * role: string
    * ips: list of strings
    * lastPlayed: string (only if useQueue == true)
    * losses: number (only if useRatings == true)
    * wins: number (only if useRatings == true)
    * rating: number (only if useRatings == true) }
  * user2: {}
  * etc }


*since leagues using the host/join system have not been implemented yet, there is still some stuff to figure out here

# matches
placeholder, coming soon