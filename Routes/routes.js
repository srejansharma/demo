
const configuration=require('../config')

exports.route=(app)=>{
app.get('/signup',configuration.signup.signup)
app.get('/login',configuration.login.login)
    }
