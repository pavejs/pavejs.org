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
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/docs'>
            <Docs />
          </Route>
          <Route path='/get-started'>
            <Docs />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  </div>
);
