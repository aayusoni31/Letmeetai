// import { pgTable, text, timestamp, boolean } from "drizzle-orm/pg-core";

// export const user = pgTable("user", {
//   id: text("id").primaryKey(),
//   name: text("name").notNull(),
//   email: text("email").notNull().unique(),
//   emailVerified: boolean("email_verified")
//     .$defaultFn(() => false)
//     .notNull(),
//   image: text("image"),
//   createdAt: timestamp("created_at")
//     .$defaultFn(() => /* @__PURE__ */ new Date())
//     .notNull(),
//   updatedAt: timestamp("updated_at")
//     .$defaultFn(() => /* @__PURE__ */ new Date())
//     .notNull(),
// });

// export const session = pgTable("session", {
//   id: text("id").primaryKey(),
//   expiresAt: timestamp("expires_at").notNull(),
//   token: text("token").notNull().unique(),
//   createdAt: timestamp("created_at").notNull(),
//   updatedAt: timestamp("updated_at").notNull(),
//   ipAddress: text("ip_address"),
//   userAgent: text("user_agent"),
//   userId: text("user_id")
//     .notNull()
//     .references(() => user.id, { onDelete: "cascade" }),
// });

// export const account = pgTable("account", {
//   id: text("id").primaryKey(),
//   accountId: text("account_id").notNull(),
//   providerId: text("provider_id").notNull(),
//   userId: text("user_id")
//     .notNull()
//     .references(() => user.id, { onDelete: "cascade" }),
//   accessToken: text("access_token"),
//   refreshToken: text("refresh_token"),
//   idToken: text("id_token"),
//   accessTokenExpiresAt: timestamp("access_token_expires_at"),
//   refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
//   scope: text("scope"),
//   password: text("password"),
//   createdAt: timestamp("created_at").notNull(),
//   updatedAt: timestamp("updated_at").notNull(),
// });

// export const verification = pgTable("verification", {
//   id: text("id").primaryKey(),
//   identifier: text("identifier").notNull(),
//   value: text("value").notNull(),
//   expiresAt: timestamp("expires_at").notNull(),
//   createdAt: timestamp("created_at").$defaultFn(
//     () => /* @__PURE__ */ new Date()
//   ),
//   updatedAt: timestamp("updated_at").$defaultFn(
//     () => /* @__PURE__ */ new Date()
//   ),
// });
import {
  mysqlTable,
  varchar,
  int,
  datetime,
  timestamp,
  serial,
} from "drizzle-orm/mysql-core";

// USER TABLE
export const user = mysqlTable("user", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }),
  email: varchar("email", { length: 150 }).notNull().unique(),
  emailVerified: datetime("email_verified"),
  image: varchar("image", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// ACCOUNT TABLE
export const account = mysqlTable("account", {
  id: serial("id").primaryKey(),
  accountId: varchar("accountid", { length: 150 }).notNull(),
  providerId: varchar("provider_id", { length: 100 }).notNull(),
  userId: int("user_id").notNull(),
  accessToken: varchar("accesss_token", { length: 255 }).notNull(),
});

// SESSION TABLE
export const session = mysqlTable("session", {
  id: serial("id").primaryKey(),
  token: varchar("token", { length: 255 }).notNull().unique(),
  expireAt: datetime("expire_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow(),
});

// VERIFICATION TABLE
export const verification = mysqlTable("verification", {
  id: serial("id").primaryKey(),
  identifier: varchar("identifier", { length: 100 }).notNull(),
  value: varchar("value", { length: 255 }).notNull(),
  expireAt: datetime("expire_at").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
