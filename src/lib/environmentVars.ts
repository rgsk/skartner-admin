export type TAppEnvironment = "development" | "staging" | "production";

const environmentVars = {
  SKARTNER_SERVER: import.meta.env.VITE_SKARTNER_SERVER,
  LOCAL_IP: import.meta.env.VITE_LOCAL_IP,
  APP_ENV: import.meta.env.VITE_APP_ENV as TAppEnvironment | undefined,
};

export default environmentVars;
