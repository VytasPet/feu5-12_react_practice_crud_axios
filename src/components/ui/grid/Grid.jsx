import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols}, 1fr);
  gap: 16px;
`;

// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid({ cols = 3, children }) {
  return <StyledGrid cols={cols}>{children}</StyledGrid>;
}
// validuoti props
Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  cols: PropTypes.number,
};

export default Grid;
