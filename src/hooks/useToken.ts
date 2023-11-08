import { firebaseApp } from "lib/firebaseApp";
import { useEffect, useState } from "react";

export default function useToken() {
  const [token, setToken] = useState<string | undefined>(undefined);
  const [tokenLoading, setTokenLoading] = useState(true);
  useEffect(() => {
    return firebaseApp.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setToken(token);
      } else {
        setToken(undefined);
      }
      setTokenLoading(false);
    });
  }, []);
  return { token, tokenLoading };
}
