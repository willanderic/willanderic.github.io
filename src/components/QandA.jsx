import React, { useState, useMemo } from 'react'
import { marked } from 'marked'

// Specify the static order of Q&A markdown files (filenames only)
const QA_ORDER = [
    'travel.md',
    'where-to-stay.md',
    'attire.md',
    'indoors-outdoors.md',
    'allergies.md',
    '+1.md',
    // Add more filenames as needed, in desired order
]

// Load all markdown files from ../content/qa as raw text (eagerly).
const modules = import.meta.glob('../content/qa/*.md', { eager: true, as: 'raw' })

function parseMd(path, raw) {
  const lines = raw.split(/\r?\n/)
  // find first header line
  let q = 'Question'
  let startIndex = 0
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.startsWith('#')) {
      q = line.replace(/^#+\s*/, '')
      startIndex = i + 1
      break
    }
    if (line.length > 0) { // non-empty but no header -> treat as q
      q = line
      startIndex = i + 1
      break
    }
  }
  const body = lines.slice(startIndex).join('\n')
  return { q, body, path }
}

export default function QandA() {
  const [open, setOpen] = useState(null)

  const items = useMemo(() => {
    // Parse all items
    const parsed = Object.entries(modules).map(([path, raw]) => parseMd(path, raw))
    // Sort by QA_ORDER
    return QA_ORDER
      .map(filename => parsed.find(item => item.path.endsWith(filename)))
      .filter(Boolean)
  }, [])

  return (
    <section className="qa">
      <h2>Q & A</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx} className="qa-item">
            <button className="qa-q" onClick={() => setOpen(open === idx ? null : idx)}>
              {item.q}
            </button>
            {open === idx && (
              <div
                className="qa-a"
                dangerouslySetInnerHTML={{ __html: marked.parse(item.body || '') }}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
