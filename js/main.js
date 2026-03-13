const siteData = {
    name: "Mahmoud Hossam Abd ELMoaty",
    title: "Cybersecurity Engineer",
    email: "mahmoudhossam.eng@gmail.com",
    phone: "+20 109 957 4793",
    location: "Alexandria, Egypt",
    
    social: {
        linkedin: "https://linkedin.com/in/mahmoud-hossam1",
        github: "https://github.com/Mahmoud-hossam1"
    },
    
    typingTexts: [
        "Cybersecurity Engineer",
        "Penetration Tester",
        "Ethical Hacker",
        "Security Analyst",
        "Python Developer"
    ],
    
    skills: {
        programming: [
            { name: "Python", percent: 85 },
            { name: "Java", percent: 80 },
            { name: "C++", percent: 75 },
            { name: "Assembly", percent: 60 }
        ],
        web: [
            { name: "HTML/CSS", percent: 85 },
            { name: "JavaScript", percent: 75 },
            { name: "Node.js", percent: 70 },
            { name: "MySQL", percent: 75 }
        ],
        security: [
            { name: "Penetration Testing", percent: 80 },
            { name: "Network Security", percent: 85 },
            { name: "Vulnerability Assessment", percent: 80 },
            { name: "Ethical Hacking", percent: 85 }
        ],
        tools: [
            { name: "Linux/Kali Linux", percent: 90 },
            { name: "Wireshark", percent: 85 },
            { name: "Nmap", percent: 85 },
            { name: "Metasploit", percent: 75 },
            { name: "Burp Suite", percent: 80 }
        ]
    },
    
    projects: [
        {
            id: 1,
            title: "Network Security Scanner",
            category: "security",
            description: "A comprehensive network vulnerability scanner built with Python that identifies potential security weaknesses in network infrastructure.",
            fullDescription: "This tool performs comprehensive network scans to identify open ports, running services, and potential vulnerabilities. It generates detailed reports and recommendations for security improvements.",
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
            tech: ["Python", "Nmap", "Scapy"],
            github: "https://github.com/Mahmoud-hossam1",
            demo: null
        },
        {
            id: 2,
            title: "Password Manager",
            category: "security",
            description: "A secure password management application with encryption and secure storage capabilities.",
            fullDescription: "Developed a desktop application for secure password storage using AES-256 encryption. Features include password generation, secure clipboard handling, and automatic database backup.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
            tech: ["Python", "SQLite", "Cryptography"],
            github: "https://github.com/Mahmoud-hossam1",
            demo: null
        },
        {
            id: 3,
            title: "Portfolio Website",
            category: "web",
            description: "A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript.",
            fullDescription: "Designed and developed a fully responsive portfolio website featuring dark mode, smooth animations, and interactive components. Built without any frameworks for optimal performance.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Mahmoud-hossam1",
            demo: "#"
        },
        {
            id: 4,
            title: "Packet Analyzer",
            category: "security",
            description: "A network packet analysis tool for monitoring and analyzing network traffic in real-time.",
            fullDescription: "Built a packet analyzer using Python and Scapy that captures and analyzes network packets. Features include protocol filtering, packet inspection, and traffic statistics visualization.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
            tech: ["Python", "Scapy", "Wireshark"],
            github: "https://github.com/Mahmoud-hossam1",
            demo: null
        },
        {
            id: 5,
            title: "Task Management App",
            category: "programming",
            description: "A Java-based desktop application for task and project management with team collaboration features.",
            fullDescription: "Developed a comprehensive task management system using Java and JavaFX. Features include project planning, deadline tracking, team assignment, and progress reporting.",
            image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
            tech: ["Java", "JavaFX", "MySQL"],
            github: "https://github.com/Mahmoud-hossam1",
            demo: null
        },
        {
            id: 6,
            title: "API Security Tester",
            category: "security",
            description: "An automated tool for testing REST API security vulnerabilities and misconfigurations.",
            fullDescription: "Created an API security testing tool that checks for common vulnerabilities like SQL injection, authentication bypass, and rate limiting issues. Generates comprehensive security reports.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
            tech: ["Python", "Burp Suite", "REST"],
            github: "https://github.com/Mahmoud-hossam1",
            demo: null
        }
    ],
    
    certificates: [
        {
            title: "CCNA: Enterprise Networking, Security, and Automation",
            issuer: "Cisco",
            date: "Oct 15, 2025",
            icon: "fa-network-wired"
        },
        {
            title: "CCNA: Switching, Routing, and Wireless Essentials",
            issuer: "Cisco",
            date: "Oct 12, 2025",
            icon: "fa-network-wired"
        },
        {
            title: "CCNA: Introduction to Networks",
            issuer: "Cisco",
            date: "Oct 12, 2025",
            icon: "fa-network-wired"
        },
        {
            title: "Cyber Threat Management",
            issuer: "Cisco",
            date: "Jun 30, 2025",
            icon: "fa-shield-halved"
        },
        {
            title: "Junior Cybersecurity Analyst Career Path",
            issuer: "Cisco",
            date: "Jun 30, 2025",
            icon: "fa-user-shield"
        },
        {
            title: "Introduction à la Cybersécurité",
            issuer: "Cisco",
            date: "Jun 29, 2025",
            icon: "fa-lock"
        },
        {
            title: "The Arduino Platform and C Programming",
            issuer: "Coursera",
            date: "2025",
            icon: "fa-microchip"
        },
        {
            title: "Fundamentals of Network Communication",
            issuer: "Coursera",
            date: "2025",
            icon: "fa-wifi"
        },
        {
            title: "DeskTop Application Development With Java",
            issuer: "ITI",
            date: "2024",
            icon: "fa-java"
        },
        {
            title: "Digital Marketing",
            issuer: "American Chamber of Commerce in Egypt",
            date: "Oct 2024",
            icon: "fa-bullhorn"
        }
    ]
};



