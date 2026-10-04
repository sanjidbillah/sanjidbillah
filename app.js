'use strict';

const projects = {
  aamarpay: {
    name: 'aamarPay', category: 'FINTECH / COMMERCE',
    subtitle: 'One mobile experience for everyday services.',
    role: 'Senior Software Engineer', company: 'aamarPay', period: 'Feb 2023 — Sep 2024',
    overview: 'A Flutter super app bringing e-commerce, food delivery, and utility bill payments into a connected mobile experience. The work combined mobile development, payment integration, identity verification, and backend services.',
    contributions: [
      'Built mobile features using Flutter, Provider, and an MVC architecture.',
      'Integrated payment gateway flows and saved-card functionality.',
      'Implemented eKYC verification and developed Django microservices.',
      'Also developed the merchant app for transactions, invoices, and settlements.'
    ],
    stack: ['Flutter', 'Dart', 'Provider', 'MVC', 'Python', 'Django', 'CI/CD'],
    images: ['aamarpay-3.png', 'aamarpay-1.png', 'aamarpay-2.png'],
    links: [
      {label: 'View on Google Play', url: 'https://play.google.com/store/apps/details?id=com.aamarpay.app'},
      {label: 'Merchant app', url: 'https://play.google.com/store/apps/details?id=com.aamarpay.merchant'}
    ]
  },
  neeramoy: {
    name: 'Neeramoy', category: 'DIGITAL HEALTHCARE',
    subtitle: 'Connecting doctors, clinics, and patients.',
    role: 'Mobile development', company: 'Neeramoy Doctor & Patient', period: 'Project work',
    overview: 'Mobile applications for a digital healthcare platform, including a digital clinic for doctors and clinics to manage appointments and connect with patients through telemedicine.',
    contributions: [
      'Developed a mobile digital-clinic experience for doctors and clinics.',
      'Built appointment-management functionality.',
      'Integrated telemedicine calling with the Agora SDK.',
      'Worked across the Doctor and Patient applications, using AWS, Azure, and CI/CD tooling.'
    ],
    stack: ['Flutter', 'Dart', 'MVVM', 'MVC', 'Agora', 'AWS', 'Azure', 'CI/CD'],
    images: ['neeramoy-1.webp', 'neeramoy-2.webp', 'neeramoy-3.webp'],
    links: [
      {label: 'Doctor · App Store', url: 'https://apps.apple.com/us/app/neeramoy-doctor/id1625309691'},
      {label: 'Doctor · Google Play', url: 'https://play.google.com/store/apps/details?id=com.neeramoy.doctor'},
      {label: 'Patient · Google Play', url: 'https://play.google.com/store/apps/details?id=com.neeramoy.customer'}
    ]
  },
  hrm: {
    name: 'Renessa HRM', category: 'ENTERPRISE / HUMAN RESOURCES',
    subtitle: 'A mobile companion for everyday work.',
    role: 'Senior Software Engineer', company: 'Panna Group', period: 'Sep 2024 — Present',
    overview: 'An internal HR management application that brings attendance, leave management, and workplace notices into a mobile experience. Development covered both frontend work and backend contributions as part of a team.',
    contributions: [
      'Developed HR mobile functionality for internal office use.',
      'Implemented attendance features with face detection and location tracking.',
      'Worked on leave management, notices, and company-specific workflows.',
      'Contributed across frontend and backend development with the team.'
    ],
    stack: ['Flutter', 'Dart', 'BLoC', 'Clean Architecture', 'CI/CD', 'Face detection'],
    images: ['hrm-1.png', 'hrm-2.png', 'hrm-3.png'],
    links: [{label: 'View on Google Play', url: 'https://play.google.com/store/apps/details?id=com.renessa.hrmapp'}]
  },
  battery: {
    name: 'Battery Service', category: 'ENTERPRISE / DEALER OPERATIONS',
    subtitle: 'A connected service journey, from sale to warranty.',
    role: 'Senior Software Engineer', company: 'Panna Group', period: 'Sep 2024 — Present',
    overview: 'A dealer service application supporting sales scanning, battery warranty verification, and reporting. The product also gives technicians access to battery and shelf-life information.',
    contributions: [
      'Developed sales-scanning and battery warranty-verification features.',
      'Built management reports and mobile service workflows.',
      'Enabled technician access to battery and shelf-life information.',
      'Partially implemented backend APIs and services.'
    ],
    stack: ['Flutter', 'Dart', 'ASP.NET Core', 'REST APIs', 'Oracle'],
    images: ['battery-2.jpg', 'battery-3.jpg', 'battery-1.jpg'],
    links: [{label: 'View on Google Play', url: 'https://play.google.com/store/apps/details?id=com.battery.service'}]
  }
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
const icon = (id) => `<svg class="icon" aria-hidden="true"><use href="#${id}"/></svg>`;
const dialog = document.querySelector('#project-dialog');
const dialogContent = document.querySelector('#dialog-content');
let previousFocus = null;

function openProject(key) {
  const project = projects[key];
  if (!project) return;
  previousFocus = document.activeElement;
  dialogContent.innerHTML = `
    <p class="micro">${escapeHtml(project.category)}</p>
    <h2 id="dialog-title">${escapeHtml(project.name)}</h2>
    <p class="dialog-subtitle">${escapeHtml(project.subtitle)}</p>
    <div class="dialog-meta">
      <div><span class="micro">MY ROLE</span>${escapeHtml(project.role)}</div>
      <div><span class="micro">COMPANY / PRODUCT</span>${escapeHtml(project.company)}</div>
      <div><span class="micro">PERIOD</span>${escapeHtml(project.period)}</div>
    </div>
    <div class="dialog-body"><div><h3>The product</h3><p>${escapeHtml(project.overview)}</p></div><div><h3>My contribution</h3><ul>${project.contributions.map(text => `<li>${escapeHtml(text)}</li>`).join('')}</ul></div></div>
    <div class="dialog-stack" aria-label="Technologies">${project.stack.map(text => `<span>${escapeHtml(text)}</span>`).join('')}</div>
    <div class="dialog-links">${project.links.map(link => `<a class="button button-dark" href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)} ${icon('arrow-up-right')}</a>`).join('')}</div>
    <div class="dialog-gallery">${project.images.map((source, index) => `<img src="assets/${escapeHtml(source)}" alt="${escapeHtml(project.name)} official app listing screenshot ${index + 1}" loading="lazy">`).join('')}</div>
    <p class="dialog-gallery-caption">Screenshots from the official app listing. Product visuals may reflect a different release from the version currently available.</p>
  `;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  document.querySelector('.dialog-close').focus({preventScroll: true});
}

