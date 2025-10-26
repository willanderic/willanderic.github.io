import React from 'react'

const files = [
  // Users can add filenames here after uploading to /assets/uploads
  { name: 'Travel to Roche Harbor (PDF)', path: '/assets/uploads/travel.pdf' },
//   { name: 'Lodging (PDF)', path: '/assets/uploads/lodging.pdf' },
//   { name: 'Roche Harbor Resort Room Descriptions (PDF)', path: '/assets/uploads/room-descriptions.pdf' }
]


export default function FileLinks() {
  return (
    <section className="files">
      <h2>Additional Information</h2>
      <ul>
        {files.map((f, i) => (
          <li key={i}>
            <a href={f.path} target="_blank" rel="noreferrer">
              {f.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
