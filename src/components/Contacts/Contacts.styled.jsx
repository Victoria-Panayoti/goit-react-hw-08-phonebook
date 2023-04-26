import styled from 'styled-components';

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const ContactItem = styled.li`
    display:flex;
    justify-content: space-between;
`
export const ContactButton = styled.button`
  margin-left: 24px;
  width: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ced6ce;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #b20e0e;
  }
`;
