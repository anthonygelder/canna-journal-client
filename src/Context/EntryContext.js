const contextValue = {
    entries: this.state.entries,
    deleteEntry: this.deleteEntry,
    addEntry: this.addEntry,
    editEntry: this.editEntry
  }

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