import { createCookieSessionStorage } from "@remix-run/node";
import { SESSION_KEY } from "./const";
import crypto from "crypto";

const { commitSession, destroySession, ...sessionStorage } =
  createCookieSessionStorage({
    cookie: {
      name: SESSION_KEY,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: [process.env.SESSION_SECRET],
      secure: process.env.NODE_ENV === "production",
    },
  });

async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

function generateHash() {
  return crypto.randomBytes(16).toString("hex");
}

export { getSession, commitSession, destroySession, generateHash };
