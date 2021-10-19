import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Leaners extends BaseSchema {
  protected tableName = 'leaners'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('email').unique()
      table.timestamp('birth_date', { useTz: true })
      table.integer('age')
      table.integer('tenant_id')
           .references('tenants.id')
           .unsigned()
           .nullable()
      table.integer('user_id')
           .references('users.id')
           .unsigned()
      table.integer('gender_id')
           .references('genders.id')
           .unsigned()
      table.integer('plan_id')
           .references('plans.id')
           .unsigned()
      table.integer('intensity_id')
           .references('intensities.id')
           .unsigned()
      table.integer('week_id')
           .references('weeks.id')
           .unsigned()
      table.integer('frequency_id')
           .references('frequencies.id')
           .unsigned()
      table.integer('location_id')
           .references('locations.id')
           .unsigned()
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
