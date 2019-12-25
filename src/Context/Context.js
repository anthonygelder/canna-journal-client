import React, { Component } from 'react'

const Context = React.createContext({
    entries: [],
    entry: {},
    deleteEntry: () => {
    },
    addEntry: () => {
    },
    editEntry: () => {
    },
})

export default Context

export class EntryProvider extends Component {
    state = {
        entries: []
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
                {this.props.children}
            </Context.Provider>
        )
    }
}