const env = process.env.NODE_ENV || "development";
const envVars = process.env;

let SECRETS = {
  PUB_SUPABASE_URL: "",
  PUB_SUPABASE_ANON_KEY: "",
  PUB_GOOGLE_CLIENT_ID: "",
  SRV_AUTH_ENCODER_SECRET: "",
  SRV_AUTH_ISSUER: ""
};

Object.keys(SECRETS).forEach((key) => {
  if (!envVars[key]) {
    console.warn(`[ENV] ${key} is not set.`);
  } else {
    SECRETS[key as keyof typeof SECRETS] = envVars[key] as string;
  }
});

export default SECRETS;
