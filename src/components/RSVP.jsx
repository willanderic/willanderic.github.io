export default function RSVP() {
  const rawGoogleUrl = import.meta.env.VITE_GOOGLE_FORM_URL

  // normalize to embed variant
  const googleFormUrl = (() => {
    if (!rawGoogleUrl) return null
    try {
      const u = new URL(rawGoogleUrl)
      u.searchParams.set('embedded', 'true')
      // remove common unsupported params
      if (u.searchParams.has('usp')) u.searchParams.delete('usp')
      return u.toString()
    } catch (e) {
      // fallback: append embedded=true
      return rawGoogleUrl.includes('?') ? rawGoogleUrl + '&embedded=true' : rawGoogleUrl + '?embedded=true'
    }
  })()

  return (
    <section className="rsvp">
      <div className="rsvp-header">
        <h2>RSVP</h2>
      </div>

       <div>
          <p>
            We've embedded our RSVP form below. If the embed doesn't work on your device you can{' '}
            <a href={rawGoogleUrl} target="_blank" rel="noreferrer">open the form in a new tab</a>.
          </p>
          <div className="google-form-embed">
            <iframe src={googleFormUrl} title="RSVP Form" width="100%" height="800" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
          </div>
        </div>
    </section>
  )
}
