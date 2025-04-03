"use server";

import { base64url, EncryptJWT, jwtDecrypt, SignJWT } from "jose";

const secret = base64url.decode(
  process.env.AUTH_ENCODER_SECRET || "SECRET!!#&^$%#"
);
const hash = await crypto.subtle.digest("SHA-256", secret);
const KEY = new Uint8Array(hash);

/**
 * Encrypts a given object into a JWT token.
 * @param {Record<string, any>} data - The object to be encrypted.
 * @param {number} exp - The expiration time in days (default is 2).
 * @returns {string} - The encrypted JWT token.
 */
export async function encrypt(
  data: Record<string, any>,
  exp = 2
): Promise<string> {
  const encryptor = new EncryptJWT({ data });

  encryptor
    .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
    .setIssuedAt()
    .setIssuer(process.env.AUTH_ISSUER || "CoachGo")
    .setExpirationTime(`${exp} day`);

  return encryptor.encrypt(KEY);
}

/**
 * Decrypts a given JWT token into an object.
 * @param {string} token - The JWT token to be decrypted.
 * @returns {Promise<Record<string, any>>} - The decrypted object.
 */
export async function decrypt<T>(token: string): Promise<T> {
  return jwtDecrypt(token, KEY) as Promise<T>;
}
