import styled from 'styled-components';
import PropTypes from 'prop-types';

// perdaryti kad div butu styled componentas
const Wrap = styled.div`
  padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: 1px solid rgb(191, 180, 180);
  border-radius: 5px;
  background-color: snow;
`;

function Card({ children }) {
  return <Wrap>{children}</Wrap>;
}

// prop types buti vienas elementas arba masyvas elementu
// validuoti props
Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
export default Card;