document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => openProject(button.dataset.project));
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  if (previousFocus instanceof HTMLElement) previousFocus.focus({preventScroll: true});
});

const toast = document.querySelector('.toast');
let toastTimer;
function announce(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 3500);
}
document.querySelector('.copy-email').addEventListener('click', async () => {
  const email = 'masumbillahsanjid@gmail.com';
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(email);
    announce('Email address copied. Let’s talk!');
  } catch {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.email-group > a'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    announce('Email selected. Copy it with your device’s copy command.');
  }
});

function updateTime() {
  const now = new Date();
  const text = new Intl.DateTimeFormat('en-GB', {timeZone: 'Asia/Dhaka', hour: '2-digit', minute: '2-digit', hour12: false}).format(now);
  document.querySelectorAll('[data-time]').forEach(element => {element.textContent = `${text} BST`;});
  document.querySelectorAll('[data-year]').forEach(element => {element.textContent = now.getFullYear();});
}
updateTime();
setInterval(updateTime, 30000);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window) {
  if (!reducedMotion.matches) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    }, {threshold: 0.08});
    document.querySelectorAll('.reveal').forEach(element => {
      element.classList.add('ready');
      revealObserver.observe(element);
    });
  }

  const navigation = Array.from(document.querySelectorAll('.dock [data-section]'));
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.forEach(link => {
        const active = link.dataset.section === entry.target.id;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-20% 0px -55% 0px', threshold: 0});
  document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));
}

// Enhance only the active card, without hijacking the user's pointer or scrolling.
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reducedMotion.matches) {
  document.querySelectorAll('.project-visual').forEach(visual => {
    visual.addEventListener('pointermove', event => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const composition = visual.querySelector('.phone-composition, .battery-phones');
      if (composition) composition.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
    });
    visual.addEventListener('pointerleave', () => {
      const composition = visual.querySelector('.phone-composition, .battery-phones');
      if (composition) composition.style.transform = '';
    });
  });
}
