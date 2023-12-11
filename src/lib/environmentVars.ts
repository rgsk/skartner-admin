export type TAppEnvironment = 'development' | 'staging' | 'production';

const environmentVars = {
  SKARTNER_SERVER: import.meta.env.VITE_SKARTNER_SERVER,
  LOCAL_IP: import.meta.env.VITE_LOCAL_IP,
  APP_ENV: import.meta.env.VITE_APP_ENV as TAppEnvironment | undefined,
  firebaseConfig: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  },
};

export default environmentVars;
