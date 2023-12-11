import useFirebaseUser from 'hooks/useFirebaseUser';
import useUser from 'hooks/useUser';

interface IPracticeProps {}
const Practice: React.FC<IPracticeProps> = ({}) => {
  const { firebaseUser } = useFirebaseUser();
  const { user } = useUser();

  return (
    <div>
      <p>Practice</p>
      <p>firebaseUser.email: {firebaseUser?.email}</p>
      <p>user.id: {user?.id}</p>
      <p>user.email: {user?.email}</p>
    </div>
  );
};
export default Practice;
