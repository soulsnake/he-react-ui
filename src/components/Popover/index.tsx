import React from 'react';
import { Tooltip as Tippy } from 'react-tippy';
import style from './index.scss';
import PopoverDisplay from './PopoverDisplay';

type Props = {
  children?: any;
  content?: any;
  preferRight?: boolean;
  triggerOnClick?: boolean;
  tooltip?: boolean;
  light?: boolean;
  className?: string;
};

export default class Popover extends React.Component<Props, any> {
  state = {
    fullyMounted: false,
  };

  notifyMount = (node: Node | null) => {
    if (node) {
      this.setState({ fullyMounted: true });
    }
  };

  render() {
    const {
      preferRight,
      content,
      children,
      triggerOnClick,
      tooltip,
      className,
      light,
    } = this.props;

    return (
      <React.Fragment>
        <Tippy
          disabled={!this.state.fullyMounted}
          interactive={!tooltip}
          delay={100}
          hideDelay={300}
          interactiveBorder={16}
          trigger={triggerOnClick ? 'click' : 'mouseenter'}
          html={
            <PopoverDisplay
              light={light}
              className={className}
              tooltip={tooltip}
            >
              {content}
            </PopoverDisplay>
          }
          position={preferRight ? 'bottom-end' : 'bottom-start'}
        >
          {children}
        </Tippy>

        {!this.state.fullyMounted && (
          <span ref={this.notifyMount} className={style.hidden} />
        )}
      </React.Fragment>
    );
  }
}
