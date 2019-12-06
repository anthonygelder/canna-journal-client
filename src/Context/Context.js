import React from 'react'

const Context = React.createContext({
    entries: [],
    deleteEntry: () => {
    },
    addEntry: () => {
    },
    editEntry: () => {
    },
})

export default Context