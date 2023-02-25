import { isBrowser } from "./isBrowser";

type EnvOptions = {
  isSecret?: boolean;
  isRequired?: boolean;
};
function getEnv(
  name: string,
  { isRequired, isSecret }: EnvOptions = { isSecret: true, isRequired: true }
): string {
  if (isBrowser && isSecret) return "";

  const source = (isBrowser ? window.env : process.env) ?? {};

  const value = source[name as keyof typeof source] as string;

  if (!value && isRequired) {
    throw new Error(`${name} is not set`);
  }

  return value;
}

/**
 * Shared envs
 */
export const NODE_ENV = getEnv("NODE_ENV", {
  isSecret: false,
  isRequired: false,
});

export const PRIVATE_SLACK_WEBHOOK = getEnv("PRIVATE_SLACK_WEBHOOK");
export const SLACK_TOKEN = getEnv("SLACK_TOKEN");
export const GA_TRACKING_ID = getEnv("GA_TRACKING_ID", {
  isSecret: false,
});

export function getBrowserEnv() {
  return {};
}
