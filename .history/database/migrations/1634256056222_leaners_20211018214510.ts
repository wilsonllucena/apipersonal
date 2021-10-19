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
           .onDelete('SET NULL')
           .onDelete('CASCADE')
      table.integer('user_id')
           .references('users.id')
           .unsigned()
           .onDelete('SET NULL')
           .onDelete('CASCADE')
      table.integer('gender_id')
           .references('genders.id')
           .unsigned()
           .onDelete('SET NULL')
           .onDelete('CASCADE')
      table.integer('plan_id')
           .references('plans.id')
           .unsigned()
           .onDelete('SET NULL')
           .onDelete('CASCADE')
      table.integer('intensity_id')
           .references('intensities.id')
           .unsigned()
           .onDelete('SET NULL')
           .onDelete('CASCADE')
      table.integer('week_id')
           .references('weeks.id')
           .unsigned()
           .onDelete('SET NULL')
           .onDelete('CASCADE')
      table.integer('frequency_id')
           .references('frequencies.id')
           .unsigned()
           .onDelete('SET NULL')
           .onDelete('CASCADE')
      table.integer('location_id')
           .references('locations.id')
           .unsigned()
           .onDelete('SET NULL')
           .onDelete('CASCADE')
      table.text('objective')
      table.string('type_training')
      table.text('training_mesocycle')
      table.text('comments')
      table.timestamp('date_start', { useTz: true })
      table.timestamp('date_end', { useTz: true })
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
