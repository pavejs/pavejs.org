import { render } from 'react-dom';

import Root from 'src/components/root.js';

const { document } = window;

export default () => render(<Root />, document.getElementById('root'));