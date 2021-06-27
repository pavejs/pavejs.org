import { Link } from 'react-router-dom';

import versions from 'src/archive/index.js';
import Clickable from 'src/components/clickable.js';
import classy from 'src/functions/classy.js';

const NavLink = classy(
  Link,
  'uppercase text-gray-600 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200 p-6',
  { activeClassName: 'active' }
);
const NavExternalLink = classy(
  Clickable,
  'p-6 uppercase text-gray-600 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200'
);

export default ({ version, setVersion }) => (
  <div className='sticky top-0 w-full bg-gray-100'>
    <div className='flex items-center max-w-screen-xl mx-auto space-x-8 px-6'>
      <Link to='/' className='font-bold text-lg'>
        [Pave Logo]
      </Link>
      <div className='flex-1 md:flex hidden'>
        <NavLink to='/get-started'>Get Started</NavLink>
        <NavLink to='/docs'>Docs</NavLink>
      </div>
      <div className='flex space-x-2'>
        <strong>Version</strong>
        <select
          className='rounded border'
          value={version}
          onChange={setVersion}
        >
          {Object.keys(versions).map(date => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
      <div className='md:flex hidden'>
        <NavExternalLink href='https://www.codepen.com/'>
          Sandbox
        </NavExternalLink>
        <NavExternalLink href='https://www.npmjs.com/package/pave'>
          npm
        </NavExternalLink>
        <NavExternalLink href='https://www.github.com/caseywebdev/pave'>
          github
        </NavExternalLink>
      </div>
    </div>
  </div>
);
