import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TrainingsLeaners extends BaseSchema {
  protected tableName = 'trainings_leaners'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('leaner_id').references('id').inTable('leaners').onDelete('CASCADE')
      table.integer('training_id').references('id').inTable('trainings').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
