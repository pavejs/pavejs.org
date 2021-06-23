import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import classy from 'src/functions/classy.js';
import useToggle from 'src/hooks/use-toggle.js';

const DELIM = ':';

const DOCUMENTATION_SECTIONS = [
  {
    name: 'Introduction',
    to: 'introduction'
  },
  {
    type: 'group',
    name: 'Queries',
    toPrefix: 'queries',
    children: [
      {
        name: 'Arguments',
        to: 'arguments'
      },
      {
        name: 'Fields',
        to: 'fields'
      },
      {
        name: 'Aliases',
        to: 'aliases'
      }
    ]
  },
  {
    type: 'group',
    name: 'Schemas and Types',
    toPrefix: 'schemas',
    children: [
      {
        name: 'Arguments',
        to: 'arguments'
      },
      {
        name: 'Fields',
        to: 'fields'
      },
      {
        name: 'Aliases',
        to: 'aliases'
      }
    ]
  }
];

const NavLink = classy(
  Link,
  'flex justify-between space-x-4 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200 whitespace-nowrap p-3',
  { activeClassName: 'border-l border-gray-200 text-gray-600 bg-gray-100' }
);

const CollapsibleNav = ({
  obj,
  obj: { name, children, type, to },
  depth = 0,
  parent
}) => {
  const [expanded, toggleExpanded] = useToggle(true);
  return (
    <>
      <NavLink
        {...(to
          ? {
              to: `/docs#${
                parent?.toPrefix ? `${parent.toPrefix}${DELIM}` : ''
              }${to}`
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
          type === 'group'
            ? 'text-blue-500 hover:text-blue-600 uppercase font-bold text-sm'
            : 'text-gray-600 text-xs'
        )}
      >
        <span className='flex-1'>{name}</span>
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
        children.length > 0 &&
        children.map((child, i) => (
          <CollapsibleNav key={i} parent={obj} depth={depth + 1} obj={child} />
        ))}
    </>
  );
};

export default () => {
  const location = useLocation();
  return (
    <div className='sticky top-0 lg:right-0 lg:p-4 lg:w-96 h-[min-content] flex flex-col bg-gray-50 rounded shadow border border-gray-200'>
      {DOCUMENTATION_SECTIONS.map((obj, i) => (
        <CollapsibleNav key={i} location={location} obj={obj} />
      ))}
    </div>
  );
};
