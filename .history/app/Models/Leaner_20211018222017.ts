
import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User';
import Gender from './Gender';
import Plan from './Plan';
import Intensity from './Intensity';
import Week from './Week';
import Location from './Location';
import { Tenant } from 'App/Models/Tenant';
import { Frequency } from 'App/Models/Frequency';

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

  @hasOne(() => Tenant, { foreignKey: 'tenant_id'})
	tenant: HasOne<typeof Tenant>;
	// @column()
	// user_id?: number;

  @hasOne(() => User, { foreignKey: 'user_id'})
	user: HasOne<typeof User>;

  // @column()
	// gender_id: number;

	@hasOne(() => Gender, { foreignKey: 'gender_id'})
	gender: HasOne<typeof  Gender>;

  // @column()
	// plan_id: number;

	@hasOne(() => Plan, { foreignKey: 'plan_id'})
	plan: HasOne<typeof Plan>;

  // @column()
	// intensity_id: number;

	@hasOne(() => Intensity, { foreignKey: 'intensity_id'})
	intensity: HasOne<typeof Intensity>;

  @column()
	week_id: number;

	@hasOne(() => Week, { foreignKey: 'week_id'})
	week: HasOne<typeof Week>;

	@hasOne(() => Frequency, { foreignKey: 'frequency_id'})
	frequency: HasOne<typeof Frequency>;

	@hasOne(() => Location, { foreignKey: 'location_id'})
	location: HasOne<typeof Location>;

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
