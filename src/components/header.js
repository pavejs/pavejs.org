import { Link } from 'react-router-dom';
import classy from 'src/functions/classy.js';
import Clickable from 'src/components/clickable.js';

const NavLink = classy(Link, 'uppercase text-gray-600 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200 p-6', { activeClassName: 'active' });
const NavExternalLink = classy(Clickable, 'p-6 uppercase text-gray-600 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200');

export default () => (
  <div className='sticky top-0 w-full bg-gray-100'>
    <div className='flex items-center max-w-screen-xl mx-auto space-x-8'>
      <Link to='/' className='font-bold text-lg'>[Pave Logo]</Link>
      <div className='flex flex-1'>
        <NavLink to='/get-started'>
          Get Started
        </NavLink>
        <NavLink to='/docs'>
          Docs
        </NavLink>
      </div>
      <div className='flex space-x-6'>
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
