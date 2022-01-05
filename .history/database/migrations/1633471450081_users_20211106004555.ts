import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('tenant_id')
           .references('id')
           .inTable('tenants')
           .nullable()
           .unsigned()
           .onDelete('SET NULL')
      table.string('name',255).notNullable()
      table.string('username',255).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.boolean('is_personal').notNullable().defaultTo(false)
      table.boolean('is_admin').notNullable().defaultTo(false)
      table.string('avatar').nullable()
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
