import React from 'react'

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