import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    codeName: '',
    email: '',
    password: '',
    season: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!/^[a-zA-Z]+$/.test(formData.codeName)) {
      newErrors.codeName = 'Code name must contain alphabets only.';
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{6,}/.test(formData.password)) {
      newErrors.password = 'Password must contain at least 1 alphabet, 1 number, 1 special character, and 1 uppercase letter.';
    }
    if (!formData.season) {
      newErrors.season = 'Please select a season.';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      navigate('/profile', { state: formData });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="cyberpunk-form-container">
      <form onSubmit={handleSubmit} className="cyberpunk-form">
        <h2>Virtual City Access Registration</h2>
        <div>
          <label>Code Name:</label>
          <input type="text" name="codeName" value={formData.codeName} onChange={handleChange} />
          {errors.codeName && <div className="error">{errors.codeName}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label>Season to Enter:</label>
          <select name="season" value={formData.season} onChange={handleChange}>
            <option value="">Select a season</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
          {errors.season && <div className="error">{errors.season}</div>}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
