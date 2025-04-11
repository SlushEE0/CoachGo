"use client";

import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/navigation";

import google, { CredentialResponse } from "google-one-tap";

import { createClient } from "@supabase/supabase-js";

const OneTapComponent = () => {
  const supabase = createClient(
    "https://mfjvnzzzdlykmznphiey.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1manZuenp6ZGx5a216bnBoaWV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM4MDM4OTgsImV4cCI6MjA1OTM3OTg5OH0.1u_AuD4QS16FqJuH3CjA49eIVyBzMvXlSr_SxlrBVNA"
  );

  return (
    <>
      <Script id="handleGoogleOneTap">{`
      window.handleGoogleOneTap = (response) => {
        console.log(response);
      };
    `}</Script>
      <Script src="https://accounts.google.com/gsi/client" />
      <div
        id="g_id_onload"
        data-client_id="236798609484-077j6kfkh9imsov7coqc8qu6ena117is.apps.googleusercontent.com"
        data-context="use"
        data-callback="handleGoogleOneTap"
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
        data-use_fedcm_for_prompt="true"></div>
    </>
  );
};

export default OneTapComponent;
