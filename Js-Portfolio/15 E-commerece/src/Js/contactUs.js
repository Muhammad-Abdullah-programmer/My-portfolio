 // ── Form Validation & Submit ──
    const form = document.getElementById('contactForm')
 
    form.addEventListener('submit', (e) => {
      e.preventDefault()
 
      let valid = true
 
      const name    = document.getElementById('nameInput')
      const email   = document.getElementById('emailInput')
      const subject = document.getElementById('subjectInput')
      const message = document.getElementById('messageInput')
 
      const nameErr    = document.getElementById('nameErr')
      const emailErr   = document.getElementById('emailErr')
      const subjectErr = document.getElementById('subjectErr')
      const messageErr = document.getElementById('messageErr')
 
      // reset errors
      ;[nameErr, emailErr, subjectErr, messageErr].forEach(e => e.classList.add('hidden'))
      ;[name, email, subject, message].forEach(el => el.classList.remove('border-red-400'))
 
      if (name.value.trim() === '') {
        nameErr.classList.remove('hidden')
        name.classList.add('border-red-400')
        valid = false
      }
 
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email.value.trim())) {
        emailErr.classList.remove('hidden')
        email.classList.add('border-red-400')
        valid = false
      }
 
      if (subject.value === '') {
        subjectErr.classList.remove('hidden')
        subject.classList.add('border-red-400')
        valid = false
      }
 
      if (message.value.trim().length < 10) {
        messageErr.classList.remove('hidden')
        messageErr.textContent = message.value.trim() === '' ? 'Please enter your message.' : 'Message is too short (min 10 chars).'
        message.classList.add('border-red-400')
        valid = false
      }
 
      if (!valid) return
 
      // simulate send
      const btn = document.getElementById('submitBtn')
      btn.textContent = 'Sending...'
      btn.disabled = true
 
      setTimeout(() => {
        form.reset()
        btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane ml-2"></i>'
        btn.disabled = false
        showToast('Message sent! We\'ll reply within 24 hours.')
      }, 1500)
    })
 
    // ── Toast ──
    function showToast(msg) {
      const toast = document.getElementById('toast')
      document.getElementById('toastMsg').textContent = msg
      toast.classList.add('show')
      setTimeout(() => toast.classList.remove('show'), 4000)
    }
 
    // ── FAQ Accordion ──
    document.querySelectorAll('.faq-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const body  = btn.nextElementSibling
        const arrow = btn.querySelector('.faq-arrow')
        const isOpen = body.classList.contains('open')
 
        // close all
        document.querySelectorAll('.faq-body').forEach(b => b.classList.remove('open'))
        document.querySelectorAll('.faq-arrow').forEach(a => a.classList.remove('open'))
 
        if (!isOpen) {
          body.classList.add('open')
          arrow.classList.add('open')
        }
      })
    })