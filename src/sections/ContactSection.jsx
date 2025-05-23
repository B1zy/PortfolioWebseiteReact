import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ContactSection() {
  const { t } = useTranslation();
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Add your Web3Forms access key
    formData.append("access_key", "8bcf5d70-919a-4519-b81f-7f5c823ab827");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        event.target.reset();
        
        // Reset the form data state as well
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Clear the success message after 5 seconds
        setTimeout(() => {
          setResult("");
        }, 5000);
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h2 className="section-title">{t('contact.title')}</h2>
      <p className="section-subtitle">{t('contact.subtitle')}</p>
      
      <div className="contact-content">
        <form className="contact-form" onSubmit={onSubmit}>
          
          {result && (
            <div className={`form-result ${result.includes("success") || result === "Sending...." ? 'success' : 'error'}`}>
              {result}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-control"
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">
            {t('contact.send')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;