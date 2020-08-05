import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './Home';
import { Resume } from './Resume';
import { Projects } from './Projects';
import { Films } from './Films';
import { About } from './About';
import { NoMatch } from './NoMatch';

import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

function App() {
  return (

    <React.Fragment>

      <NavigationBar />

      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={Projects} />
            <Route path="/films" component={Films} />
            <Route path="/about" component={About} />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>

  );
}

export default App;
