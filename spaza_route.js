module.exports = function SpazaRoutes(spaza){

  
    async function displayRegPage(req, res){

        res.render('register', {

        })

    }
    async function addUser(req, res){

        let name = req.body.username

        let code = await spaza.registerClient(name)


        req.flash('success', 'You have succesfully registered, your code is: ' + code)

        res.redirect('/login/' + name)
    }

    async function displayLogin(req, res){
        let username = req.params.name
        res.render('login',{
            username
        })
    }

    async function getUsersCode(req, res){

        let code = req.body.addCode
        let username = req.params.name
        let getCode = await spaza.clientLogin(code)

         await spaza.registerClient(username);

         if (getCode.code === code) {
            req.flash('success', 'You have loged in succesfully')
    
        res.redirect('/suggest-page/' + username)
         }

         else if (getCode.code === null) {

            req.flash('error', 'ENTER THE CORRECT CODE GIVEN!')

            res.redirect("/login/" + username)
        }

    }

    async function displaySuggestion(req, res){
        let username = req.params.name

        res.render('suggest-page',{
            username
        })

    }

    async function sendSuggestion(req, res){

       

    }

    return{
        displayRegPage,
        addUser, 
        displayLogin,
        getUsersCode,
        displaySuggestion,
        sendSuggestion
        
    }
}