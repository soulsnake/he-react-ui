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
    onChangeStep: PropTypes.func,
    left: PropTypes.string,
    top: PropTypes.string,
    reversed: PropTypes.bool,
  };

  static defaultProps = {
    showing: false,
    onChangeStep: e => null,
    top: 0,
    left: 0,
    reversed: false,
  };

  state = {
    showing: this.props.showing,
    currentStep: -1,
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
    this.nextStep();
  };

  nextStep = () => {
    const { tutorialStages } = this.props;

    this.setState({
      currentStep: this.state.currentStep + 1,
    });
    this.props.onChangeStep(tutorialStages.steps[this.state.currentStep + 1]);
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
      <h3 className={styles.tutorialHeader}>{steps[i].header}</h3>

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
    const {
      className,
      tutorialStages,
      style,
      top,
      reversed,
      left,
    } = this.props;
    const { currentStep, currentStage } = this.state;
    const popupClasses = classnames(styles.popup, className, {
      [styles.popupCentered]: currentStage === 'intro',
    });
    let wrapperStyle = {};
    let arrowStyle = {};
    let rightOverlay = {};
    let leftOverlay = {};
    let steps = null;
    let newTop = top - 75;
    const popup = document.getElementById('tutorialPopup');
    if (currentStage === 'steps' && tutorialStages[currentStage]) {
      steps = tutorialStages[currentStage];
      if (popup && reversed) {
        newTop -= popup.getBoundingClientRect().height - 150;
        arrowStyle = {
          top: popup.getBoundingClientRect().height - 75,
        };
      }
      wrapperStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: newTop,
        left,
        right: 'auto',
        transition: 'all 0.2s',
      };
      rightOverlay = {
        left,
      };
      leftOverlay = {
        width: left,
      };
    } else {
      wrapperStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        transition: 'all 0.2s',
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
          <div className={popupClasses} id="tutorialPopup" style={style}>
            <Icon
              className={styles.close}
              name="Cross"
              onClick={this.handleClose}
            />
            {steps
              ? this.renderSteps(currentStep, steps)
              : this.renderIntro(tutorialStages[currentStage])}
          </div>
          {steps && (
            <Icon
              className={classnames(styles.arrow, {
                [styles.reversed]: reversed,
              })}
              style={arrowStyle}
              name="CurvedArrow"
            />
          )}
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
