import React, {Component} from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
