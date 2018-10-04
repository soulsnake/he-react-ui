import classnames from 'classnames';
import React from 'react';
import styles from './PopoverDisplay.module.scss';

export default function PopoverDisplay(props: {
  children: any;
  tooltip?: boolean;
  className?: string;
  light?: boolean;
}) {
  const { children, tooltip, className, light } = props;

  const tooltipStyle = tooltip && styles.tooltip;

  return (
    <div
      role="tooltip"
      className={classnames(
        styles.popover,
        tooltipStyle,
        className,
        light && styles.light,
      )}
    >
      <div className={classnames(styles.content, tooltipStyle)}>{children}</div>
    </div>
  );
}
