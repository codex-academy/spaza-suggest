# Smart Spaza

Create an app that help Spaza Shops to crowdsource client product demand.

## Spaza clients

* `registerUser(username)` - returns client code
* `userLogin(code)` - returns the user if it's a valid code
* `areas()` - return all areas
* `suggestProduct(areaId, userId)` - suggest a product 
* `productsForArea(areaId)` - products suggested for an area
* `suggestions(userId)` - show all the suggestions made by a user
* `upvote(suggestionId, userId)` - upvote a given suggesstion

## Spaza owners

* `registerSpaza(name, areaId)` - create the spaza shop and return a code
* `spazaLogin(code)` - return the spaza name & id  and areaId for the spaza shop
* `suggestionsForArea(areaId)` - show all the suggestions for a given area
* `acceptSuggestion(suggestionId, spazaId)`
* `acceptedSuggestions(spazaId)` - return all the accepted suggestions for the spazaId provided



