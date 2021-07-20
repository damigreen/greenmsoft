'use strict'

class PasswordRestController {
  showLinkRequetForm ({ view }) {
    return view.render('auth.password.email')
  }
}

module.exports = PasswordRestController
