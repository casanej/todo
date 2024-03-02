import { useCallback, useState } from "react";
import { FormGroup, Textfield } from "../../atoms";
import { ButtonIcon } from "../../molecules";
import { ToDoListItemProps } from "./index.types";

export const ToDoListItem = ({ finishItem, item, removeItem, updateDescription }: ToDoListItemProps) => {
  const [description, setDescription] = useState(item.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateDescription = useCallback(() => {
    updateDescription(item.id, description);
    setTimeout(() => setIsEditing(false), 200);
  }, [description]);

  return <FormGroup>
    <Textfield
      size='large'
      readOnly={item.status === 'DONE'}
      value={description}
      onBlur={handleUpdateDescription}
      onChange={description => setDescription(description)}
      onFocus={() => setIsEditing(true)}
      popover="Edit task"
    />
    {
      item.status !== 'DONE' && isEditing && <>
        <ButtonIcon icon='remove' size='large' variant='danger' onClick={() => removeItem(item.id)} />
        <ButtonIcon icon='check' size='large' variant='success' onClick={() => finishItem(item.id)} />
      </>
    }
  </FormGroup>;
};
