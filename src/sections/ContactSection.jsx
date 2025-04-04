import React, { useState } from 'react';

function ContactSection() {
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
    <div className="contact-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">Have a question or want to work together?</p>
      
      <div className="contact-content" style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '2rem',
        flexWrap: 'wrap'
      }}>
        <div className="contact-info" style={{ 
          flex: '1', 
          minWidth: '250px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '2rem',
          borderRadius: '8px'
        }}>
          <div className="contact-item" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-envelope" style={{ marginRight: '1rem', color: '#f36c18', fontSize: '1.2rem' }}></i>
            <span>kamil.bielski@stud.altekanti</span>
          </div>
          <div className="contact-item" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-phone" style={{ marginRight: '1rem', color: '#f36c18', fontSize: '1.2rem' }}></i>
            <span>+78 652 02 42</span>
          </div>
          <div className="contact-item" style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '1rem', color: '#f36c18', fontSize: '1.2rem' }}></i>
            <span>Aarau</span>
          </div>
          
          <div className="social-links" style={{ 
            marginTop: '2rem', 
            display: 'flex', 
            gap: '1rem'
          }}>
            <a href="https://github.com/b1zy" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ 
                 fontSize: '1.5rem', 
                 color: 'white',
                 transition: 'color 0.3s ease'
               }}
               onMouseEnter={(e) => e.target.style.color = '#f36c18'}
               onMouseLeave={(e) => e.target.style.color = 'white'}>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/kamil-bielski-98b28a281" 
               target="_blank" 
               rel="noopener noreferrer"
               style={{ 
                 fontSize: '1.5rem', 
                 color: 'white',
                 transition: 'color 0.3s ease'
               }}
               onMouseEnter={(e) => e.target.style.color = '#f36c18'}
               onMouseLeave={(e) => e.target.style.color = 'white'}>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        
        <form className="contact-form" 
          onSubmit={onSubmit}
          style={{ 
            flex: '2',
            minWidth: '300px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '2rem',
            borderRadius: '8px'
          }}>
          
          {result && (
            <div style={{
              padding: '1rem',
              marginBottom: '1.5rem',
              borderRadius: '4px',
              backgroundColor: result.includes("success") || result === "Sending...." ? 'rgba(46, 204, 113, 0.2)' : 'rgba(231, 76, 60, 0.2)',
              color: result.includes("success") || result === "Sending...." ? '#2ecc71' : '#e74c3c',
              textAlign: 'center'
            }}>
              {result}
            </div>
          )}
          
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '0.8rem',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}
            />
          </div>
          
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '0.8rem',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}
            />
          </div>
          
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.5rem' }}>Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '0.8rem',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white'
              }}
            />
          </div>
          
          <div className="form-group" style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ 
                width: '100%', 
                padding: '0.8rem',
                borderRadius: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                resize: 'vertical'
              }}
            ></textarea>
          </div>
          
          <button type="submit" 
            style={{ 
              backgroundColor: '#f36c18',
              color: 'white',
              border: 'none',
              padding: '0.8rem 1.5rem',
              borderRadius: '30px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#e05c08';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 6px 10px rgba(243, 108, 24, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#f36c18';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;