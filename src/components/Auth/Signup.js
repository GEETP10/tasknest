import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      navigate('/dashboard');
      // Here later we will call backend API
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ backgroundColor: '#FFF9DB', minHeight: '100vh', paddingTop: '50px' }}>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: 'white' }}>
        <h2 style={{ textAlign: 'center' }}>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name}</p>}
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email}</p>}
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
            />
            {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password}</p>}
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;