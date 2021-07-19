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
    const validation = await validate(request.all(), {
      propertyName: 'required|min:3|max:255',
      value: 'required',
      tenants: 'required',
      rent: 'required',
    })

    if (validation.fails()) {
      session.withErrors(validation.message()).flashAll()
      return response.redirect('back')
    }

    const property = new Property();
    property.propertyName = request.input('propertyName')
    property.value = request.input('value')
    property.tenants = request.input('tenants')
    property.image = request.input('image')
    property.rent = request.input('rent')

    await property.save()

    session.flash({ notification: "Success: Property Added!!" })

    return response.redirect('/properties')

  }

  async edit({ params, view }) {
    const property = await Property.find(params.id)

    return view.render('properties.edit', {
      property: property,
    })
  }
}

module.exports = PropertyController
