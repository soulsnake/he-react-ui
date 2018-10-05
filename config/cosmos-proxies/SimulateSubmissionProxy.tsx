import React from 'react';

const sleep = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

type Props = {
  nextProxy: any;
  fixture: any;
};

export default class SimulateSubmissionProxy extends React.Component<
  Props,
  any
> {
  state = { done: false, submitting: false };

  onClick = () => {
    this.setState({ submitting: true, done: false });
    sleep(1000)
      .then(() => {
        this.setState({ submitting: false, done: true });
        return sleep(1000);
      })
      .then(() => {
        this.setState({ done: false });
        return sleep(1000);
      });
  };

  render() {
    const { nextProxy, fixture, ...nextProps } = this.props;

    const { onClick } = this;
    const { done, submitting } = this.state;

    const wrappedFixture = fixture.simulateSubmission
      ? {
          ...fixture,
          props: { ...fixture.props, onClick, done, submitting },
        }
      : fixture;

    return (
      <nextProxy.value
        {...nextProps}
        nextProxy={nextProxy.next()}
        fixture={wrappedFixture}
      />
    );
  }
}
