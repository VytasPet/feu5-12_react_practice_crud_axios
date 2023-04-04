import styled from 'styled-components';

const Button = styled.button`
  font-size: 16px;
  padding: 0.3em 0.8em;
  border-radius: 4px;
  border: 1px solid #777;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #777;
  }
  span {
    color: tomato;
  }
`;

// paimti visa stiliu is Button ir kazka pakeisti
export const LargeButton = styled(Button)`
  font-size: 24px;
  border-radius: 10px;
`;

export const SubmitButton = styled(Button).attrs((props) => ({
  type: 'submit',
  className: 'blue',
}))`
  border-radius: 30px;
`;

export default Button;
