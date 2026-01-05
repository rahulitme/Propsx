import { useState } from 'react';
import './Login.css';

function Login({ onBack, onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    // Navigate to account settings after successful login
    if (onSuccess) {
      onSuccess({ email, fullName: email.split('@')[0] });
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Signin to your PopX account</h1>
        <p className="login-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="btn btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
