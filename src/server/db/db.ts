import { drizzle } from 'drizzle-orm/postgres-js';
import { Users } from './schema';


// export const db = drizzle(["postgres://admin:123456@localhost:5432/postgres", {}]);
export const db = drizzle(process.env.DATABASE_URL || '', {schema: { users: Users }})

// const result = await db.execute('select 1');
