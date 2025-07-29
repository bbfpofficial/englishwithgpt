import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Simple authentication - password is "acesso123"
    if (password === 'acesso123') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {isAuthenticated ? (
          <>
            <Header onLogout={handleLogout} />
            <Dashboard />
          </>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </AuthProvider>
  );
}

export default App;