'use strict'

class CustomerController {
  async index({ view }) {
    const tableHead = [
      { type: 'name', value: 'Name'},
      { type: 'phone', value: 'Phone Number'},
      { type: 'email', value: 'Email'},
      { type: 'type', value: 'Type'}
    ]

    const customers = [
      { fullName: 'Faseun Damilola', mobile: '07061935742', email: 'damilola.faseun@gmail.com', userType: 'Customer' },
      { fullName: 'Aliko Dangote', mobile: '090333339999', email: 'aliko.dangote.com', userType: 'Prospect' },
      { fullName: 'Pep Guardiola', mobile: '07090000000', email: 'pepguardiola.com', userType: 'Customer' },
    ]

    return view.render('customers.index', {
      tableHead: tableHead,
      customers: customers,
    })
  }
}

module.exports = CustomerController
