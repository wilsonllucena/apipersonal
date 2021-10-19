import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Trainings extends BaseSchema {
  protected tableName = 'trainings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('leaner_id')
           .references('leaners.id')
           .unsigned()
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
      table.integer('type_id')
           .references('type_trainings.id')
           .unsigned()
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
      table.integer('muscle_id')
           .references('muscles.id')
           .unsigned()
           .onDelete('SET NULL')
           .onUpdate('CASCADE')
      table.integer('exercicie_id')
           .references('exercicies.id')
           .unsigned()
           .onDelete('SET NULL')
           .onUpdate('CASCADE')
      table.integer('serie_id')
           .references('series.id')
           .unsigned()
           .onDelete('SET NULL')
           .onUpdate('CASCADE')
      table.integer('repeat_id')
           .references('repeats.id')
           .unsigned()
           .onDelete('SET NULL')
           .onUpdate('CASCADE')
      table.integer('pause_id')
           .references('pauses.id')
           .unsigned()
           .onDelete('SET NULL')
           .onUpdate('CASCADE')
      table.string('cadency')
      table.integer('weight_id')
           .references('weights.id')
           .unsigned()
           .onDelete('SET NULL')
           .onUpdate('CASCADE')
      table.integer('method_id')
           .references('methods.id')
           .unsigned()
           .onDelete('SET NULL')
           .onUpdate('CASCADE')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
