import { createClient } from "@supabase/supabase-js";
import SECRETS from "./config";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  SECRETS.SUPABASE_URL,
  SECRETS.SUPABASE_ANON_KEY
);
