import React from 'react'

export default function TerminalHistory({currstate, getOption}) {
    return <li>G:\Users\GUEST\{getOption(currstate)}</li>;
}