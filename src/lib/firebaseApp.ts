import firebase from "firebase/compat/app";
import environmentVars from "./environmentVars";
export const firebaseApp = firebase.initializeApp(
  environmentVars.firebaseConfig
);
