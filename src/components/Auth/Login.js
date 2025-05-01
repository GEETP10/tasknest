import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    if (!loginData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      formErrors.email = "Email is invalid";
    }
    if (!loginData.password) {
      formErrors.password = "Password is required";
    } else if (loginData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Login Data:', loginData);
      navigate('/dashboard');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ backgroundColor: '#FFF9DB', minHeight: '100vh', paddingTop: '50px', position: 'relative' }}>
      <img
        src="/logo.png"
        alt="TaskNest Logo"
        style={{
          position: 'absolute',
          bottom: '20px',
          backgroundColor: '#FFF9DB',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '150px',
          height: 'auto',
          opacity: 0.8
        }}
      />

      <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', fontFamily: 'Poppins , sans-serif', marginBottom: '0' }}>
        Welcome to TaskNest 🪺
      </h1>
      <p style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Poppins, sans-serif', color: '#666', marginBottom: '40px' }}>
        your perfect planning partner!!
      </p>

      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '60px', border: '4px solid #ccc', borderRadius: '8px', backgroundColor: '#F1F2ED' }}>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px' }}
            />
            {errors.email && <p style={{ color: 'red', fontSize: '15px' }}>{errors.email}</p>}
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '12px' }}
            />
            {errors.password && <p style={{ color: 'red', fontSize: '15px' }}>{errors.password}</p>}
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px', marginLeft: '28px' }}>
            <button
              type="submit"
              style={{ width: '100%', padding: '12px 40px', backgroundColor: '#4CAF50', color: 'white', border: 'square', borderRadius: '8px', cursor: 'pointer' }}
            >
              Login
            </button>
          </div>
        </form>

        <p style={{ textAlign: 'center', marginTop: '15px' }}>
          Don't have an account?{' '}
          <Link to="/signup" style={{ color: '#4CAF50', textDecoration: 'none' }}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
