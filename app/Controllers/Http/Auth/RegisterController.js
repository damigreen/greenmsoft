'use strict'

const { validate } = use('Validator')
const User = use('App/Models/User')
const randomString = require('random-string')
const mail = use('Mail')


class RegisterController {
  showRegisterForm({ view }) {
    return view.render('auth.register')
  }

  async register({ request, session, response }) {
    // Validate form input
    const validation = await validate(request.all(), {
      fullName: 'required|min:3',
      username: 'required|unique:users,username',
      email: 'required|email|unique:users,email',
      password: 'required'
    })

    if (validation.fails()) {
      session.withErrors(validation.messages()).flashExcept('password')

      return response.redirect('back')
    }

    // Create users
    const user = await User.create({
      fullName: request.input('fullName'),
      username: request.input('username'),
      email: request.input('email'),
      password: request.input('password'),
      confirmation_token: randomString({ length: 45 })
    })

    // Send confirmation email
    await mail.send('auth.emails.confirm_email', user.toJSON(), message => {
      message.to(user.email)
      .from('hello@greenmsoft.com')
      .subject('Please confirm your email address')
    })

    // Display a success message 
    session.flash({ notification: {
      type: 'success',
      message: 'Registration successful! A mail has been sent to your email address, please confirm your email address.'
    }})

    return response.redirect('back')
  }
}

module.exports = RegisterController
