import { User } from "firebase/auth";
import { firebaseApp } from "lib/firebaseApp";
import { useEffect, useState } from "react";

const useFirebaseUser = () => {
  const [firebaseUser, setFirebaseUser] = useState<User | null>(null);

  useEffect(() => {
    return firebaseApp.auth().onAuthStateChanged(async (user) => {
      setFirebaseUser(user as User);
    });
  }, []);
  return { firebaseUser };
};

export default useFirebaseUser;
