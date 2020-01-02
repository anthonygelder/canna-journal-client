import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import EntryList from './EntryList/EntryList'
import AddEntry from './AddEntry/AddEntry'
import EditEntry from './EditEntry/EditEntry'
import EntryDetail from './EntryDetail/EntryDetail'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
import './App.css'

class App extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="header">
            <Route path='/' render={() => <Nav />} />
          </div>
          <ErrorBoundry>
            <div className="main">
              <Route exact path="/" render={() => <Landing />} />
              <Route exact path="/entries" render={() => <EntryList />} />
              <Route exact path="/addNew" render={(routeProps) => <AddEntry routeProps={routeProps}/>} />
              <Route exact path="/update/:entry_id" render={(routeProps) => <EditEntry routeProps={routeProps}/>} />
              <Route exact path="/entries/:entry_id" render={(routeProps) => <EntryDetail routeProps={routeProps} />} />
            </div>
          </ErrorBoundry>
        </div>
        <div className="footer">
        </div>
      </>
    );
  }
}

export default App;