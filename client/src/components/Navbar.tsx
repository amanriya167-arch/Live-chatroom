import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/dashboard" className="navbar-brand">
          Achat
        </Link>

        <div className="navbar-nav">
          <Link
            to="/dashboard"
            className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
          >
            🏠 Dashboard
          </Link>
          
          <Link
            to="/profile"
            className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
          >
            👤 Profile
          </Link>
          
          <Link
            to="/wallet"
            className={`nav-link ${isActive('/wallet') ? 'active' : ''}`}
          >
            💰 Wallet
          </Link>

          <div className="user-menu">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '8px',
                background: showUserMenu ? 'rgba(102, 126, 234, 0.1)' : 'transparent'
              }}
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <img
                src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.username}&background=667eea&color=fff`}
                alt={user?.username}
                className="user-avatar"
              />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontWeight: '600', fontSize: '14px' }}>
                  {user?.username}
                </span>
                <span style={{ fontSize: '12px', color: '#666' }}>
                  {user?.coins} coins
                </span>
              </div>
              <span style={{ fontSize: '12px', color: '#666' }}>
                {showUserMenu ? '▲' : '▼'}
              </span>
            </div>

            {showUserMenu && (
              <div className="dropdown-menu">
                <Link
                  to="/profile"
                  className="dropdown-item"
                  onClick={() => setShowUserMenu(false)}
                >
                  👤 My Profile
                </Link>
                <Link
                  to="/wallet"
                  className="dropdown-item"
                  onClick={() => setShowUserMenu(false)}
                >
                  💰 Wallet
                </Link>
                <div
                  className="dropdown-item"
                  style={{ borderTop: '1px solid #e9ecef', marginTop: '5px', paddingTop: '10px' }}
                >
                  ⚙️ Settings
                </div>
                <div
                  className="dropdown-item"
                  onClick={handleLogout}
                  style={{ color: '#dc3545', cursor: 'pointer' }}
                >
                  🚪 Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;