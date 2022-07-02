import React, { Component } from 'react';

import FeedbackBtn from './components/FeedbackBtn/FeedbackBtn';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';
import Section from './components/Section/Section';

import { Wrapper } from './components/common/wrapper';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnClick = key => {
    this.setState(prev => {
      return {
        [key]: prev[key] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Wrapper
        as="main"
        bg="background"
        pt={7}
        pb={7}
        mt={0}
        mb={0}
        mr="auto"
        ml="auto"
        width="600px"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Section title="Please leave feedback">
          <FeedbackBtn
            options={Object.keys(this.state)}
            btnClick={this.btnClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default App;
