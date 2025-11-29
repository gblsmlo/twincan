import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { uuidv7 } from 'uuidv7'
import { auditFields } from '../helpers'
import { userTable } from './users'

export const accountTable = pgTable('accounts', {
	accessToken: text('access_token'),
	accessTokenExpiresAt: timestamp('access_token_expires_at'),
	accountId: text('account_id').notNull(),
	id: text('id')
		.primaryKey()
		.$defaultFn(() => uuidv7()),
	idToken: text('id_token'),
	password: text('password'),
	providerId: text('provider_id').notNull(),
	refreshToken: text('refresh_token'),
	refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
	scope: text('scope'),
	userId: text('user_id')
		.notNull()
		.references(() => userTable.id, { onDelete: 'cascade' }),
	...auditFields,
})
