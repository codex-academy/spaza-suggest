module.exports = function SpazaRoutes(spaza){

    const ShortUniqueId = require("short-unique-id")
    const uid = new ShortUniqueId({ length: 6 });

    async function displayRegPage(req, res){

        res.render('register', {

        })

    }
    async function addUser(req, res){

        let name = req.body.username
        const code = uid()
        

        await spaza.registerClient(name);

        req.flash('success', 'You have succesfully registered, your code is: ' + code)

        res.redirect('/login')
    }

    return{
        displayRegPage,
        addUser
        
    }
}