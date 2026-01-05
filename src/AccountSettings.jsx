import './AccountSettings.css';

function AccountSettings({ onBack, userData }) {
  const user = {
    name: userData?.fullName || 'Marry Doe',
    email: userData?.email || 'Marry@Gmail.Com',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData?.fullName || 'Marry'}`,
    description: 'Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elit, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'
  };

  return (
    <div className="account-settings-container">
      <div className="account-settings-content">
        <h1 className="settings-title">Account Settings</h1>
        
        <div className="profile-section">
          <div className="profile-header">
            <div className="avatar-wrapper">
              <img src={user.avatar} alt={user.name} className="avatar-image" />
              <div className="verification-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#8c52ff"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            
            <div className="profile-info">
              <h2 className="user-name">{user.name}</h2>
              <p className="user-email">{user.email}</p>
            </div>
          </div>
          
          <p className="profile-description">
            {user.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;
