import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Footer from 'src/components/footer.js';
import Header from 'src/components/header.js';
import About from 'src/components/pages/about.js';
import Docs from 'src/components/pages/docs/index.js';
import Home from 'src/components/pages/home.js';
import Wrapper from 'src/components/wrapper.js';

export default () => (
  <div className='w-full h-full flex flex-col'>
    <Router>
      <Header />
      <Wrapper>
        <Switch>
          <Route sensitive path='/about'>
            <About />
          </Route>
          <Route sensitive path='/docs'>
            <Docs />
          </Route>
          <Route sensitive path='/get-started'>
            <Docs />
          </Route>
          <Route sensitive exact strict path='/'>
            <Home />
          </Route>
          <Route>
            <div className='flex flex-col text-lg space-y-2 flex-grow justify-center items-center'>
              <span className='uppercase font-bold text-4xl'>Not Found</span>
              The page you were looking for has either been deleted or never
              existed
            </div>
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  </div>
);
