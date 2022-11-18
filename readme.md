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

Create a PostgreSQL database called `spaza_suggest` use the script in `001.db.sql` or do your own database setup.

Run the `002.tables.sql` and `003.areas.sql` scripts to create the tables and to populate the areas in the database. You can add your own areas if you want. Just don't remove the areas that is already in `003.areas.sql`.

Run these commands to install all dependencies & to run the tests

```
npm install
npm test
```

All the tests should pass if you ran the db scripts correctly.

Don't start creating the web app if your tests are not passing.

Create an `index.js` for your ExpressJS web app.

## Factory function methods to use

Use the supplied factory function in the `spaza-suggest.js` to build the screens above. Not that it is an es6 module.

### Spaza client methods

The `spaza-suggest` factory function has these methods for spaza shop clients.

* `registerUser(username)` - returns a login code
* `userLogin(code)` - returns the user if it's a valid code
* `suggestProduct(areaId, userId)` - suggest a product 
* `suggestions(userId)` - show all the suggestions made by a user
* `upvote(suggestionId, userId)` - upvote a given suggesstion

### Spaza owner methods

The `spaza-suggest` factory function has these methods for spaza shops.

* `registerSpaza(name, areaId)` - create the spaza shop and return a login code
* `spazaLogin(code)` - return the spaza name & id  and areaId for the spaza shop
* `suggestionsForArea(areaId)` - show all the suggestions for a given area
* `acceptSuggestion(suggestionId, spazaId)`
* `acceptedSuggestions(spazaId)` - return all the accepted suggestions for the spazaId provided

### General methods

There are some methods in the Factory function that is not specific to a client or spaza shop

* `productsForArea(areaId)` - products suggested for an area
* `areas()` - return all areas
