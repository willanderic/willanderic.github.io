import React from 'react'

export default function Header() {
  return (
    <header className="site-header">
      <div className="hero">
        <img src="/assets/couple.jpg" alt="Couple" className="hero-image" />
        <div className="hero-text">
          <div className="hero-names"><span className="hero-line">Eric & William</span></div>
          <h1><span className="hero-line">We're Getting Married!</span></h1>
          <p><span className="hero-line">Join us to celebrate</span></p>
        </div>
      </div>
    </header>
  )
}
