import { useCallback, useState } from "react";
import { FormGroup, Textfield } from "../../atoms";
import { ButtonIcon } from "../../molecules";
import { ToDoListItemProps } from "./index.types";

export const ToDoListItem = ({ item, updateDescription }: ToDoListItemProps) => {
  const [description, setDescription] = useState(item.description);

  const handleUpdateDescription = useCallback(() => {
    updateDescription(item.id, description);
  }, [description]);

  return <FormGroup>
    <Textfield size='large' value={description} onBlur={handleUpdateDescription} onChange={description => setDescription(description)} />
    <ButtonIcon icon='remove' size='large' variant='danger' />
    <ButtonIcon icon='check' size='large' variant='success' />
  </FormGroup>;
};
