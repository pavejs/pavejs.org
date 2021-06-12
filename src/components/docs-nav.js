import classNames from 'classnames';
import { useLocation, Link } from 'react-router-dom';

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
            },
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
            },
        ]
    }
];

const NavLink = classy(Link, 'uppercase text-gray-600 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200', { activeClassName: 'border-l border-gray-200 text-gray-600 bg-gray-100' });

const CollapsibleNav = ({ obj: { name, children, type, to }, location, parent = { to: '' } }) => {
    const [expanded, toggleExpanded] = useToggle();
    return (
        <div className='py-2'>
            <NavLink {...(to ? { to: `${parent.to}${to}` } : { onClick: toggleExpanded })} className={classNames(type === 'group' && 'mt-4 text-blue-500 hover:text-blue-600')} key={i}>
                {name}
            </NavLink>
            {expanded && children && children.length > 0 && children.map((child, i) => <CollapsibleNav key={i} obj={child} />)}
        </div>
    );
}

export default () => {
    const url = useLocation();
    return (
        <div className='sticky lg:h-full top-0 lg:left-0 lg:w-48 lg:p-6 bg-gray-50'>
            {DOCUMENTATION_SECTIONS.map((obj, i) => <CollapsibleNav key={i} location={location} obj={obj} />)}
        </div>
    );
};