import { boolean, pgTable, text } from 'drizzle-orm/pg-core'
import { uuidv7 } from 'uuidv7'
import { auditFields } from '../helpers'

export const userTable = pgTable('users', {
	email: text('email').notNull().unique(),
	emailVerified: boolean('email_verified').default(false).notNull(),
	id: text('id')
		.primaryKey()
		.$defaultFn(() => uuidv7()),
	image: text('image'),
	name: text('name').notNull(),
	phone: text('phone'),
	stripeCustomerId: text('stripe_customer_id').unique(),
	...auditFields,
})
