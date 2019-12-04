import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import EntryList from './EntryList/EntryList'
import Login from './Login/Login'
import Register from './Register/Register'
import AddEntry from './AddEntry/AddEntry'
import EditEntry from './EditEntry/EditEntry'
import EntryDetail from './EntryDetail/EntryDetail'
import './App.css'


class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <>
        <div className="header">
          <Route path='/' render={() => <Nav />} />
        </div>
        <div className="main">
          <Route exact path="/" render={() => <Landing />} />
          <Route exact path="/entries" render={() => <EntryList />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/addNew" render={() => <AddEntry />} />
          <Route exact path="/update" render={(routeProps) => <EditEntry entryId={routeProps}/>} />
          <Route exact path="/entries/:entry_id" render={(routeProps) => <EntryDetail entryId={routeProps}/>} />
        </div>
      </>
    );
  }
}

export default App;