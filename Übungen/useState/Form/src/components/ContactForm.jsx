import { useState } from 'react';

function ContactForm() {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, telephone, message } = formData;
    if (!name || !email || !telephone || !message) {
      setError('All fields are required');
      return;
    }
    setError('');
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Telephone :
          <input
            type='number'
            name='telephone'
            value={formData.telephone}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Message :
          <input
            type='text'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </label>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ContactForm;
