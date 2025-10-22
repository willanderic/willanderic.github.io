import React from 'react'
import Header from './components/Header'
import Details from './components/Details'
import QandA from './components/QandA'
import FileLinks from './components/FileLinks'
import RSVP from './components/RSVP'

export default function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Details />
        <QandA />
        <RSVP />
        <FileLinks />
      </main>
    </div>
  )
}
