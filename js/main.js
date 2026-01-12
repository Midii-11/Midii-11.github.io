/* ============================================
   MAIN JAVASCRIPT - Portfolio Functionality
   ============================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  initializePortfolio();
});

function initializePortfolio() {
  // Populate content from data
  populateNavigation();
  populateHeroStats();
  populateAbout();
  populateExperience();
  populateSkills();
  populateProjects();
  populateEducation();
  populateCertifications();
  populateFooter();

  // Initialize interactive features
  initNavbar();
  initScrollAnimations();
  initBackToTop();
  initContactForm();
  initSmoothScroll();
}

/* ============================================
   CONTENT POPULATION FUNCTIONS
   ============================================ */

function populateNavigation() {
  const navContainer = document.getElementById('navbar-nav');
  const footerNavContainer = document.getElementById('footer-nav');

  if (!PORTFOLIO_DATA.navigation) return;

  const navHTML = PORTFOLIO_DATA.navigation.map(item => `
    <li><a href="${item.href}" class="navbar-link">${item.label}</a></li>
  `).join('');

  if (navContainer) navContainer.innerHTML = navHTML;
  if (footerNavContainer) footerNavContainer.innerHTML = navHTML.replace(/navbar-link/g, 'footer-nav-link');
}

function populateHeroStats() {
  const statsContainer = document.getElementById('hero-stats');
  if (!statsContainer || !PORTFOLIO_DATA.hero?.stats) return;

  statsContainer.innerHTML = PORTFOLIO_DATA.hero.stats.map(stat => `
    <div class="hero-stat">
      <div class="hero-stat-value">${stat.value}</div>
      <div class="hero-stat-label">${stat.label}</div>
    </div>
  `).join('');
}

function populateAbout() {
  const paragraphsContainer = document.getElementById('about-paragraphs');
  const highlightsContainer = document.getElementById('about-highlights');
  const languagesContainer = document.getElementById('about-languages');

  if (!PORTFOLIO_DATA.about) return;

  // Paragraphs
  if (paragraphsContainer && PORTFOLIO_DATA.about.paragraphs) {
    paragraphsContainer.innerHTML = PORTFOLIO_DATA.about.paragraphs.map(p => `
      <p class="about-text">${p}</p>
    `).join('');
  }

  // Highlights
  if (highlightsContainer && PORTFOLIO_DATA.about.highlights) {
    highlightsContainer.innerHTML = PORTFOLIO_DATA.about.highlights.map(h => `
      <div class="about-highlight">
        <div class="about-highlight-icon">${h.icon}</div>
        <div class="about-highlight-content">
          <h4>${h.title}</h4>
          <p>${h.description}</p>
        </div>
      </div>
    `).join('');
  }

  // Languages
  if (languagesContainer && PORTFOLIO_DATA.about.languages) {
    languagesContainer.innerHTML = PORTFOLIO_DATA.about.languages.map(l => `
      <div class="about-language">
        <span class="about-language-flag">${l.flag}</span>
        <span>${l.name}</span>
        <span class="about-language-level">${l.level}</span>
      </div>
    `).join('');
  }
}

