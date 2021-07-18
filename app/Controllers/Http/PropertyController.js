'use strict'

const Property = use('App/Models/Property');

const { validate } = use('Validator');

class PropertyController {

  async index({ view }) {
    const propertiesHeader = [
      { type: 'propertyName', value: 'Property Name' },
      { type: 'value', value: 'Value' },
      { type: 'tenant', value: 'Tenant' },
      { type: 'rent', value: 'Rent' },
    ]

    const properties = await Property.all()

    return view.render('properties.index', {
      propertiesHeader: propertiesHeader,
      properties: properties.toJSON(),
    })
  }

  async details({ params, view }) {
    const property = await Property.find(params.id)    
    return view.render('properties.details', {
      property: property,
    })
  }

  async new({ view }) {
    return view.render('properties.new')
  }

  async store({ request, response, session }) {
    const property = new Property();
    property.propertyName = request.input('name')
    property.value = request.input('value')
    property.tenants = request.input('tenants')
    property.rent = request.input('rent')

    await property.save()

    session.flash({ notification: "Success: Property Added!!" })

    return response.redirect('/properties')

  }
}

module.exports = PropertyController
