 // ── Animated Counters ──
    function animateCounter(id, target, suffix = '') {
      let current = 0
      const step = Math.ceil(target / 60)
      const el = document.getElementById(id)
      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        el.textContent = current.toLocaleString() + suffix
      }, 30)
    }

    // run counters when stats section visible
    let countersRun = false
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countersRun) {
          countersRun = true
          animateCounter('statCustomers', 12000, '+')
          animateCounter('statProducts', 150, '+')
          animateCounter('statCities', 50, '+')
          animateCounter('statYears', 6, '')
        }
      })
    }, { threshold: 0.3 })

    const statsSection = document.querySelector('.stat-card')
    if (statsSection) statsObserver.observe(statsSection)

    // ── Scroll Reveal ──
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el))

    // ── Progress Bars ──
    const progressObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.progress-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width') + '%'
          })
        }
      })
    }, { threshold: 0.3 })

    document.querySelectorAll('.progress-fill').forEach(bar => {
      const section = bar.closest('section')
      if (section) progressObserver.observe(section)
    })