import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

import classy from 'src/functions/classy.js';
import useToggle from 'src/hooks/use-toggle.js';

const BASE_URL = '/docs';

const DOCUMENTATION_SECTIONS = [
  {
    name: 'Introduction',
    to: ''
  },
  {
    type: 'group',
    name: 'Queries',
    to: '#queries',
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
    to: '#schemas',
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
  'uppercase text-gray-600 flex font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200 p-4 whitespace-nowrap',
  { activeClassName: 'border-l border-gray-200 text-gray-600 bg-gray-100' }
);

const CollapsibleNav = ({
  obj: { name, children, type, to },
  location,
  parent = { to: '' }
}) => {
  const [expanded, toggleExpanded] = useToggle();
  return (
    <div className='py-2 flex w-full'>
      <NavLink
        {...(to ? { to: `${parent.to}${to}` } : { onClick: toggleExpanded })}
        className={classNames(
          type === 'group' && 'text-blue-500 hover:text-blue-600'
        )}
      >
        {name}
      </NavLink>
      {expanded &&
        children &&
        children.length > 0 &&
        children.map((child, i) => <CollapsibleNav key={i} obj={child} />)}
    </div>
  );
};

export default () => {
  const location = useLocation();
  return (
    <div className='sticky top-0 lg:right-0 lg:p-4 lg:w-96 flex flex-col bg-gray-50 rounded shadow border border-gray-200'>
      {DOCUMENTATION_SECTIONS.map((obj, i) => (
        <CollapsibleNav key={i} location={location} obj={obj} />
      ))}
    </div>
  );
};
