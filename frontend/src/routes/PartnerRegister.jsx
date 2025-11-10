import React from 'react'
import '../styles/auth.css'

const PartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-header">
          <div className="brand-mark">P</div>
          <div>
            <h3 className="auth-title">Partner sign up</h3>
            <div className="auth-sub">Register as a food partner</div>
          </div>
        </div>

        <form className="auth-form" onSubmit={(e)=>e.preventDefault()}>
          <div className="field">
            <label htmlFor="businessName">Business name</label>
            <input id="businessName" name="businessName" className="input" placeholder="Tasty Eats" />
          </div>
          <div className="field">
            <label htmlFor="email">Contact email</label>
            <input id="email" name="email" className="input" placeholder="owner@tastyeats.com" />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone (no country code)</label>
            <input id="phone" name="phone" className="input" inputMode="tel" pattern="[0-9]*" placeholder="555555555" />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" name="password" className="input" type="password" placeholder="Min 8 characters" />
          </div>

          <div className="actions">
            <a className="muted-link" href="#">Already partner? Sign in</a>
            <button className="btn btn-primary">Create account</button>
          </div>
        </form>

        <div className="divider" />
        <div className="help">We'll review your application and contact you via email.</div>
      </div>
    </div>
  )
}

export default PartnerRegister
