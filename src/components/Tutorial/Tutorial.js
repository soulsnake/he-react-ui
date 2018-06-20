/**
 *
 * Tutorial
 *
 */
import classnames from 'classnames';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import LoadingSpinner from '../Loading/LoadingSpinner';
import Button from '../Form/Button';
import CheckBox from '../Form/CheckBox';
import styles from './Tutorial.scss';
import CarouselIndicator from '../Layout/CarouselIndicator';

class Tutorial extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    showing: PropTypes.bool,
    style: PropTypes.object,
    tutorialStages: PropTypes.object,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    showing: false,
  };

  state = {
    showing: this.props.showing,
    currentStep: 0,
    currentStage: 'intro',
  };

  handleClose = () => {
    this.setState({
      showing: false,
    });
    this.props.onClose();
  };

  takeTheTour = () => {
    this.setState({
      currentStage: 'steps',
    });
  };

  nextStep = () => {
    this.setState({
      currentStep: this.state.currentStep + 1,
    });
  };

  renderIntro = intro => (
    <Fragment>
      {intro.header}
      <Button onClick={this.takeTheTour}>Take the tour</Button>
      <br />
      <Button link onClick={this.handleClose}>
        Not now
      </Button>
      {intro.content}
    </Fragment>
  );

  renderSteps = (i, steps) => (
    <div className={styles.tutorialWrapper}>
      <h3 className={styles.tutorialHeaderWrapper}>{steps[i].header}</h3>

      {steps[i].content || <LoadingSpinner />}

      {i < steps.length - 1 ? (
        <CarouselIndicator
          className={styles.tutorialIndicator}
          length={steps.length}
          current={i}
          nextStep={this.nextStep}
        />
      ) : (
        <div className={styles.tutorialIntroFooter}>
          <div className={styles.footerCell}>
            <CheckBox
              id="neverShowAgain"
              name="neverShowAgain"
              className={styles.leftElement}
              label="Do not show me this again"
            />
          </div>
          <div className={styles.footerCell}>
            <Button className={styles.rightElement} link>
              Got it!
            </Button>
          </div>
        </div>
      )}
    </div>
  );
  renderContent = () => {
    const { className, tutorialStages, style } = this.props;
    const { currentStep, currentStage } = this.state;
    const popupClasses = classnames(styles.popup, className);
    let wrapperStyle = {};
    let rightOverlay = {};
    let leftOverlay = {};
    let steps = null;

    if (currentStage === 'steps' && tutorialStages[currentStage]) {
      steps = tutorialStages[currentStage];
      wrapperStyle = {
        position: 'absolute',
        width: '100%',
        top: steps[currentStep].top,
        left: steps[currentStep].left,
      };
      rightOverlay = {
        left: steps[currentStep].left,
      };
      leftOverlay = {
        width: steps[currentStep].left,
      };
    }

    return (
      <Fragment>
        <div
          className={styles.transparentOverlay}
          style={leftOverlay}
          onClick={this.handleClose}
        />
        <div
          className={styles.overlay}
          style={rightOverlay}
          onClick={this.handleClose}
        />
        <div style={wrapperStyle}>
          <div className={popupClasses} style={style}>
            <Icon
              className={styles.close}
              name="Cross"
              onClick={this.handleClose}
            />
            {steps
              ? this.renderSteps(currentStep, steps)
              : this.renderIntro(tutorialStages[currentStage])}
          </div>
          <Icon className={styles.arrow} name="CurvedArrow" />
        </div>
      </Fragment>
    );
  };
  render() {
    const { tutorialStages, ...restProps } = this.props;

    if (!tutorialStages) {
      return null;
    }
    const classes = classnames(styles.outer, {
      [styles.showing]: this.state.showing,
    });
    return (
      <div className={classes} {...restProps}>
        {this.renderContent()}
      </div>
    );
  }
}

export default Tutorial;