document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    // Initialize all components
    initNavigation();
    initThemeToggle();
    initTypingEffect();
    initScrollReveal();
    initSkills();
    initProjects();
    initCertificates();
    initTimeline();
    initContactForm();
    initBackToTop();
    initStatsCounter();
    updateContactLinks();
    updateCurrentYear();
}


function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    function setMenuState(isOpen) {
        navToggle.classList.toggle('active', isOpen);
        navMenu.classList.toggle('active', isOpen);
        navToggle.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('no-scroll', isOpen && window.innerWidth <= 768);
    }
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    });
    
    navToggle.addEventListener('click', () => {
        const isOpen = !navMenu.classList.contains('active');
        setMenuState(isOpen);
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setMenuState(false);
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
            setMenuState(false);
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            document.body.classList.remove('no-scroll');
        }
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}


function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
}


function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    const texts = siteData.typingTexts;
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; 
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; 
        }
        
        setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 1500);
}


function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => observer.observe(el));
}


function initSkills() {

    populateSkills('programmingSkills', siteData.skills.programming);
    populateSkills('webSkills', siteData.skills.web);
    populateSkills('securitySkills', siteData.skills.security);
    populateSkills('toolsSkills', siteData.skills.tools);
    
    const skillsSection = document.getElementById('skills');
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateSkillBars();
            }
        });
    }, { threshold: 0.3 });
    
    observer.observe(skillsSection);
}

