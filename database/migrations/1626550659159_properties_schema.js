'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PropertiesSchema extends Schema {

  
  up () {
    this.alter('properties', (table) => {
      table.increments()
      table.string('propertyName')
      table.integer('value')
      table.integer('tenants')
      table.integer('rent')
      table.timestamps()
    })
    this.alter('properties', (table) => {
      table.string('image')
    })
  }

  down () {
    this.drop('properties')
  }
}

module.exports = PropertiesSchema
