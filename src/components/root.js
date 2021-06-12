import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'src/components/header.js';

const Home = () => <div>Home</div>;
const Docs = () => <div>Docs</div>;
const About = () => <div>About</div>;

export default () => (
  <div className='w-full h-full'>
    <Router>
      <Header />
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
    </Router>
  </div>
);