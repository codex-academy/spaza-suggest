import ShortUniqueId from 'short-unique-id';

export default function SpazaSuggest (db){

    const uid = new ShortUniqueId({ length: 5 });

    //// returns client code
    async function registerUser(username){
        // get the code

        const uniqCode = uid();
        await db.none(`insert into username (username, code) values ($1, $2)`, [username, uniqCode])
        return uniqCode;

    }

    // returns the user if it's a valid code
    function userLogin(code)  {
        `select * from spaza_user where code = $1`
    }

    // return all areas
    function areas() {
        `select * from area order by name asc`;
    }

    function suggestProduct(areaId, userId, suggestion) {
        `insert into suggestion(area_id, user_id, suggestion) values ($1, $2, $3)`
    }

    function suggestionsForArea(areaId) {
        `select * from suggestions where area_id = $1`;
    }

    // show all the suggestions made by a user
    function suggestions(userId) {
        `select * from suggestion where user_id = $1`;
    }

    // upvote a given suggesstion
    function likeSuggestion(suggestionId, userId) {
        `insert into liked_suggestion (suggestion_id, user_id) values ($1, $2)`;
    }

    // create the spaza shop and return a code
    function registerSpaza(name, areaId) {
        ``
    }
    
    // return the spaza name & id  and areaId for the spaza shop
    function spazaLogin(code) {
        `insert into spaza (name, code) values ($1, $2)`
    }
    
    // show all the suggestions for a given area
    // function suggestionsForArea(areaId) {
    //     ``
    // }
    
    function acceptSuggestion(suggestionId, spazaId) {
        `insert into accepted_suggestion(suggestion_id, spaza_id) values ($1, $2)`
    }
    
    // return all the accepted suggestions for the spazaId provided
    function acceptedSuggestions(spazaId) {
        `select * from suggestion join accepted_suggestion where suggestion.id = accepted_suggestion.id and accepted_suggestion.spaza_id = $1`
    }

    return {
        acceptSuggestion,
        acceptedSuggestions,
        areas,
        registerSpaza,
        registerUser,
        spazaLogin,
        suggestProduct,
        suggestions,
        suggestionsForArea,
        likeSuggestion,
        userLogin
    }
}
