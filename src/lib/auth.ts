import "server-only";

import { cookies } from "next/headers";

import { base64url, EncryptJWT, jwtDecrypt } from "jose";

if (!process.env.AUTH_ENCODER_SECRET) {
  throw new Error("[ENV] AUTH_ENCODER_SECRET is not set.");
}

const KEY = base64url.decode(process.env.AUTH_ENCODER_SECRET);

/**
 * Encrypts a given object into a JWT token.
 * @param {Record<string, any>} data - The object to be encrypted.
 * @param exp - The expiration time in days (default is 2).
 * @return - The encrypted JWT token.
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
 * @param token - The JWT token to be decrypted.
 * @return {Promise<Record<string, any>>} - The decrypted object.
 */
export async function decrypt<T>(token = ""): Promise<T> {
  return jwtDecrypt(token, KEY) as Promise<T>;
}

/**
 * Creates a cookie
 * @param name - The name of the cookie.
 * @param cookie - The string to be stored in the cookie.
 * @param expTimeMS - The expiration time in milliseconds (default is 7 days).
 */
export async function createCookie(
  name = "",
  cookie = "",
  expTimeMS = 604800000 // 7 days from now
) {
  const cookieStore = await cookies();
  const token = cookieStore.get(name)?.value || "";

  const expiryDate = new Date(Date.now() + expTimeMS);

  cookieStore.set("session", cookie, {
    httpOnly: true,
    secure: true,
    expires: expiryDate,
    sameSite: "lax"
  });
}

/**
 * Extends the expiration time of a cookie.
 * @param name - The name of the cookie.
 * @param expTimeMS - The expiration time in milliseconds (default is 7 days).
 */
export async function extendCookie(name = "", expTimeMS = 604800000) {
  const session = (await cookies()).get(name)?.value;

  if (!session) {
    return null;
  }

  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();
  cookieStore.set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: "lax",
    path: "/"
  });
}

/**
 * Deletes a cookie by its name.
 * @param name - The name of the cookie.
 */
export async function deleteCookie(name = "") {
  const cookieStore = await cookies();
  cookieStore.delete(name);
}

export async function createSession() {}