function populateSkills(containerId, skills) {
    const container = document.getElementById(containerId);
    
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
            </div>
            <div class="skill-bar">
                <div class="skill-progress" data-width="${skill.percent}"></div>
            </div>
        `;
        container.appendChild(skillItem);
    });
}

function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = `${width}%`;
        }, index * 100);
    });
}


function initProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    renderProjects(siteData.projects);
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            const filteredProjects = filter === 'all' 
                ? siteData.projects 
                : siteData.projects.filter(p => p.category === filter);
            
            renderProjects(filteredProjects);
        });
    });
}

function renderProjects(projects) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card reveal-up';
        card.setAttribute('data-delay', index * 100);
        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <button class="btn btn-primary" onclick="openProjectModal(${project.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
            </div>
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
        
        setTimeout(() => {
            card.classList.add('revealed');
        }, 100 + index * 100);
    });
}

function openProjectModal(projectId) {
    const project = siteData.projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalCategory = document.getElementById('modalCategory');
    const modalDescription = document.getElementById('modalDescription');
    const modalTech = document.getElementById('modalTech');
    const modalLinks = document.getElementById('modalLinks');
    
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.textContent = project.fullDescription;
    
    modalTech.innerHTML = project.tech.map(t => 
        `<span class="tech-tag">${t}</span>`
    ).join('');
    
    let linksHTML = '';
    if (project.github) {
        linksHTML += `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
            <i class="fab fa-github"></i> View Code
        </a>`;
    }
    if (project.demo) {
        linksHTML += `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i> Live Demo
        </a>`;
    }
    modalLinks.innerHTML = linksHTML;
    
    modal.classList.add('show');
    document.body.classList.add('no-scroll');
    
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.onclick = closeModal;
    overlay.onclick = closeModal;
    
    function closeModal() {
        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }
    
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

window.openProjectModal = openProjectModal;


function initCertificates() {
    const certificatesGrid = document.getElementById('certificatesGrid');
    
    siteData.certificates.forEach((cert, index) => {
        const card = document.createElement('div');
        card.className = 'certificate-card reveal-up';
        card.setAttribute('data-delay', index * 50);
        card.innerHTML = `
            <div class="certificate-icon">
                <i class="fas ${cert.icon}"></i>
            </div>
            <div class="certificate-info">
                <h4 class="certificate-title">${cert.title}</h4>
                <p class="certificate-issuer">${cert.issuer}</p>
                <span class="certificate-date">${cert.date}</span>
            </div>
        `;
        certificatesGrid.appendChild(card);
    });
    
    setTimeout(() => {
        document.querySelectorAll('.certificate-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('revealed');
            }, index * 50);
        });
    }, 500);
}


function initTimeline() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.timeline-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tab}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });
}


function initContactForm() {
    const form = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            const submitBtn = form.querySelector('.btn-submit');
            submitBtn.classList.add('loading');
            
            setTimeout(() => {
                submitBtn.classList.remove('loading');
                formSuccess.classList.add('show');
                form.reset();
                
                const formData = new FormData(form);
                const subject = formData.get('subject');
                const message = formData.get('message');
                const email = siteData.email;
                

                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            }, 1500);
        }
    });
    
    form.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
            if (field.classList.contains('error')) {
                validateField(field);
            }
        });
    });
}

function validateForm() {
    const form = document.getElementById('contactForm');
    const fields = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    fields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(field) {
    const value = field.value.trim();
    const errorMessage = field.nextElementSibling;
    let isValid = true;
    let message = '';
    
    if (field.required && !value) {
        isValid = false;
        message = 'This field is required';
    } else if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            message = 'Please enter a valid email address';
        }
    }
    
    if (isValid) {
        field.classList.remove('error');
        errorMessage.textContent = '';
    } else {
        field.classList.add('error');
        errorMessage.textContent = message;
    }
    
    return isValid;
}


function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => animateCounter(stat));
            }
        });
    }, { threshold: 0.5 });
    
    const aboutSection = document.querySelector('.about-stats');
    if (aboutSection) {
        observer.observe(aboutSection);
    }
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}



function updateContactLinks() {

    const linkedinLinks = document.querySelectorAll('a[href*="linkedin"]');
    const githubLinks = document.querySelectorAll('a[href*="github"]');
    const emailLinks = document.querySelectorAll('a[href^="mailto"]');
    
    linkedinLinks.forEach(link => {
        link.href = siteData.social.linkedin;
    });
    
    githubLinks.forEach(link => {
        link.href = siteData.social.github;
    });
    
    emailLinks.forEach(link => {
        link.href = `mailto:${siteData.email}`;
    });
    
    const contactEmail = document.getElementById('contactEmail');
    if (contactEmail) {
        contactEmail.textContent = siteData.email;
    }
}


function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
