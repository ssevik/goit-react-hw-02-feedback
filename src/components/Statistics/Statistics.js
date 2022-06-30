import React from 'react';
import PropTypes from 'prop-types';
import { Item, Text, Numbers } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <ul>
      <Item>
        <Text>Good:</Text>
        <Numbers>{good}</Numbers>
      </Item>
      <Item>
        <Text>Neutral:</Text>
        <Numbers>{neutral}</Numbers>
      </Item>
      <Item>
        <Text>Bad:</Text>
        <Numbers>{bad}</Numbers>
      </Item>

      <Item>
        <Text>Total:</Text>
        <Numbers>{total}</Numbers>
      </Item>

      <Item>
        <Text>Positive Feedback:</Text>
        <Numbers>{percentage}%</Numbers>
      </Item>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistics;
