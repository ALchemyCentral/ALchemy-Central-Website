// ===============================
// contact.js — CONTACT FORM HANDLER
// GitHub Pages compatible with Formspree
// Security: XSS Protection, Rate Limiting, Input Validation
// ===============================

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!checkRateLimit()) {
        showStatus('ratelimit');
        return;
      }

      const name = sanitizeInput(document.getElementById('contactName').value.trim());
      const email = sanitizeInput(document.getElementById('contactEmail').value.trim());
      const message = sanitizeInput(document.getElementById('contactMessage').value.trim());
      const submitButton = contactForm.querySelector('button[type="submit"]');

      if (!validateInputs(name, email, message)) {
        showStatus('error');
        return;
      }

      submitButton.disabled = true;
      submitButton.style.opacity = '0.6';
      submitButton.style.cursor = 'not-allowed';

      try {
        const response = await fetch('https://formspree.io/f/maqwvgja', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
            _subject: `Contact Form: ${name}`
          })
        });

        if (response.ok) {
          showStatus('success');
          contactForm.reset();
          updateRateLimit();
        } else {
          showStatus('error');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        showStatus('error');
      } finally {
        submitButton.disabled = false;
        submitButton.style.opacity = '1';
        submitButton.style.cursor = 'pointer';
      }
    });
  }

  function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  function validateInputs(name, email, message) {
    if (!name || name.length < 2 || name.length > 100) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 254) {
      return false;
    }

    if (!message || message.length < 10 || message.length > 5000) {
      return false;
    }

    const suspiciousPatterns = /<script|javascript:|onerror=|onclick=|<iframe|eval\(|expression\(/i;
    if (suspiciousPatterns.test(name) || suspiciousPatterns.test(email) || suspiciousPatterns.test(message)) {
      console.warn('Suspicious input detected');
      return false;
    }

    return true;
  }

  function checkRateLimit() {
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
      const cooldownPeriod = 60000;
      
      if (timeSinceLastSubmission < cooldownPeriod) {
        return false;
      }
    }
    return true;
  }

  function updateRateLimit() {
    localStorage.setItem('lastFormSubmission', Date.now().toString());
  }

  function showStatus(type) {
    const lang = localStorage.getItem('alchemy_language') || 'de';
    const messages = {
      de: {
        success: 'Vielen Dank! Ihre Nachricht wurde erfolgreich versendet.',
        error: 'Bitte überprüfen Sie Ihre Eingaben: Name (min. 2 Zeichen), gültige E-Mail, Nachricht (min. 10 Zeichen).',
        ratelimit: 'Bitte warten Sie 60 Sekunden zwischen den Nachrichten. Dies schützt vor Spam.'
      },
      en: {
        success: 'Thank you! Your message has been sent successfully.',
        error: 'Please check your input: Name (min. 2 chars), valid email, message (min. 10 chars).',
        ratelimit: 'Please wait 60 seconds between messages. This protects against spam.'
      }
    };

    const message = messages[lang][type];
    contactStatus.textContent = message;
    contactStatus.style.display = 'block';
    contactStatus.style.padding = '16px';
    contactStatus.style.borderRadius = '12px';
    contactStatus.style.textAlign = 'center';
    contactStatus.style.fontWeight = '600';

    if (type === 'success') {
      contactStatus.style.background = 'rgba(34, 197, 94, 0.1)';
      contactStatus.style.color = '#22c55e';
      contactStatus.style.border = '1px solid rgba(34, 197, 94, 0.3)';
    } else {
      contactStatus.style.background = 'rgba(239, 68, 68, 0.1)';
      contactStatus.style.color = '#ef4444';
      contactStatus.style.border = '1px solid rgba(239, 68, 68, 0.3)';
    }

    setTimeout(() => {
      contactStatus.style.display = 'none';
    }, 5000);
  }
});
