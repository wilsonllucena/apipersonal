import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Training extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  leaner_id: number;

  @column()
  type_id: number;

  @column()
  muscle_id: number;

  @column()
  exercicie_id: number;

  @column()
  serie_id: number;

  @column()
  repeat_id: number;

  @column()
  pause_id: number;

  @column()
  cadency: string;

  @column()
  weight_id: number;

  @column()
  method_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
