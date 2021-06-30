import classNames from 'classnames';
import { forwardRef } from 'react';

export default (component, className, props) =>
  forwardRef(({ as: Component = component, ...props2 }, ref) => (
    <Component
      {...props}
      {...props2}
      className={classNames(className, props2.className)}
      ref={ref}
      style={{ ...props?.style, ...props2.style }}
    />
  ));
