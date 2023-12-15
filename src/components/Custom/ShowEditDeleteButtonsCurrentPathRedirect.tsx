import { EditButton, ShowButton } from 'react-admin';
import DeleteButtonWithCurrentPathRedirect from './DeleteButtonWithCurrentPathRedirect';

interface IShowEditDeleteButtonsCurrentPathRedirectProps {}
const ShowEditDeleteButtonsCurrentPathRedirect: React.FC<
  IShowEditDeleteButtonsCurrentPathRedirectProps
> = ({}) => {
  return (
    <>
      <ShowButton />
      <EditButton />
      <DeleteButtonWithCurrentPathRedirect />
    </>
  );
};
export default ShowEditDeleteButtonsCurrentPathRedirect;
