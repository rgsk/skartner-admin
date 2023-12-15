import { DeleteButton, EditButton, ShowButton } from 'react-admin';

interface IShowEditDeleteButtonsProps {}
const ShowEditDeleteButtons: React.FC<IShowEditDeleteButtonsProps> = ({}) => {
  return (
    <>
      <ShowButton />
      <EditButton />
      <DeleteButton />
    </>
  );
};
export default ShowEditDeleteButtons;
