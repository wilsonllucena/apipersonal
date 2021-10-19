import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User';
import Gender from './Gender';
import Plan from './Plan';

export default class Leaner extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
	name: string;

	@column()
	email: string;

	@column.date()
	birth_date: DateTime;

	@column()
	age: number;

	@column()
	tenant_id?: number;

	@column()
	user_id?: number;

  @hasOne(() => User, { foreignKey: 'user_id'})
	user: HasOne<typeof User>;

  @column()
	gender_id: number;

	@hasOne(() => Gender, { foreignKey: 'gender_id'})
	gender: HasOne<typeof  Gender>;

  @column()
	plan_id: number;

	@hasOne(() => Plan, { foreignKey: 'plan_id'})
	plan: HasOne<typeof Plan>;

  @column()
	type_training: string;

	@column()
	training_mesocycle: string;

	@column.date()
	date_start: DateTime;

	@column.date()
	date_end: DateTime;

	@column()
	comments: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
