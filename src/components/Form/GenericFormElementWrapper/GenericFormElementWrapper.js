/**
 *
 * GenericFormElementWrapper
 *
 */

import React from "react";
import PropTypes from "prop-types";

class GenericFormElementWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    component: PropTypes.func,
    props: PropTypes.object
  };
  constructor(props) {
    super(props);

    this.state = {
      value: "0"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(data) {
    this.setState({ value: data.value });
  }
  render() {
    const props = this.props.props;
    const { value } = this.state;
    const MyComponent = this.props.component;
    return (
      <MyComponent {...props} onChange={this.handleChange} value={value} />
    );
  }
}

export default GenericFormElementWrapper;
