import { useDispatch} from 'react-redux';
import { Label, Input } from './Filter.styled';
import { filterContacts } from 'redux/filterSlice';
import { useFilter } from 'redux/hooks';
  
export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useFilter();
  return (
    <Label>
      Find contact by name
      <Input type="text" value={filter} onChange={({ currentTarget: { value } }) => {
          dispatch(filterContacts(value));
        }} />
    </Label>
  )
  
};

