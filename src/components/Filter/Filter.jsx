import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ search, onSearch }) => (
  <Label>
    Find contact by name
    <Input type="text" value={search} onChange={onSearch} />
  </Label>
);

Filter.propTypes = {
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
