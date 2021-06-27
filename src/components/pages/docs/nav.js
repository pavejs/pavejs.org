import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import classy from 'src/functions/classy.js';
import slugify from 'src/functions/slugify.js';
import titleize from 'src/functions/titleize.js';
import useToggle from 'src/hooks/use-toggle.js';

const DELIM = ':';

const NavLink = classy(
  Link,
  'flex justify-between space-x-4 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200 whitespace-nowrap p-3',
  { activeClassName: 'border-l border-gray-200 text-gray-600 bg-gray-100' }
);

const CollapsibleNav = ({
  objKey,
  obj,
  obj: { name, children },
  depth = 0,
  parent
}) => {
  const [expanded, toggleExpanded] = useToggle(true);
  return (
    <>
      <NavLink
        {...(!children
          ? {
              to: `/docs#${
                parent ? `${slugify(parent.key)}${DELIM}` : ''
              }${slugify(objKey)}`
            }
          : { onClick: toggleExpanded, as: 'div' })}
        className={classNames(
          depth === 1
            ? 'pl-4'
            : depth === 2
            ? 'pl-6'
            : depth === 3
            ? 'pl-8'
            : '',
          children
            ? 'text-blue-500 hover:text-blue-600 uppercase font-bold text-sm'
            : 'text-gray-600 text-xs'
        )}
      >
        <span className='flex-1'>{name ?? titleize(objKey)}</span>
        {children && (
          <div style={{ width: '1rem', height: '1rem' }}>
            <img
              style={{ width: '1rem', height: '1rem' }}
              className={classNames(
                'transition-all transform flex',
                expanded ? 'rotate-90' : 'rotate-0'
              )}
              src='/svgs/chevron-right.svg'
            />
          </div>
        )}
      </NavLink>
      {expanded &&
        children &&
        Object.keys(children).length > 0 &&
        Object.entries(children).map(([key, val], i) => (
          <CollapsibleNav
            key={i}
            parent={{ ...obj, key: objKey }}
            depth={depth + 1}
            obj={val}
            objKey={key}
          />
        ))}
    </>
  );
};

export default ({ schema }) => {
  const location = useLocation();
  return (
    <div className='sticky top-0 lg:right-0 lg:p-4 lg:w-96 h-[min-content] flex flex-col bg-gray-50 rounded shadow border border-gray-200'>
      {Object.entries(schema).map(([key, obj], i) => (
        <CollapsibleNav key={i} location={location} objKey={key} obj={obj} />
      ))}
    </div>
  );
};
