import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Room from './components/Room';
import Profile from './components/Profile';
import Wallet from './components/Wallet';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { SocketProvider } from './contexts/SocketContext';
import './App.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppContent />
        </div>
      </Router>
    </AuthProvider>
  );
};

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route 
        path="/login" 
        element={!user ? <Login /> : <Navigate to="/dashboard" />} 
      />
      <Route 
        path="/dashboard" 
        element={user ? (
          <SocketProvider>
            <Dashboard />
          </SocketProvider>
        ) : <Navigate to="/login" />} 
      />
      <Route 
        path="/room/:roomId" 
        element={user ? (
          <SocketProvider>
            <Room />
          </SocketProvider>
        ) : <Navigate to="/login" />} 
      />
      <Route 
        path="/profile" 
        element={user ? <Profile /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/wallet" 
        element={user ? <Wallet /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/" 
        element={<Navigate to={user ? "/dashboard" : "/login"} />} 
      />
    </Routes>
  );
};

export default App;