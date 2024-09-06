
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkommen auf meiner Portfolio-Seite!</h1>
        <p>Hier finden Sie meine Projekte und können mich kontaktieren.</p>
      </header>

      <main>
        <section id="contact">
          <h2>Kontaktinformationen</h2>
          <p><strong>Name:</strong> Kamil Bielski</p>
          <p><strong>Email:</strong> kamil.bielski@example.com</p>
          <p><strong>Telefon:</strong> +49 123 456789</p>
        </section>
        
        <section id="contact-form">
          <h2>Kontaktformular</h2>
          <ContactForm />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Kamil Bielski. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = React.useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier könntest du eine API-Anfrage senden
    setFormStatus('Vielen Dank für Ihre Nachricht!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="message">Nachricht:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
      </div>
      <button type="submit">Absenden</button>
      {formStatus && <p>{formStatus}</p>}
    </form>
  );
}

export default App;
