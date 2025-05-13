import { configDotenv } from "dotenv";

configDotenv();

const secret_key = process.env.SEKRET_KEY;

export { secret_key };
