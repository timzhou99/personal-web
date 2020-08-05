import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Films from './components/Films';
import About from './components/About';
import NoMatch from './components/NoMatch';

import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

class App extends Component {

  render() {
    return (

      <React.Fragment>

        <NavigationBar/>

        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>

            <Route path="/resume" component={Resume}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/films" component={Films}/>
            <Route path="/about" component={About}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>

      </React.Fragment>

    )
  }
}

export default App;
