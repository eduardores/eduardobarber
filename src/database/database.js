import { Pool } from "pg";
const url = "postgresql://neondb_owner:npg_AGxWSQh7P4fN@ep-patient-cloud-acttz99h-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";
const database = new Pool({ connectionString: url });
export default database;