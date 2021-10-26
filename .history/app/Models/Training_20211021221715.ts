import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import Leaner from './Leaner';
import TypeTraining from './TypeTraining';
import Muscle from './Muscle';
import Exercicie from './Exercicie';
import Serie from './Serie';
import Repeat from './Repeat';
import Pause from './Pause';
import Weight from './Weight';
import Method from './Method';

export default class Training extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  type_id: number;

  @hasOne(() => TypeTraining, { foreignKey: 'type_id'})
	type: HasOne<typeof TypeTraining>;

  @column()
  type_training: string;

  @column()
  muscle_id: number;

  @hasOne(() => Muscle, { foreignKey: 'muscle_id'})
	muscle: HasOne<typeof Muscle>;

  @column()
  exercicie_id: number;

  @hasOne(() => Exercicie, { foreignKey: 'exercicie_id'})
	exercicie: HasOne<typeof Exercicie>;

  @column()
  serie_id: number;

  @hasOne(() => Serie, { foreignKey: 'serie_id'})
	serie: HasOne<typeof Serie>;

  @column()
  repeat_id: number;

  @hasOne(() => Repeat, { foreignKey: 'repeat_id'})
	repeat: HasOne<typeof Repeat>;

  @column()
  pause_id: number;

  @hasOne(() => Pause, { foreignKey: 'pause_id'})
	pause: HasOne<typeof Pause>;

  @column()
  weight_id: number;

  @hasOne(() => Weight, { foreignKey: 'weight_id'})
	weight: HasOne<typeof Weight>;

  @column()
  method_id: number;

  @hasOne(() => Method, { foreignKey: 'method_id'})
	method: HasOne<typeof Method>;

  @column()
  cadency: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
