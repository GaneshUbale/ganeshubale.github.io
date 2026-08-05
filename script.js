/**
 * Main Interactive Logic for Resume & Portfolio Webpage
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render all Data from RESUME_DATA
    initResumeContent();

    // 2. Initialize Canvas Particle Background
    initParticleCanvas();

    // 3. Initialize Theme Toggle (Dark/Light)
    initThemeToggle();

    // 4. Initialize Typewriter Effect
    initTypewriter();

    // 5. Initialize Navigation & Scroll Effects
    initNavigation();

    // 6. Initialize Project Filter System
    initProjectFilters();

    // 7. Initialize Scroll Animations & Progress Bars
    initScrollObserver();

    // 8. Initialize Contact Form & Copy Actions
    initContactForm();
});

/* ==========================================================================
   1. RESUME DATA RENDERER
   ========================================================================== */
function initResumeContent() {
    if (typeof RESUME_DATA === 'undefined') return;

    const { personal, about, experience, skills, projects, pocsBlogs, education, certifications } = RESUME_DATA;

    // Personal & Hero Info
    if (personal) {
        document.title = `${personal.name} | Resume`;
        document.getElementById('nav-initials').textContent = personal.initials || 'GU';
        document.getElementById('hero-name').textContent = personal.name;
        document.getElementById('hero-tagline').textContent = personal.tagline;
        document.getElementById('footer-name').textContent = personal.name;
        document.getElementById('footer-year').textContent = new Date().getFullYear();

        if (personal.statusText) {
            document.getElementById('hero-status').textContent = personal.statusText;
        }

        // Avatar Handling
        const avatarImgEl = document.getElementById('avatar-img');
        const avatarInitialsEl = document.getElementById('avatar-initials');
        if (personal.avatarImg) {
            avatarImgEl.src = personal.avatarImg;
            avatarImgEl.classList.remove('hidden');
            avatarInitialsEl.classList.add('hidden');
        } else {
            avatarInitialsEl.textContent = personal.initials || 'GU';
            avatarInitialsEl.classList.remove('hidden');
            avatarImgEl.classList.add('hidden');
        }

        // Social Icons Render
        const heroSocialsEl = document.getElementById('hero-socials');
        if (heroSocialsEl && personal.socials) {
            heroSocialsEl.innerHTML = personal.socials.map(s => `
                <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-icon-btn" title="${s.platform}" aria-label="${s.platform}">
                    <i class="${s.icon}"></i>
                </a>
            `).join('');
        }

        // PDF Download Buttons Wiring
        const downloadCvBtn = document.getElementById('download-cv-btn');
        const headerPdfBtn = document.getElementById('header-pdf-btn');

        if (downloadCvBtn) {
            downloadCvBtn.addEventListener('click', (e) => {
                e.preventDefault();
                downloadPDFResume();
            });
        }

        if (headerPdfBtn) {
            headerPdfBtn.addEventListener('click', (e) => {
                e.preventDefault();
                downloadPDFResume();
            });
        }
    }

    // About Section Render
    if (about) {
        document.getElementById('about-bio').textContent = about.bio;

        // Highlights Render
        const highlightsEl = document.getElementById('highlights-grid');
        if (highlightsEl && about.highlights) {
            highlightsEl.innerHTML = about.highlights.map(h => `
                <div class="highlight-item">
                    <div class="highlight-icon"><i class="${h.icon}"></i></div>
                    <div class="highlight-content">
                        <h4>${h.title}</h4>
                        <p>${h.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        // Stats Card Render
        const statsEl = document.getElementById('stats-card');
        if (statsEl && about.stats) {
            statsEl.innerHTML = about.stats.map(st => `
                <div class="stat-item">
                    <span class="stat-value" data-target="${st.value}">${st.value}</span>
                    <span class="stat-label">${st.label}</span>
                </div>
            `).join('');
        }
    }

    // Experience Section Render
    const expTimelineEl = document.getElementById('experience-timeline');
    if (expTimelineEl && experience) {
        const normalizedExperience = normalizeExperienceEntries(experience);
        expTimelineEl.innerHTML = normalizedExperience.map(item => `
            <div class="timeline-item ${item.isParentCompany ? 'timeline-parent' : ''}">
                <div class="timeline-dot"></div>
                <div class="glass-card">
                    <div class="timeline-header">
                        <div>
                            <h3 class="timeline-role">${item.role || 'Engineering Role'}</h3>
                            <span class="timeline-company">${item.company || 'Company'} &bull; ${item.location || ''}</span>
                        </div>
                        <span class="timeline-period">${item.period || ''}</span>
                    </div>
                    ${item.description ? `<p class="timeline-desc">${item.description}</p>` : ''}
                    ${Array.isArray(item.achievements) && item.achievements.length ? `
                        <ul class="timeline-achievements">
                            ${item.achievements.map(ach => `<li>${ach}</li>`).join('')}
                        </ul>
                    ` : ''}
                    <div class="timeline-tech-tags">
                        ${(Array.isArray(item.tech) ? item.tech : []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                    </div>

                    ${Array.isArray(item.clients) && item.clients.length ? `
                        <div class="timeline-subtree">
                            ${item.clients.map(client => `
                                <div class="timeline-subitem">
                                    <div class="timeline-subitem-dot"></div>
                                    <div class="glass-card timeline-subcard">
                                        <div class="timeline-header">
                                            <div>
                                                <h4 class="timeline-subrole">${client.role || 'Engineering Role'}</h4>
                                                <span class="timeline-company">${client.clientName || client.company || 'Client'} &bull; ${item.location || ''}</span>
                                            </div>
                                            <span class="timeline-period">${client.period || ''}</span>
                                        </div>
                                        <p class="timeline-desc">${client.description || ''}</p>
                                        ${Array.isArray(client.achievements) && client.achievements.length ? `
                                            <ul class="timeline-achievements">
                                                ${client.achievements.map(ach => `<li>${ach}</li>`).join('')}
                                            </ul>
                                        ` : ''}
                                        <div class="timeline-tech-tags">
                                            ${(Array.isArray(client.tech) ? client.tech : []).map(t => `<span class="tech-tag">${t}</span>`).join('')}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }

    // Skills Section Render
    const skillsGridEl = document.getElementById('skills-grid');
    if (skillsGridEl && skills) {
        skillsGridEl.innerHTML = skills.map(cat => `
            <div class="skill-category-card glass-card">
                <h3><i class="${cat.icon}"></i> ${cat.category}</h3>
                <div class="skills-list">
                    ${cat.items.map(s => `
                        <div class="skill-item">
                            <div class="skill-info">
                                <span class="skill-name">${s.name}</span>
                                <span class="skill-percentage">${s.level}%</span>
                            </div>
                            <div class="skill-progress-bar">
                                <div class="skill-progress-fill" data-level="${s.level}"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Projects Section Render
    const projectsGridEl = document.getElementById('projects-grid');
    if (projectsGridEl && projects) {
        renderProjects(projects);
    }

    // POCs & Blogs Section Render
    const pocBlogsGridEl = document.getElementById('poc-blogs-grid');
    if (pocBlogsGridEl && pocsBlogs) {
        renderPocBlogs(pocsBlogs);
    }

    // Education & Certifications Render
    const eduListEl = document.getElementById('education-list');
    if (eduListEl && education) {
        eduListEl.innerHTML = education.map(edu => `
            <div class="edu-card">
                <h4 class="edu-degree">${edu.degree}</h4>
                <div class="edu-institution">${edu.institution}</div>
                <div class="edu-meta">
                    <span><i class="fa-regular fa-calendar"></i> ${edu.period}</span>
                    ${edu.grade ? `<span><i class="fa-solid fa-star"></i> ${edu.grade}</span>` : ''}
                </div>
                ${edu.description ? `<p style="font-size:0.9rem; color:var(--text-secondary);">${edu.description}</p>` : ''}
            </div>
        `).join('');
    }

    const certListEl = document.getElementById('certifications-list');
    if (certListEl && certifications) {
        certListEl.innerHTML = certifications.map(c => `
            <div class="cert-card">
                <div class="cert-icon"><i class="${c.badgeIcon || 'fa-solid fa-award'}"></i></div>
                <div>
                    <h4 class="cert-title">${c.title}</h4>
                    <div class="cert-issuer">${c.issuer} &bull; ${c.year}</div>
                </div>
            </div>
        `).join('');
    }

    // Contact Methods Render
    const contactMethodsEl = document.getElementById('contact-methods');
    if (contactMethodsEl && personal) {
        contactMethodsEl.innerHTML = `
            <div class="contact-method-item">
                <div class="method-icon"><i class="fa-solid fa-envelope"></i></div>
                <div>
                    <span class="method-label">Email</span>
                    <a href="mailto:${personal.email}" class="method-value">${personal.email}</a>
                </div>
            </div>
            <div class="contact-method-item">
                <div class="method-icon"><i class="fa-solid fa-location-dot"></i></div>
                <div>
                    <span class="method-label">Location</span>
                    <span class="method-value">${personal.location}</span>
                </div>
            </div>
        `;
    }
}

function normalizeExperienceEntries(experienceList) {
    return experienceList.map(item => {
        if (Array.isArray(item.clients) && item.clients.length > 0) {
            return {
                company: item.company || '',
                location: item.location || '',
                period: item.period || '',
                role: item.role || 'Engineering Role',
                description: item.description || '',
                achievements: Array.isArray(item.achievements) ? item.achievements : [],
                tech: Array.isArray(item.tech) ? item.tech : [],
                isParentCompany: true,
                clients: item.clients.slice(0, 3).map(client => ({
                    clientName: client.clientName || '',
                    period: client.period || '',
                    role: client.role || item.role || 'Engineering Role',
                    description: client.description || '',
                    achievements: Array.isArray(client.achievements) ? client.achievements : [],
                    tech: Array.isArray(client.tech) ? client.tech : []
                }))
            };
        }

        return {
            company: item.company || '',
            location: item.location || '',
            period: item.period || '',
            role: item.role || 'Engineering Role',
            description: item.description || '',
            achievements: Array.isArray(item.achievements) ? item.achievements : [],
            tech: Array.isArray(item.tech) ? item.tech : [],
            isParentCompany: false,
            clients: []
        };
    });
}

/* Helper to Render Projects */
function renderProjects(projectsList) {
    const projectsGridEl = document.getElementById('projects-grid');
    if (!projectsGridEl) return;

    projectsGridEl.innerHTML = projectsList.map(p => `
        <div class="project-card glass-card" data-category="${p.category}">
            <div class="project-top">
                <div class="project-header-meta">
                    <i class="fa-regular fa-folder-open project-folder-icon"></i>
                    <div class="project-links">
                        ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="View Source Code"><i class="fa-brands fa-github"></i></a>` : ''}
                        ${p.demoUrl ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn" title="Live Preview"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
                    </div>
                </div>
                <h3 class="project-title">${p.title}</h3>
                <p class="project-description">${p.description}</p>
            </div>
            <div class="project-bottom">
                <div class="project-tech-stack">
                    ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderPocBlogs(pocBlogsList) {
    const pocBlogsGridEl = document.getElementById('poc-blogs-grid');
    if (!pocBlogsGridEl) return;

    pocBlogsGridEl.innerHTML = pocBlogsList.map(item => `
        <a class="project-card glass-card poc-blog-card" href="${item.url}" target="_blank" rel="noopener noreferrer" data-category="${item.category || 'blog'}">
            <div class="project-top">
                <div class="project-header-meta">
                    <i class="${item.icon || 'fa-solid fa-scroll'} project-folder-icon"></i>
                    <div class="project-links">
                        <span class="project-link-btn" title="Open ${item.type || 'Link'}"><i class="fa-solid fa-arrow-up-right-from-square"></i></span>
                    </div>
                </div>
                <h3 class="project-title">${item.title}</h3>
                <p class="project-description">${item.description}</p>
            </div>
            <div class="project-bottom">
                <div class="project-tech-stack">
                    <span class="tech-tag">${item.type || 'Blog'}</span>
                    ${(item.tags || []).map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');
}

/* ==========================================================================
   2. CANVAS PARTICLE BACKGROUND
   ========================================================================== */
function initParticleCanvas() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = Math.floor((width * height) / 18000);

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 1.8 + 0.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(99, 102, 241, 0.4)';
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ==========================================================================
   3. THEME TOGGLE (DARK / LIGHT)
   ========================================================================== */
function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);

    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = htmlEl.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

/* ==========================================================================
   4. TYPEWRITER EFFECT
   ========================================================================== */
function initTypewriter() {
    const typingEl = document.getElementById('typing-text');
    if (!typingEl || typeof RESUME_DATA === 'undefined') return;

    const titles = RESUME_DATA.personal.typingTitles || ["Software Engineer", "Full Stack Developer"];
    let titleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let speed = 100;

    function type() {
        const currentTitle = titles[titleIdx];

        if (isDeleting) {
            typingEl.textContent = currentTitle.substring(0, charIdx - 1);
            charIdx--;
            speed = 50;
        } else {
            typingEl.textContent = currentTitle.substring(0, charIdx + 1);
            charIdx++;
            speed = 100;
        }

        if (!isDeleting && charIdx === currentTitle.length) {
            speed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            titleIdx = (titleIdx + 1) % titles.length;
            speed = 500;
        }

        setTimeout(type, speed);
    }

    setTimeout(type, 1000);
}

/* ==========================================================================
   5. NAVIGATION & SCROLL ACTIVE STATES
   ========================================================================== */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlight
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Menu Toggle
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

/* ==========================================================================
   6. PROJECT FILTERS
   ========================================================================== */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            const projectCards = document.querySelectorAll('.project-card');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================================================
   7. SCROLL INTERSECTION OBSERVER FOR ANIMATIONS
   ========================================================================== */
function initScrollObserver() {
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate Progress Bars
                const fills = entry.target.querySelectorAll('.skill-progress-fill');
                fills.forEach(fill => {
                    const level = fill.getAttribute('data-level');
                    fill.style.width = `${level}%`;
                });

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skills-section, .skills-grid').forEach(el => {
        observer.observe(el);
    });
}

/* ==========================================================================
   8. CONTACT FORM & TOAST NOTIFICATION
   ========================================================================== */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            // Trigger mailto as fallback or handle feedback
            const mailtoLink = `mailto:${RESUME_DATA.personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
            window.location.href = mailtoLink;

            showToast('Opening your email client to send message!');
            contactForm.reset();
        });
    }

    function showToast(msg) {
        if (!toast || !toastMsg) return;
        toastMsg.textContent = msg;
        toast.classList.remove('hidden');

        setTimeout(() => {
            toast.classList.add('hidden');
        }, 4000);
    }
}

/* ==========================================================================
   9. DYNAMIC PDF GENERATOR & DOWNLOADER
   ========================================================================== */
function downloadPDFResume() {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toast-message');

    if (toast && toastMsg) {
        toastMsg.textContent = 'Generating PDF resume download...';
        toast.classList.remove('hidden');
    }

    if (typeof html2pdf !== 'undefined') {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', 'light');

        const opt = {
            margin:       [0.3, 0.4, 0.4, 0.4],
            filename:     'Ganesh_Ubale_Senior_iOS_Lead_Engineer_Resume.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true, logging: false },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(document.body).save().then(() => {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (toast && toastMsg) {
                toastMsg.textContent = 'PDF Resume downloaded successfully!';
                setTimeout(() => toast.classList.add('hidden'), 3500);
            }
        }).catch((err) => {
            console.error('PDF Generation error:', err);
            document.documentElement.setAttribute('data-theme', currentTheme);
            window.print();
        });
    } else {
        window.print();
    }
}
