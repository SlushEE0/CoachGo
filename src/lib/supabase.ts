

import { createClient } from "@supabase/supabase-js";
import SECRETS from "./config";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://mfjvnzzzdlykmznphiey.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1manZuenp6ZGx5a216bnBoaWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MDM4OTgsImV4cCI6MjA1OTM3OTg5OH0.1u_AuD4QS16FqJuH3CjA49eIVyBzMvXlSr_SxlrBVNA"
);
