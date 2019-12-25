import React, { Component } from 'react'

const EntryListContext = React.createContext({
    entries: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setEntries: () => {},
})
export default EntryListContext

export class EntryListProvider extends Component {
    state = {
        entries: [],
        error: null,
    };

    setEntries = entries => {
        this.setState({ entries })
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            entries: this.state.entries,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setEntries: this.setEntries,
        }
        return (
        <EntryListContext.Provider value={value}>
            {this.props.children}
        </EntryListContext.Provider>
        )
    }
}
