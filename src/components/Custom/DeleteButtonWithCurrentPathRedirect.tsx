import { DeleteButton } from 'react-admin';
import { useLocation } from 'react-router-dom';

interface IDeleteButtonWithCurrentPathRedirectProps {}
const DeleteButtonWithCurrentPathRedirect: React.FC<
  IDeleteButtonWithCurrentPathRedirectProps
> = ({}) => {
  const { pathname } = useLocation();

  return <DeleteButton redirect={() => pathname.slice(1)} />;
};
export default DeleteButtonWithCurrentPathRedirect;
