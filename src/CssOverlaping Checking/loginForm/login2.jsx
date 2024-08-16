import React, { useState } from 'react';
function LoginCheck() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Add your login logic here
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <div className="form">
          <h1>Singh in form</h1>
          <label>Email</label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button id="signin" onClick={handleSubmit}>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default LoginCheck;
