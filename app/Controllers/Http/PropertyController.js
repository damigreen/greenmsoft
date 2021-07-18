'use strict'

const Property = use('App/Models/Property');

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
}

module.exports = PropertyController
