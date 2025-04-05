const env = process.env.NODE_ENV || "development";
const envVars = process.env;

let SECRETS = {
  SUPABASE_URL: "",
  AUTH_ENCODER_SECRET: "",
  AUTH_ISSUER: "",
  SUPABASE_ANON_KEY: "",
};

Object.keys(SECRETS).forEach((key) => {
  if (!envVars[key]) {
    throw new Error(`[ENV] ${key} is not set.`);
  } else {
    SECRETS[key as keyof typeof SECRETS] = envVars[key] as string;
  }
});

export default SECRETS