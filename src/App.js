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
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />

            <Route path={process.env.PUBLIC_URL + "/resume"} component={Resume} />
            <Route path={process.env.PUBLIC_URL + "/projects"} component={Projects} />
            <Route path={process.env.PUBLIC_URL + "/films"} component={Films} />
            <Route path={process.env.PUBLIC_URL + "/about"} component={About} />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>

  );
}

export default App;
