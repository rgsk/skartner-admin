import { useUserQuery } from "gql/graphql";
import useFirebaseUser from "./useFirebaseUser";

const useUser = () => {
  const { firebaseUser } = useFirebaseUser();
  const { data: { user } = {} } = useUserQuery({
    variables: { where: { email: { equals: firebaseUser?.email } } },
  });
  return { user };
};
export default useUser;
