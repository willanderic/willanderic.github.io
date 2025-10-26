import React from 'react'

export default function Details() {
  return (
    <section className="details">
      <h2>When & Where</h2>
      <p>
        <strong>Date:</strong> Saturday, October 3rd, 2026
      </p>
      {/* <p>
        <strong>Time:</strong> 4:00 PM
      </p> */}
      <p>
        <strong>Location:</strong> <a href="https://www.rocheharbor.com">Roche Harbor Resort</a>, San Juan Island, WA
      </p>
      <p className="note">Formal invitation to follow. <i><b>Stay tuned to this website for updates!</b></i></p>
    </section>
  )
}
