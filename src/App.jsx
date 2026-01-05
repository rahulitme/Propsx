import { useState } from 'react';
import './App.css';
import Login from './Login';
import CreateAccount from './CreateAccount';
import AccountSettings from './AccountSettings';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userData, setUserData] = useState(null);

  const handleCreateAccount = () => {
    setCurrentScreen('createAccount');
  };

  const handleLogin = () => {
    setCurrentScreen('login');
  };

  if (currentScreen === 'login') {
    return <Login 
      onBack={() => setCurrentScreen('welcome')} 
      onSuccess={(data) => {
        setUserData(data);
        setCurrentScreen('accountSettings');
      }}
    />;
  }

  if (currentScreen === 'createAccount') {
    return <CreateAccount 
      onBack={() => setCurrentScreen('welcome')} 
      onSuccess={(data) => {
        setUserData(data);
        setCurrentScreen('accountSettings');
      }}
    />;
  }

  if (currentScreen === 'accountSettings') {
    return <AccountSettings userData={userData} onBack={() => setCurrentScreen('welcome')} />;
  }

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        
        <div className="button-container">
          <button className="btn btn-primary" onClick={handleCreateAccount}>
            Create Account
          </button>
          <button className="btn btn-secondary" onClick={handleLogin}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
