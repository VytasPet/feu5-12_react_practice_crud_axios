import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 0.25em solid rgba(0, 0, 0, 0.1);
  border-top-color: #333;
  animation: ${spin} 0.6s linear infinite;
`;

export default Spinner;
