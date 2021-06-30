import classNames from 'classnames';

export default ({ className, children }) => (
  <div
    className={classNames(
      'max-w-screen-xl mx-auto px-6 pb-6 flex flex-grow',
      className
    )}
  >
    {children}
  </div>
);
