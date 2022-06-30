import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackBtn.styled';

const FeedbackBtn = ({ options, btnClick }) => {
  return options.map(option => (
    <Btn key={option} type="button" onClick={() => btnClick(option)}>
      {option}
    </Btn>
  ));
};

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  btnClick: PropTypes.func.isRequired,
};

export default FeedbackBtn;
