import { useCallback, useState } from "react";
import { FormGroup, Textfield } from "../../atoms";
import { ButtonIcon } from "../../molecules";
import { ToDoListItemProps } from "./index.types";

export const ToDoListItem = ({ item, removeItem, updateDescription }: ToDoListItemProps) => {
  const [description, setDescription] = useState(item.description);

  const handleUpdateDescription = useCallback(() => {
    updateDescription(item.id, description);
  }, [description]);

  const handleRemoveItem = useCallback(() => {
    removeItem(item.id);
  }, [item.id]);

  return <FormGroup>
    <Textfield size='large' value={description} onBlur={handleUpdateDescription} onChange={description => setDescription(description)} />
    <ButtonIcon icon='remove' size='large' variant='danger' onClick={handleRemoveItem} />
    <ButtonIcon icon='check' size='large' variant='success' />
  </FormGroup>;
};
