import Header from './components/Header'
import Details from './components/Details'
import QandA from './components/QandA'

import FileLinks from './components/FileLinks'
import RSVP from './components/RSVP'
import CountdownTimer from './components/CountdownTimer'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <main>
          <Details />
          <CountdownTimer targetDate="2026-10-03T00:00:00" />
          <QandA />
          <FileLinks />
          {/* <RSVP /> */}
        </main>
      </div>
      <hr className="section-divider" />
      <Footer />
    </>
  )
}
