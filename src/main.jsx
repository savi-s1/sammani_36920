import React from 'react';
import { createRoot } from 'react-dom/client';
import { Mail, Star, Plus, Check } from 'lucide-react';
import './styles.css';

function App() {
  const profile = {
    name: 'Savidya Sammani',
    email: 'savidyasammani0727@gmail.com',
    points: 0,
  };

  return (
    <div className="page">
      <main className="phone" aria-label="My Profile">
        <header className="topbar">
          <span className="title">My Profile</span>
          <span className="status-icons" aria-hidden="true">
            <span className="signal">▴</span>
            <span className="wifi">⌁</span>
            <span className="battery">▮</span>
          </span>
        </header>

        <section className="content">
          <div className="avatar" aria-label="Profile avatar">
            <img
              className="profile-image"
              src="/profile-image.png"
              alt="Profile"
            />
            <div className="check"><Check size={35} strokeWidth={4} /></div>
          </div>

          <div className="divider" />

          <div className="details">
            <Info label="Name" value={profile.name} />
            <div className="field email-field">
              <div className="label">Email</div>
              <div className="value email-value"><Mail size={15} fill="currentColor" />{profile.email}</div>
            </div>
            <div className="field points-field">
              <div className="label">Points</div>
              <div className="value points-value"><Star size={16} fill="currentColor" />{profile.points}</div>
            </div>
          </div>

          <button className="add-button" aria-label="Add" onClick={() => alert('Add button clicked')}>
            <Plus size={28} strokeWidth={2.3} />
          </button>
        </section>

        <div className="home-indicator" />
      </main>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="field">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
