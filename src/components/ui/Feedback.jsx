import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Feedback({ children, type, show }) {
  //
  if (show === false) return null;

  return (
    <Wrap feedbackType={type}>
      <Value>{children}</Value>
    </Wrap>
  );
}

Feedback.propTypes = {
  children: PropTypes.string,
  show: PropTypes.bool,
  type: PropTypes.oneOf(['error', 'success']),
};

const Wrap = styled.div`
  border: 1px solid #000;
  padding: 2rem;
  border-radius: 4;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  background-color: ${(props) => {
    return props.feedbackType === 'error' ? '#fce2de' : '#f5f5f5';
  }};
  border-color: ${(props) => {
    return props.feedbackType === 'error' ? 'tomato' : '#000';
  }};
  color: ${(props) => {
    return props.feedbackType === 'error' ? 'tomato' : '#000';
  }};
`;

const Value = styled.h3`
  font-weight: normal;
  font-size: 2.5rem;
  color: inherit;
`;

export default Feedback;
