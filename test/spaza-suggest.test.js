import assert from 'assert';

import SpazaSuggest from '../spaza-suggest.js';
import pgPromise from 'pg-promise';

const DATABASE_URL= process.env.DATABASE_URL || "postgresql://smarty:smart123@localhost:5432/smart_spaza";

const config = { 
	connectionString : DATABASE_URL
}
const pgp = pgPromise();

// if (process.env.NODE_ENV == 'production') {
// 	config.ssl = { 
// 		rejectUnauthorized : false
// 	}
// }

const db = pgp(config);
const spazaSuggest = SpazaSuggest(db);

describe ("The smart spaza", function() {

    it("should be able to list areas", async function() {
        
        

        assert.equal(1,2);
    });

    it("should be able to create a Spaza User and return a code", async function() {

        const code = await spazaSuggest.registerUser('spazani');

        assert.ok(code);

        // assert.equal(1,2);
    });

    it("should be able to find  a user using a code", async function() {
        assert.equal(1,2);
    });

    it("should be able to suggest a product for an area", async function() {
        assert.equal(1,2);
    });

    it("should be able to get all the suggestions for an area", async function() {
        assert.equal(1,2);
    });

    it("should be able to get all the suggestions made by a user", async function() {
        assert.equal(1,2);
    });

    it("should be able to create a new Spaza shop", async function(){
        assert.equal(1,2);
    });

    it("should be able to find a spaza shop using a code", async function(){
        assert.equal(1,2);
    });

    it("should be able to accept a suggestion", async function(){
        assert.equal(1,2);
    });

    it("should be able to see all the accepted suggestions for a Spaza", async function(){
        assert.equal(1,2);
    });

});