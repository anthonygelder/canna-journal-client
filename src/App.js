import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import Context from './Context/Context'
import Nav from './Nav/Nav'
import Landing from './Landing/Landing'
import EntryList from './EntryList/EntryList'
import AddEntry from './AddEntry/AddEntry'
import EditEntry from './EditEntry/EditEntry'
import EntryDetail from './EntryDetail/EntryDetail'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry'
import './App.css'

const { API_ENDPOINT } = require('./config')

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: []
    }
  }

  // updating state when new entry is added
  addEntry = entry => {
    const newEntries = this.state.entries.push(entry)
    this.setState({
      entries: newEntries
    })
  }

  // updating state when entry is deleted
  deleteEntry = entryId => {
    const newEntries = this.state.entries.filter(entry => entry.id !== entryId)
    this.setState({
      entries: newEntries
    })
  }

  // updating state when entry is edited
  editEntry = entry => {
    const newEntries = this.state.entries.map(ety =>
      (ety.id === entry.id)
        ? entry
        : ety
    )
    this.setState({
      entries: newEntries
    })
  }

  // get all entries and set state on component mount
  componentDidMount() {
    fetch(`${API_ENDPOINT}`)
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
        <div className="container">
          <div className="header">
            <Route path='/' render={() => <Nav />} />
          </div>
          <ErrorBoundry>
            <div className="main">
              <Route exact path="/" render={() => <Landing />} />
              <Route exact path="/entries" render={(props) => <EntryList props={this.state} />} />
              <Route exact path="/addNew" render={(routeProps) => <AddEntry routeProps={routeProps}/>} />
              <Route exact path="/update/:entry_id" render={(routeProps) => <EditEntry routeProps={routeProps}/>} />
              <Route exact path="/entries/:entry_id" render={(routeProps) => <EntryDetail routeProps={routeProps} />} />
            </div>
          </ErrorBoundry>
        </div>
        <div className="footer">
        </div>
      </Context.Provider>
    );
  }
}

export default App;