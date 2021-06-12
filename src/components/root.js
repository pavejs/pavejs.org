import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'src/components/header.js';
import Wrapper from 'src/components/wrapper.js';
import Footer from 'src/components/footer.js';
import Home from 'src/components/pages/home.js';
import Docs from 'src/components/pages/docs.js';
import About from 'src/components/pages/about.js';

export default () => (
  <div className='w-full h-full'>
    <Router>
      <Header />
      <Wrapper>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/docs">
            <Docs />
          </Route>
          <Route path="/get-started">
            <Docs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </Router>
  </div>
);