function populateExperience() {
  const timelineContainer = document.getElementById('experience-timeline');
  if (!timelineContainer || !PORTFOLIO_DATA.experience) return;

  timelineContainer.innerHTML = PORTFOLIO_DATA.experience.map((exp, index) => `
    <div class="experience-item reveal" style="transition-delay: ${index * 0.1}s">
      <div class="experience-date-side">
        <span class="experience-date">${exp.period}</span>
        <span class="experience-location">${exp.location} · ${exp.type}</span>
      </div>

      <div class="experience-dot"></div>

      <div class="experience-content">
        <div class="experience-card">
          <div class="experience-company">
            <div class="experience-company-logo">${exp.logo}</div>
            <span class="experience-company-name">${exp.company}</span>
          </div>
          <h3 class="experience-role">${exp.role}</h3>
          <p class="experience-description">${exp.description}</p>
          <ul class="experience-achievements">
            ${exp.achievements.map(a => `<li>${a}</li>`).join('')}
          </ul>
          <div class="experience-tech">
            ${exp.technologies.map(t => `<span class="experience-tech-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function populateSkills() {
  const gridContainer = document.getElementById('skills-grid');
  const featuredContainer = document.getElementById('skills-featured');

  if (!PORTFOLIO_DATA.skills) return;

  // Skills categories
  if (gridContainer && PORTFOLIO_DATA.skills.categories) {
    gridContainer.innerHTML = PORTFOLIO_DATA.skills.categories.map((cat, index) => `
      <div class="skill-category reveal" style="transition-delay: ${index * 0.1}s">
        <div class="skill-category-header">
          <div class="skill-category-icon">${cat.icon}</div>
          <h3 class="skill-category-title">${cat.title}</h3>
        </div>
        <div class="skill-tags">
          ${cat.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  // Featured skills
  if (featuredContainer && PORTFOLIO_DATA.skills.featured) {
    featuredContainer.innerHTML = PORTFOLIO_DATA.skills.featured.map(s => `
      <div class="skill-featured-item">
        <div class="skill-featured-icon">${s.icon}</div>
        <span class="skill-featured-name">${s.name}</span>
      </div>
    `).join('');
  }
}

function populateProjects() {
  const gridContainer = document.getElementById('projects-grid');
  if (!gridContainer || !PORTFOLIO_DATA.projects) return;

  gridContainer.innerHTML = PORTFOLIO_DATA.projects.map((project, index) => {
    // Determine primary link (prefer GitHub, fallback to demo)
    const primaryLink = project.github || project.demo;
    
    if (primaryLink) {
      // Clickable card version
      return `
        <a href="${primaryLink}" target="_blank" rel="noopener" class="project-card-link ${project.featured ? 'featured' : ''} reveal" style="transition-delay: ${index * 0.1}s">
          <div class="project-card">
            <div class="project-image">
              ${project.image
                ? `<img src="${project.image}" alt="${project.title}">`
                : `<div class="project-image-placeholder">
                    <span class="project-image-placeholder-icon">📁</span>
                  </div>`
              }
            </div>
            <div class="project-content">
              <span class="project-category">${project.category}</span>
              <h3 class="project-title">${project.title}</h3>
              <p class="project-description">${project.description}</p>
              <div class="project-tech">
                ${project.technologies.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
              </div>
              <div class="project-links">
                ${project.github ? `
                  <span class="project-link">
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>View Code</span>
                  </span>
                ` : ''}
                ${project.demo ? `
                  <span class="project-link">
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="15 3 21 3 21 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    <span>Live Demo</span>
                  </span>
                ` : ''}
              </div>
            </div>
          </div>
        </a>
      `;
    } else {
      // Non-clickable card version (no links available)
      return `
        <div class="project-card ${project.featured ? 'featured' : ''} reveal" style="transition-delay: ${index * 0.1}s">
          <div class="project-image">
            ${project.image
              ? `<img src="${project.image}" alt="${project.title}">`
              : `<div class="project-image-placeholder">
                  <span class="project-image-placeholder-icon">📁</span>
                </div>`
            }
          </div>
          <div class="project-content">
            <span class="project-category">${project.category}</span>
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
              ${project.technologies.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }).join('');
}

function populateEducation() {
  const gridContainer = document.getElementById('education-grid');
  if (!gridContainer || !PORTFOLIO_DATA.education) return;

  gridContainer.innerHTML = PORTFOLIO_DATA.education.map((edu, index) => `
    <div class="education-card reveal" style="transition-delay: ${index * 0.1}s">
      <div class="education-header">
        <div class="education-icon">${edu.icon}</div>
        <div class="education-meta">
          <h3 class="education-degree">${edu.degree}</h3>
          <p class="education-school">${edu.school}</p>
          <div class="education-period">
            <span class="education-period-dates">${edu.period}</span>
            <span class="education-period-location">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/></svg>
              ${edu.location}
            </span>
          </div>
        </div>
      </div>
      ${edu.description || edu.highlights ? `
        <div class="education-content">
          ${edu.description ? `<p class="education-description">${edu.description}</p>` : ''}
          ${edu.highlights ? `
            <div class="education-highlights">
              ${edu.highlights.map(h => `<span class="education-highlight">${h}</span>`).join('')}
            </div>
          ` : ''}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function populateCertifications() {
  const container = document.getElementById('certifications-container');
  const gridContainer = document.getElementById('certifications-grid');

  if (!container || !gridContainer || !PORTFOLIO_DATA.certifications || PORTFOLIO_DATA.certifications.length === 0) {
    return;
  }

  container.style.display = 'block';
  gridContainer.innerHTML = PORTFOLIO_DATA.certifications.map(cert => `
    <div class="certification-card">
      <div class="certification-badge">${cert.icon}</div>
      <div class="certification-info">
        <h4 class="certification-name">${cert.name}</h4>
        <p class="certification-issuer">${cert.issuer} · ${cert.date}</p>
        ${cert.link ? `
          <a href="${cert.link}" target="_blank" rel="noopener" class="certification-link">
            View Certificate
            <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="15 3 21 3 21 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function populateFooter() {
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/* ============================================
   INTERACTIVE FEATURES
   ============================================ */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navbar-toggle');
  const navMenu = document.getElementById('navbar-menu');
  const navLinks = document.querySelectorAll('.navbar-link');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });

  // Mobile menu toggle
  navToggle?.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle?.classList.remove('active');
      navMenu?.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Active link highlighting
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };

  // Initial check
  revealOnScroll();

  // On scroll
  window.addEventListener('scroll', revealOnScroll, { passive: true });
}

function initBackToTop() {
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }
  });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    // Loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Sending...</span>';

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.style.display = 'none';
        successMessage.classList.add('active');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('Oops! Something went wrong. Please try again or email me directly.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
