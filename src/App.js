import React, {Component} from 'react'
import { Route } from 'react-router-dom';
import Context from './Context/Context'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import EntryList from './EntryList/EntryList'
import Login from './Login/Login'
import Register from './Register/Register'
import AddEntry from './AddEntry/AddEntry'
import EditEntry from './EditEntry/EditEntry'
import EntryDetail from './EntryDetail/EntryDetail'
import './App.css'

const { DB_URL } = require('./config')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  addEntry = entry => {
    this.setState({
      entries: [...this.state.entries, entry]
    })
  }

  deleteEntry = entryId => {
    const newEntries = this.state.entries.filter(entry => entry.id !== entryId)
    this.setState({
      entries: newEntries
    })
  }

  editEntry = entry => {
    console.log('edit')
    const newEntries = this.state.entries.map(ety =>
      (ety.id === entry.id)
        ? entry
        : ety
    )
    this.setState({
      entries: newEntries
    })
  }

  componentDidMount() {
    fetch(`${DB_URL}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          entries: data
        })
    })
  }
  render() {
    const contextValue = {
      entries: this.state.entries,
      deleteEntry: this.deleteEntry,
      addEntry: this.addEntry,
      editEntry: this.editEntry
    }
    return (
      <Context.Provider value={contextValue}>
        <>
          <div className="header">
            <Route path='/' render={() => <Nav />} />
          </div>
          <div className="main">
            <Route exact path="/" render={() => <Landing />} />
            <Route exact path="/entries" render={(props) => <EntryList />} />
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="/register" render={() => <Register />} />
            <Route exact path="/addNew" render={(routeProps) => <AddEntry routeProps={routeProps}/>} />
            <Route exact path="/update/:entry_id" render={(routeProps) => <EditEntry routeProps={routeProps}/>} />
            <Route exact path="/entries/:entry_id" render={(routeProps) => <EntryDetail routeProps={routeProps} />} />
          </div>
        </>
      </Context.Provider>
    );
  }
}

export default App;