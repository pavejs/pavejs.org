import classNames from 'classnames';

export default ({ href, children, ...props }) => (
    <div onClick={() => window.location.replace(href)} className={classNames('cursor-pointer text-gray-600 hover:text-gray-500', props.className)} {...props}>
        {children}
    </div>
);