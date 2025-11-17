import React from 'react'
import '../../../styles/auth.css'

const Profile = () => {
  const videos = new Array(6).fill(0)

  return (
    <div className="auth-page">
      <div className="profile-outer">
        <div className="auth-card profile-card">
          <div className="profile-inner">
            <div className="profile-header">
              <div className="profile-avatar" aria-hidden>BP</div>
              <div className="profile-meta">
                <div className="pill business">Business Name</div>
                <div className="pill muted">Address</div>
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat">
                <div className="stat-label">total meals</div>
                <div className="stat-value">43</div>
              </div>
              <div className="stat">
                <div className="stat-label">customer serve</div>
                <div className="stat-value">15K</div>
              </div>
            </div>

            <div className="divider" />
          </div>

          <div className="video-panel">
            <div className="video-grid">
              {videos.map((_, i) => (
                <div key={i} className="video-card">video</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
