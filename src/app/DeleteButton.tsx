import { IoRemoveCircle } from "react-icons/io5";

type DeleteButtonProps = {
  handleDeleteClick: any;
  id: any;
};

export const DeleteButton = (props: DeleteButtonProps) => {
  return (
    <>
      <IoRemoveCircle
        onClick={() => props.handleDeleteClick(props.id)}
        className="delete-button"
        style={{ cursor: "pointer" }}
      />
    </>
  );
};
