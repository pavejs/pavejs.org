import { Link } from 'react-router-dom';
import classy from 'src/functions/classy.js';
import Clickable from 'src/components/clickable.js';

const NavLink = classy(Link, 'uppercase text-gray-600 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200', { activeClassName: 'border-b border-gray-400 text-gray-400' });

export default () => (
  <div className='sticky top-0 w-full flex bg-gray-100 items-center p-6 space-x-8'>
    <Link to='/' className='font-bold text-lg'>[Pave Logo]</Link>
    <div className='flex flex-1 space-x-6'>
      <NavLink to='/get-started'>
        Get Started
      </NavLink>
      <NavLink to='/docs'>
        Docs
      </NavLink>
    </div>
    <div className='flex space-x-6'>
      <Clickable href='https://www.npmjs.com/package/pave'>
        npm
      </Clickable>
      <Clickable href='https://www.github.com/caseywebdev/pave'>
        github
      </Clickable>
    </div>
  </div>
);
