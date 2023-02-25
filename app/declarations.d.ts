export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SESSION_SECRET: string;
      PRIVATE_SLACK_WEBHOOK: string;
      SLACK_TOKEN: string;
    }
  }

  interface Window {
    __APOLLO_STATE__: any;
    env: {
      GA_TRACKING_ID: string;
    };
    $crisp: any;
    gtag: (
      option: string,
      gaTrackingId: string,
      options: Record<string, unknown>
    ) => void;
  }
}
