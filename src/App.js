import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav/Nav'
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import Landing from './Landing/Landing'
import EntryList from './EntryList/EntryList'
import AddEntry from './AddEntry/AddEntry'
import EditEntry from './EditEntry/EditEntry'
import EntryDetail from './EntryDetail/EntryDetail'
import './App.css'

class App extends Component {
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
        <div className="container">
          <header className="header">
            <Route path='/' render={() => <Nav />} />
          </header>
          <main className="main">
            {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
            <Switch>
              <Route exact path="/" component={Landing} />
              <PublicOnlyRoute path="/login" component={LoginPage}/>
              <PublicOnlyRoute path="/register" component={RegistrationPage}/>
              <PublicOnlyRoute path="/entries" render={(props) => <EntryList props={this.state} />} />
              <PrivateRoute path="/addNew" render={(routeProps) => <AddEntry routeProps={routeProps}/>} />
              <PrivateRoute path="/update/:entry_id" render={(routeProps) => <EditEntry routeProps={routeProps}/>} />
              <PrivateRoute path="/entries/:entry_id" render={(routeProps) => <EntryDetail routeProps={routeProps} />} />
            </Switch>
          </main>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;