import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
export const Input = styled.input`
  width: 300px;
  border-radius: 4px;
  &:hover,
  &:focus {
    border: 3px solid #20a033;
    color: #2f6117;
  }
`;
