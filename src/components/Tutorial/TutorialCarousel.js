// @flow
import React from 'react';
import CarouselIndicator from '../Layout/CarouselIndicator/CarouselIndicator';
import withTutorial from './withTutorial';

type Props = {
  onTutorialJump: Function,
  onTutorialAdvance: Function,
  tutorialIndex: number,
  tutorialSteps: string[],

  className: string,
};

export default withTutorial((props: Props) => (
  <CarouselIndicator
    className={props.className}
    length={props.tutorialSteps.length}
    current={props.tutorialIndex}
    nextStep={props.onTutorialAdvance}
    onDotClick={index => {
      props.onTutorialJump(props.tutorialSteps[index]);
    }}
  />
));
