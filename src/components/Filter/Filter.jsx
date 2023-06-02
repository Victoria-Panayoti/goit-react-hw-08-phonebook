import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { Label, Input } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';
  
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={({ currentTarget: { value } }) => {
          dispatch(filterContacts(value));
        }} />
    </Label>
  )
  
};

