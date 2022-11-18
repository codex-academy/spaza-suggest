# Smart Spaza

Create an app that help Spaza Shops to crowdsource which products to sell in their shops.

Create a web app that allows spaza shop clients to suggest which products spaza shops in a selected area should sell. 

Each Spaza shops is linked to one area. Spaza shops can see the suggested products for their area and then accept product suggestions.

## Screens to build

Ensure your web app with screens for the following:

* A new user can register and get the login code
* A user can login using their login code
* A logged in user can make product suggestions for a selected region. They can select the region to add a suggestion for. A blank suggestion should not be allowed.

* A Spaza shop owner can create an account linked to one region and get a login code.
* Login using the spaza shop code and display all the suggestions for the region of the spaza shop
* Allow a spaza shop user to accept any of the suggestions made.
* Show all the accepted suggestions for the logged in spaza shop

> **Tip:** store the logged in `client` or `spazashop` details in the session for easy access.

## Use the supplied Factory Function

Use the supplied factory function in `spaza-suggest.js`.

Setup a database called `spaza_suggest` use the script in `001.db.sql` or do your own database setup.


Be sure to run `002.tables.sql` and `003.areas.sql` - before runing the tests.

Run these commands to install all dependencies & to run the tests

```
npm install
npm test
```

All the tests should pass if you ran the db script correctly.

Don't start with the web app before your tests are passing locally.

Create an `index.js` for your ExpressJS web app.

## Factory function methods to use

Use the supplied factory function to build the screens above.

### Spaza client methods

* `registerUser(username)` - returns client code
* `userLogin(code)` - returns the user if it's a valid code
* `areas()` - return all areas
* `suggestProduct(areaId, userId)` - suggest a product 
* `productsForArea(areaId)` - products suggested for an area
* `suggestions(userId)` - show all the suggestions made by a user
* `upvote(suggestionId, userId)` - upvote a given suggesstion

### Spaza owner methods

* `registerSpaza(name, areaId)` - create the spaza shop and return a code
* `spazaLogin(code)` - return the spaza name & id  and areaId for the spaza shop
* `suggestionsForArea(areaId)` - show all the suggestions for a given area
* `acceptSuggestion(suggestionId, spazaId)`
* `acceptedSuggestions(spazaId)` - return all the accepted suggestions for the spazaId provided



