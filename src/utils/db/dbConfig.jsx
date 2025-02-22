import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
const sql = neon(
   "postgresql://ecoscanai_owner:npg_am9L8FHUeKiT@ep-proud-mode-a80l15hb-pooler.eastus2.azure.neon.tech/ecoscanai?sslmode=require"
);
export const db = drizzle(sql, { schema });