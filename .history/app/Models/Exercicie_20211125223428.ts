import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Muscle from './Muscle';

export default class Exercicie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public muscle_id: number

  @column()
  public name: string;

  @column()
  public url: string

  @belongsTo(() => Muscle)
  public muscle: BelongsTo<typeof Muscle>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
