import { Link } from 'react-router-dom';
import classy from 'src/functions/classy.js';
import Clickable from 'src/components/clickable.js';

const NavLink = classy(Link, 'uppercase text-gray-600 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200', { activeClassName: 'border-b border-gray-400 text-gray-400' });
const NavExternalLink = classy(Clickable, 'uppercase text-gray-600 font-semibold text-sm cursor-pointer hover:text-gray-500 hover:bg-gray-200');

export default () => (
  <div className='sticky bottom-0 w-full bg-gray-100 p-6'>
    <div className='flex items-center max-w-xl mx-auto space-x-8'>
      <Link to='/' className='font-bold text-lg'>[Pave Logo]</Link>
    </div>
  </div>
);
