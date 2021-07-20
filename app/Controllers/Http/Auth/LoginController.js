'use strict'

// const User = use('App/Models/User')
// const Hash = use('Hash')

class LoginController {
  showLoginForm ({ view }) {
    return view.render('auth.login')
  } 
}

module.exports = LoginController
