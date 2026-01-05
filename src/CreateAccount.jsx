import { useState } from 'react';
import './CreateAccount.css';

function CreateAccount({ onBack, onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'no'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Create Account:', formData);
    // Navigate to account settings after successful creation
    if (onSuccess) {
      onSuccess(formData);
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-content">
        <h1 className="create-account-title">Create your PopX account</h1>
        
        <form onSubmit={handleSubmit} className="create-account-form">
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="form-input"
              placeholder="Marry Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">Phone number *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="form-input"
              placeholder="9876543210"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address *</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="marry@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password *</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="companyName" className="form-label">Company name *</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="form-input"
              placeholder="PopX Pvt Ltd"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label-radio">Are you an Agency? *</label>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange}
                />
                <span className="radio-text">Yes</span>
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange}
                />
                <span className="radio-text">No</span>
              </label>
            </div>
          </div>
          
          <button type="submit" className="btn btn-create-account">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
