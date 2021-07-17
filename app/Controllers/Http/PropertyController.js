'use strict'

class PropertyController {
  async index({ view }) {
    const propertiesHeader = [
      { type: 'propertyName', value: 'Property Name' },
      { type: 'value', value: 'Value' },
      { type: 'tenant', value: 'Tenant' },
      { type: 'rent', value: 'Rent' },
    ]

    const properties = [
      { propertyName: 'Ocean Wing', value: 100000000, tenant: 8, rent: 5000000 },
      { propertyName: 'Ultravioliet Royale', value: 120000000, tenant: 12, rent: 7000000 },
      { propertyName: 'Sky Drive', value: 185000000, tenant: 9, rent: 10000000 },
      { propertyName: 'Green Royale', value: 76000000, tenant: 4, rent: 2000000 },
      { propertyName: 'Vanilla Castle', value: 205000000, tenant: 15, rent: 12000000 },
      { propertyName: 'Tropic Paradise', value: 165000000, tenant: 12, rent: 4000000 },
      { propertyName: 'Magic Isle', value: 119000000, tenant: 5, rent: 12000000 },
      { propertyName: 'Eternal Dreams', value: 89000000, tenant: 2, rent: 900000 },
      { propertyName: 'Rocky Village', value: 145000000, tenant: 20, rent: 750000 },
      { propertyName: 'Umbrella Verge', value: 30000000, tenant: 7, rent: 1000000 },
    ]
    return view.render('properties.index', {
      propertiesHeader: propertiesHeader,
      properties: properties,
    })
  }

  async details({ params, view }) {
    // return view.render(params.id)
  }
}

module.exports = PropertyController
