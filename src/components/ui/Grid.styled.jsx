import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || 3}, 1fr);
  gap: 16px;
`;

export default Grid;
