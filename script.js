/**
   ==========================================================================
   FUTURE GAMING SNAP PORTFOLIO - ENGINE FOR SACHIN KUMAR PORTFOLIO v2.0
   ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Ensure CONFIG is loaded
  if (typeof CONFIG === 'undefined') {
    console.error("Configuration file config.js was not loaded properly.");
    return;
  }

  // --------------------------------------------------------------------------
  // DYNAMIC DATA INJECTION
  // --------------------------------------------------------------------------
  function injectConfigData() {
    // General Profile
    document.getElementById('hud-profile-name').textContent = CONFIG.profile.name;
    document.getElementById('hud-profile-title').textContent = CONFIG.profile.title;
    document.getElementById('about-name').textContent = CONFIG.profile.name;
    document.getElementById('about-location').textContent = CONFIG.profile.location;
    document.getElementById('about-studying').textContent = CONFIG.profile.degree;
    document.getElementById('about-university').textContent = CONFIG.profile.university;
    document.getElementById('about-desc').textContent = CONFIG.profile.about;
    document.getElementById('hud-university').textContent = CONFIG.profile.university.toUpperCase().replace(/\s+/g, '_');
    
    if (CONFIG.profile.photo) {
      document.getElementById('hud-avatar').src = CONFIG.profile.photo;
    }

    // Comms Crypto Key
    document.getElementById('comms-crypt-key').textContent = `SK-SECURE-${CONFIG.profile.location.toUpperCase().split(',')[0].trim()}-${CONFIG.profile.name.toUpperCase().replace(/\s+/g, '-')}`;

    // 1. Core Skills Meters
    const skillsCoreContainer = document.getElementById('skills-core-container');
    skillsCoreContainer.innerHTML = '';
    CONFIG.skills.core.forEach(skill => {
      const block = document.createElement('div');
      block.className = 'skill-meter-block';
      block.innerHTML = `
        <div class="skill-meter-info">
          <span class="skill-meter-title"><i class="${skill.icon}"></i> ${skill.name}</span>
          <span class="skill-meter-pct">${skill.percentage}%</span>
        </div>
        <div class="skill-meter-track">
          <div class="skill-meter-fill" data-percentage="${skill.percentage}"></div>
        </div>
      `;
      skillsCoreContainer.appendChild(block);
    });

    // 2. Future Skills Badges
    const skillsFutureContainer = document.getElementById('skills-future-container');
    skillsFutureContainer.innerHTML = '';
    CONFIG.skills.future.forEach(skill => {
      const badge = document.createElement('div');
      badge.className = 'future-badge';
      badge.innerHTML = `
        <i class="${skill.icon}"></i>
        <span>${skill.name}</span>
      `;
      skillsFutureContainer.appendChild(badge);
    });

    // 3. Projects Gaming Cards
    const projectsContainer = document.getElementById('projects-cards-container');
    projectsContainer.innerHTML = '';
    CONFIG.projects.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = `project-gaming-card ${proj.isPlaceholder ? 'placeholder-card' : ''}`;
      
      const tagLabel = proj.isPlaceholder ? "UPCOMING_MODULE" : `PROJECT_0${idx + 1} // ACTIVE`;
      const badgeHtml = proj.tags.map(t => `<span class="tech-badge">${t}</span>`).join('');
      
      card.innerHTML = `
        <div class="project-card-inner">
          <div class="project-card-image-box">
            <div class="project-card-overlay-grid"></div>
            <div class="project-card-hologram-line"></div>
            <img src="${proj.image}" alt="${proj.title}" class="project-card-img">
          </div>
          <div class="project-card-details">
            <span class="project-card-tag">${tagLabel}</span>
            <h3>${proj.title}</h3>
            <p>${proj.description}</p>
            <div class="project-tech-badges">
              ${badgeHtml}
            </div>
            <div class="project-action-links">
              <a href="${proj.githubLink}" target="_blank" class="gaming-btn">
                <span class="btn-text">REPOSITORY</span>
              </a>
              <a href="${proj.demoLink}" ${proj.demoLink === '#' ? 'onclick="event.preventDefault(); alert(\'Simulation Link Only\')"' : 'target="_blank"'} class="gaming-btn">
                <span class="btn-text">LAUNCH DEMO</span>
              </a>
            </div>
          </div>
        </div>
      `;
      projectsContainer.appendChild(card);
    });

    // 4. Timeline
    const timelineContainer = document.getElementById('timeline-container');
    timelineContainer.innerHTML = '';
    CONFIG.timeline.forEach(node => {
      const item = document.createElement('div');
      item.className = 'timeline-node-item';
      item.innerHTML = `
        <div class="timeline-bullet-reticle"></div>
        <div class="timeline-node-inner">
          <span class="timeline-node-year">${node.year}</span>
          <h4>${node.title}</h4>
          <p>${node.desc}</p>
        </div>
      `;
      timelineContainer.appendChild(item);
    });

    // 5. Achievements Counters
    const achievementsContainer = document.getElementById('achievements-container');
    achievementsContainer.innerHTML = '';
    CONFIG.achievements.forEach(ach => {
      const card = document.createElement('div');
      card.className = 'achievement-counter-card';
      card.innerHTML = `
        <div class="achievement-icon"><i class="${ach.icon}"></i></div>
        <span class="achievement-number" data-target="${ach.count}">0</span>
        <span class="achievement-label">${ach.label}</span>
      `;
      achievementsContainer.appendChild(card);
    });

    // 6. Services Panel
    const servicesContainer = document.getElementById('services-container');
    servicesContainer.innerHTML = '';
    CONFIG.services.forEach(serv => {
      const panel = document.createElement('div');
      panel.className = 'service-hud-panel';
      panel.innerHTML = `
        <div class="service-icon-box"><i class="${serv.icon}"></i></div>
        <h4>${serv.title}</h4>
        <p>${serv.desc}</p>
      `;
      servicesContainer.appendChild(panel);
    });

    // 7. Direct Comms Buttons
    const commsContainer = document.getElementById('comms-buttons-container');
    commsContainer.innerHTML = '';
    const socialMap = [
      { key: 'linkedin', label: 'LINKEDIN_PORTAL', icon: 'fab fa-linkedin' },
      { key: 'github', label: 'GITHUB_REPOS', icon: 'fab fa-github' },
      { key: 'instagram', label: 'INSTAGRAM_FEED', icon: 'fab fa-instagram' },
      { key: 'email', label: 'EMAIL_NODE', icon: 'fas fa-envelope', linkPrefix: 'mailto:' },
      { key: 'phone', label: 'SECURE_VOICE', icon: 'fas fa-phone-alt', linkPrefix: 'tel:' },
      { key: 'whatsapp', label: 'WHATSAPP_LINK', icon: 'fab fa-whatsapp' },
      { key: 'telegram', label: 'TELEGRAM_LINK', icon: 'fab fa-telegram-plane' },
      { key: 'resume', label: 'DOWNLOAD_RESUME', icon: 'fas fa-file-download' },
      { key: 'portfolioPdf', label: 'PORTFOLIO_PDF', icon: 'fas fa-file-pdf' }
    ];

    socialMap.forEach(item => {
      const val = CONFIG.socials[item.key];
      if (val && val !== '#') {
        const link = item.linkPrefix ? `${item.linkPrefix}${val}` : val;
        const btn = document.createElement('a');
        btn.className = 'comms-btn';
        btn.href = link;
        btn.target = '_blank';
        btn.innerHTML = `
          <i class="${item.icon}"></i>
          <span>${item.label}</span>
        `;
        commsContainer.appendChild(btn);
      }
    });
  }

  injectConfigData();


  // --------------------------------------------------------------------------
  // AUDIO SYNTHESIZER ENGINE (WEB AUDIO API)
  // --------------------------------------------------------------------------
  let audioCtx = null;
  let audioEnabled = false;
  const audioToggle = document.getElementById('audio-toggle');

  function initAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playSynthSound(type) {
    if (!audioEnabled || !CONFIG.theme.enableSound) return;
    initAudioContext();
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    if (type === 'hover') {
      // Sleek gaming hover beep
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1400, now);
      osc.frequency.exponentialRampToValueAtTime(900, now + 0.04);

      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.04);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } 
    else if (type === 'click') {
      // Confirmation double chirp
      const osc1 = audioCtx.createOscillator();
      const osc2 = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(700, now);
      osc1.frequency.setValueAtTime(1000, now + 0.04);
      osc2.type = 'square';
      osc2.frequency.setValueAtTime(705, now);
      osc2.frequency.setValueAtTime(1005, now + 0.04);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(audioCtx.destination);

      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 0.12);
      osc2.stop(now + 0.12);
    } 
    else if (type === 'scan') {
      // Rapid loader ticking
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(200 + Math.random() * 900, now);
      gain.gain.setValueAtTime(0.005, now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.02);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.02);
    } 
    else if (type === 'swoosh') {
      // Cinematic transition whoosh
      const osc = audioCtx.createOscillator();
      const filter = audioCtx.createBiquadFilter();
      const gain = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.5);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(150, now + 0.5);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.5);
    }
    else if (type === 'error') {
      // Warning low buzz
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(120, now);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    }
    else if (type === 'startup-rumble') {
      // Sub rumble
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(40, now);
      osc.frequency.linearRampToValueAtTime(100, now + 1.5);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(200, now);
      filter.frequency.exponentialRampToValueAtTime(1000, now + 0.9);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now);
      osc.stop(now + 1.8);
    } 
    else if (type === 'startup-chime') {
      // C Major arpeggiated chime
      const chords = [523.25, 659.25, 783.99, 1046.50];
      chords.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        
        gain.gain.setValueAtTime(0.025, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.00001, now + i * 0.08 + 0.6);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.6);
      });
    }
  }

  audioToggle.addEventListener('click', () => {
    initAudioContext();
    audioEnabled = !audioEnabled;
    if (audioEnabled) {
      audioToggle.classList.add('sound-on');
      document.querySelector('.audio-status').textContent = 'SOUND: ON';
      playSynthSound('click');
      playNarratorVoice(CONFIG.theme.voiceText);
    } else {
      audioToggle.classList.remove('sound-on');
      document.querySelector('.audio-status').textContent = 'SOUND: OFF';
      window.speechSynthesis.cancel();
    }
  });


  // --------------------------------------------------------------------------
  // AI VOICE NARRATOR
  // --------------------------------------------------------------------------
  function playNarratorVoice(text) {
    if (!audioEnabled || !CONFIG.theme.enableSound) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 0.85;
    utterance.rate = 1.0;
    utterance.pitch = 0.72; // Deep artificial voice

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      const targetVoice = voices.find(voice => voice.lang.includes('en') && (voice.name.includes('David') || voice.name.includes('Google') || voice.name.includes('Natural')));
      if (targetVoice) utterance.voice = targetVoice;
    }

    window.speechSynthesis.speak(utterance);
  }


  // --------------------------------------------------------------------------
  // HIGH FPS CANVAS (COORDS GRID + FLYING PARALLAX PARTICLES)
  // --------------------------------------------------------------------------
  const canvas = document.getElementById('gaming-canvas');
  const ctx = canvas.getContext('2d');
  
  let width, height;
  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let particles = [];
  const starCount = 100;
  
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Setup stars
  for (let i = 0; i < starCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.4,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.55 + 0.15
    });
  }

  // Tracking mouse triggers coords logs on the sidebar diagnostic
  const mouseCoordsNode = document.getElementById('hud-mouse-coords');
  document.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    
    // Inject coordinates strings
    const padX = String(Math.floor(mouse.targetX)).padStart(3, '0');
    const padY = String(Math.floor(mouse.targetY)).padStart(3, '0');
    mouseCoordsNode.textContent = `MOUSE_X: ${padX} | MOUSE_Y: ${padY}`;
  });

  // Canvas loop
  function drawCanvas() {
    ctx.clearRect(0, 0, width, height);

    // Coordinate grid overlay
    ctx.strokeStyle = document.body.classList.contains('system-override') 
      ? 'rgba(255, 0, 60, 0.025)' 
      : 'rgba(0, 243, 255, 0.025)';
    ctx.lineWidth = 1;

    mouse.x += (mouse.targetX - mouse.x) * 0.06;
    mouse.y += (mouse.targetY - mouse.y) * 0.06;

    const gridSpace = 65;
    const shiftX = (mouse.x - width / 2) * 0.05;
    const shiftY = (mouse.y - height / 2) * 0.05;

    for (let x = shiftX % gridSpace; x < width; x += gridSpace) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = shiftY % gridSpace; y < height; y += gridSpace) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Radial gradient glow following mouse coordinates
    const glowGradient = ctx.createRadialGradient(
      width / 2 + shiftX * 0.5, height / 2 + shiftY * 0.5, 40,
      width / 2 + shiftX * 0.5, height / 2 + shiftY * 0.5, 420
    );
    if (document.body.classList.contains('system-override')) {
      glowGradient.addColorStop(0, 'rgba(255, 0, 60, 0.045)');
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    } else {
      glowGradient.addColorStop(0, 'rgba(157, 78, 221, 0.035)');
      glowGradient.addColorStop(0.5, 'rgba(0, 243, 255, 0.015)');
      glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    }
    ctx.fillStyle = glowGradient;
    ctx.fillRect(0, 0, width, height);

    // Drifting stars
    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Attract to mouse
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < 150) {
        const attraction = (150 - dist) * 0.0003;
        p.x += dx * attraction;
        p.y += dy * attraction;
      }

      ctx.fillStyle = document.body.classList.contains('system-override')
        ? `rgba(255, 0, 60, ${p.opacity})`
        : `rgba(0, 243, 255, ${p.opacity})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(drawCanvas);
  }
  requestAnimationFrame(drawCanvas);


  // --------------------------------------------------------------------------
  // SECURE GATE BOOTING CHRONOLOGY
  // --------------------------------------------------------------------------
  const startBtn = document.getElementById('start-experience-btn');
  const loaderConsoleStream = document.getElementById('loader-console-stream');
  const loaderProgress = document.getElementById('loader-progress-bar');
  const introScreen = document.getElementById('intro-screen');
  const dashboard = document.getElementById('dashboard');

  const bootLogs = [
    { text: "INITIALIZING MAIN BOARD CARD DECK SYSTEMS...", delay: 200 },
    { text: "OVERCLOCKING CORE TRANSIT DRIVERS... SUCCESS", delay: 500, status: "ok" },
    { text: "CONNECTING COORDS ENGINE MATRIX DATA...", delay: 800 },
    { text: "MOUNTING AUDIO SYNTH TRANSIT VOICES...", delay: 1100 },
    { text: "SECURE SOCKET ESTABLISHED ON PORT: 8080", delay: 1500, status: "ok" },
    { text: "VERIFYING FULL-VIEWPORT OVERLAYS DETECT...", delay: 2000 },
    { text: "DECRYPTING SECURITY ENVELOPE: SACHIN_KUMAR", delay: 2500, status: "ok" },
    { text: "ACCESS GRANTED. INITIALIZING SINGLE SLIDE LOGIC.", delay: 3000, status: "ok" }
  ];

  let currentLogIdx = 0;
  
  function addBootLog(log) {
    const entry = document.createElement('div');
    entry.className = 'log-item';
    
    let label = "> ";
    if (log.status === 'ok') {
      entry.className = 'log-item log-ok';
      label = "[SUCCESS] ";
    } else if (log.status === 'err') {
      entry.className = 'log-item log-err';
      label = "[FATAL] ";
    }
    
    entry.textContent = label + log.text;
    loaderConsoleStream.appendChild(entry);
    loaderConsoleStream.scrollTop = loaderConsoleStream.scrollHeight;
    playSynthSound('scan');
  }

  const loadDuration = CONFIG.theme.loadingTime || 4000;
  const startTimestamp = Date.now();

  const loadingInterval = setInterval(() => {
    const elapsed = Date.now() - startTimestamp;
    const pct = Math.min((elapsed / loadDuration) * 100, 100);
    
    loaderProgress.style.width = `${pct}%`;

    if (currentLogIdx < bootLogs.length && elapsed >= bootLogs[currentLogIdx].delay) {
      addBootLog(bootLogs[currentLogIdx]);
      currentLogIdx++;
    }

    if (pct >= 100) {
      clearInterval(loadingInterval);
      document.getElementById('boot-header').textContent = "ACCESS PROTOCOL GRANTED";
      document.getElementById('boot-header').style.color = CONFIG.theme.colors.accent || '#ff007f';
      document.getElementById('boot-header').style.textShadow = `0 0 15px ${CONFIG.theme.colors.accent || '#ff007f'}`;
      
      startBtn.style.display = 'inline-flex';
      playSynthSound('startup-chime');
    }
  }, 100);

  // Access button connecting experienced
  startBtn.addEventListener('click', () => {
    audioEnabled = true;
    audioToggle.classList.add('sound-on');
    document.querySelector('.audio-status').textContent = 'SOUND: ON';

    playSynthSound('startup-rumble');
    playSynthSound('startup-chime');

    setTimeout(() => {
      playNarratorVoice(CONFIG.theme.voiceText);
    }, 450);

    introScreen.classList.add('zoom-glitch-exit');
    dashboard.classList.add('active');

    setTimeout(() => {
      introScreen.style.display = 'none';
      startHeroTyping();
      
      // Initialize skills bar values resets (we load them dynamically on their tab focus)
      resetSkillBars();
    }, 1000);
  });


  // --------------------------------------------------------------------------
  // FULL-SCREEN SLIDE SNAP DECK NAVIGATION ENGINE (ONE SNAP PER SCROLL/CLICK)
  // --------------------------------------------------------------------------
  const panels = document.querySelectorAll('.gaming-panel');
  const navBtns = document.querySelectorAll('.nav-hud-btn');
  const sidebarLogs = document.getElementById('sidebar-logs');
  const activeSectorValue = document.getElementById('hud-active-sector');

  let currentPanelIndex = 0;
  let isScrollCooldown = false;
  const cooldownDuration = 950; // Milliseconds locks

  function addSidebarLog(msg) {
    const time = new Date().toTimeString().split(' ')[0];
    const log = document.createElement('div');
    log.className = 'log-line';
    log.innerHTML = `> [${time}] ${msg}`;
    sidebarLogs.appendChild(log);
    sidebarLogs.scrollTop = sidebarLogs.scrollHeight;
  }

  // Dynamic animations on section entrance
  function triggerPanelAnimations(index) {
    const panel = panels[index];
    const panelId = panel.id;

    // Reset all sub animations first
    resetSkillBars();

    if (panelId === 'sec-about') {
      // Trigger About stats count ups
      countUpElement('stat-projects', CONFIG.stats.completedProjects);
      countUpElement('stat-technologies', CONFIG.stats.technologies);
      animateProgressPct('stat-learning', CONFIG.stats.learningProgress);
    } 
    else if (panelId === 'sec-skills') {
      // Trigger Core Skills widths load
      animateSkillBars();
    } 
    else if (panelId === 'sec-achievements') {
      // Trigger achievements count ups
      document.querySelectorAll('.achievement-number').forEach(num => {
        const target = parseInt(num.getAttribute('data-target'));
        countUpElementInline(num, target);
      });
    }
  }

  function resetSkillBars() {
    document.querySelectorAll('.skill-meter-fill').forEach(fill => {
      fill.style.width = '0%';
    });
  }

  function animateSkillBars() {
    document.querySelectorAll('.skill-meter-fill').forEach(fill => {
      const pct = fill.parentNode.parentNode.querySelector('.skill-meter-pct').textContent;
      fill.style.width = pct;
    });
  }

  function countUpElement(id, target) {
    let current = 0;
    const el = document.getElementById(id);
    if (!el) return;
    const step = Math.ceil(target / 25) || 1;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 45);
  }

  function countUpElementInline(el, target) {
    let current = 0;
    const step = Math.ceil(target / 30) || 1;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current;
    }, 35);
  }

  function animateProgressPct(id, targetStr) {
    const el = document.getElementById(id);
    if (!el) return;
    const targetVal = parseInt(targetStr);
    let current = 0;
    const timer = setInterval(() => {
      current += 2;
      if (current >= targetVal) {
        current = targetVal;
        clearInterval(timer);
      }
      el.textContent = `${current}%`;
    }, 25);
  }

  // Core fullpage transition mechanism
  function transitionToPanel(newIndex, direction = 'next') {
    if (newIndex < 0 || newIndex >= panels.length) {
      playSynthSound('error');
      addSidebarLog("SECTOR BOUNDARY BLOCK: TRANSIT SHIELD ACTIVE");
      return;
    }

    // Lock inputs during transitions
    isScrollCooldown = true;

    // Apply digital noise and screen shake
    document.body.classList.add('panel-transitioning', 'body-glitched');
    playSynthSound('swoosh');

    // Remove exit state layout tags
    panels.forEach(p => p.className = 'gaming-panel');

    // Set old panel exit visual classes
    const oldIndex = currentPanelIndex;
    if (direction === 'next') {
      panels[oldIndex].classList.add('exit-prev');
    } else {
      panels[oldIndex].classList.add('exit-next');
    }

    // Set new active indices
    currentPanelIndex = newIndex;
    panels[currentPanelIndex].classList.add('active');

    // Update active nav indicators in sidebar
    navBtns.forEach(btn => btn.classList.remove('active-nav'));
    const matchingBtn = document.querySelector(`.nav-hud-btn[data-index="${currentPanelIndex}"]`);
    if (matchingBtn) {
      matchingBtn.classList.add('active-nav');
    }

    // Update top header status values
    const targetId = panels[currentPanelIndex].id;
    const activeSectorName = targetId.replace('sec-', '').toUpperCase().replace('-', '_');
    activeSectorValue.textContent = activeSectorName;

    addSidebarLog(`SECTOR TRANSIT ENGAGED: [${activeSectorName}]`);

    // Dynamic inside panel animation loaders
    triggerPanelAnimations(currentPanelIndex);

    // Release filters after cooldown
    setTimeout(() => {
      document.body.classList.remove('panel-transitioning', 'body-glitched');
      isScrollCooldown = false;
    }, cooldownDuration);
  }

  // 1. Intercept normal mousewheel scrolling
  document.getElementById('panels-container').addEventListener('wheel', (e) => {
    // Prevent normal free scrolls
    e.preventDefault();
    if (isScrollCooldown) return;

    if (e.deltaY > 0) {
      transitionToPanel(currentPanelIndex + 1, 'next');
    } else if (e.deltaY < 0) {
      transitionToPanel(currentPanelIndex - 1, 'prev');
    }
  }, { passive: false });

  // 2. Intercept keyboard gaming keypresses
  document.addEventListener('keydown', (e) => {
    if (isScrollCooldown) return;

    if (e.key === 'e' || e.key === 'E' || e.key === 'ArrowDown') {
      transitionToPanel(currentPanelIndex + 1, 'next');
    } 
    else if (e.key === 'q' || e.key === 'Q' || e.key === 'ArrowUp') {
      transitionToPanel(currentPanelIndex - 1, 'prev');
    }
  });

  // 3. Bottom controls buttons
  document.getElementById('prev-sector-key').addEventListener('click', () => {
    if (isScrollCooldown) return;
    transitionToPanel(currentPanelIndex - 1, 'prev');
  });
  document.getElementById('next-sector-key').addEventListener('click', () => {
    if (isScrollCooldown) return;
    transitionToPanel(currentPanelIndex + 1, 'next');
  });

  // 4. Sidebar nav buttons click transits
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isScrollCooldown) return;
      const targetIdx = parseInt(btn.getAttribute('data-index'));
      const dir = targetIdx > currentPanelIndex ? 'next' : 'prev';
      transitionToPanel(targetIdx, dir);
    });
  });

  // Hero enter button
  document.getElementById('home-enter-btn').addEventListener('click', () => {
    if (isScrollCooldown) return;
    transitionToPanel(1, 'next');
  });


  // --------------------------------------------------------------------------
  // TYPED.JS HERO SUBTITLE
  // --------------------------------------------------------------------------
  function startHeroTyping() {
    const options = {
      strings: [
        "Computer Science Engineer",
        "Frontend Developer",
        "JavaScript Specialist",
        "Creative UI Designer",
        "Problem Solver",
        "Student"
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '_'
    };
    new Typed('#typing-sub-target', options);
  }


  // --------------------------------------------------------------------------
  // MAGNETIC BUTTONS & 3D TILT
  // --------------------------------------------------------------------------
  const customCursor = document.getElementById('custom-cursor');
  const cursorGlow = document.getElementById('cursor-glow');
  let cursorX = 0, cursorY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    
    cursorGlow.style.left = `${targetX}px`;
    cursorGlow.style.top = `${targetY}px`;
  });

  function animateCursor() {
    cursorX += (targetX - cursorX) * 0.16;
    cursorY += (targetY - cursorY) * 0.16;
    
    customCursor.style.left = `${cursorX}px`;
    customCursor.style.top = `${cursorY}px`;
    
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // Clickable link highlight states
  const clickableSelectors = 'a, button, .nav-hud-btn, .comms-btn, .hud-audio-control, .hud-key-btn';
  function updateCursorHoverEvents() {
    document.querySelectorAll(clickableSelectors).forEach(el => {
      el.addEventListener('mouseenter', () => {
        document.body.classList.add('cursor-active');
        playSynthSound('hover');
      });
      el.addEventListener('mouseleave', () => {
        document.body.classList.remove('cursor-active');
      });
    });
  }
  updateCursorHoverEvents();

  // Card 3D tilt
  function initCardTilts() {
    document.addEventListener('mousemove', (e) => {
      const card = e.target.closest('.project-card-inner');
      if (!card) return;
      
      const bounds = card.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;
      
      const rotateX = -((mouseY - bounds.height / 2) / bounds.height) * 15;
      const rotateY = ((mouseX - bounds.width / 2) / bounds.width) * 15;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    document.addEventListener('mouseout', (e) => {
      const card = e.target.closest('.project-card-inner');
      if (!card) return;
      
      card.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    });
  }
  initCardTilts();

  // Magnetic button sweep
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const bounds = btn.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left - bounds.width / 2;
      const mouseY = e.clientY - bounds.top - bounds.height / 2;
      btn.style.transform = `translate(${mouseX * 0.3}px, ${mouseY * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
    });
  });


  // --------------------------------------------------------------------------
  // SECRET KONAMI OVERRIDE PROTOCOL
  // --------------------------------------------------------------------------
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];
  let konamiIndex = 0;
  let sirenInterval = null;

  document.addEventListener('keydown', (e) => {
    const key = e.key;
    const targetKey = konamiCode[konamiIndex];

    if (key.toLowerCase() === targetKey.toLowerCase()) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        triggerSecretOverride();
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  function triggerSecretOverride() {
    document.body.classList.add('system-override');
    document.getElementById('secret-overlay').classList.add('active');
    addSidebarLog("ALERT: CRITICAL SYSTEM OVERRIDE PROTOCOL ENGAGED!");
    playWarningSiren();
    
    setTimeout(() => {
      playNarratorVoice("Warning. Security breach detected. Systems overridden. Red alert mode activated.");
    }, 500);
  }

  function playWarningSiren() {
    if (!audioEnabled || !CONFIG.theme.enableSound) return;
    initAudioContext();

    sirenInterval = setInterval(() => {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(250, now);
      osc.frequency.linearRampToValueAtTime(500, now + 0.3);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.3);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.3);
    }, 400);
  }

  document.getElementById('restore-system-btn').addEventListener('click', () => {
    document.body.classList.remove('system-override');
    document.getElementById('secret-overlay').classList.remove('active');
    
    if (sirenInterval) {
      clearInterval(sirenInterval);
      sirenInterval = null;
    }

    playSynthSound('click');
    addSidebarLog("RESTORE PROTOCOL COMPLETE: SECURITY SHIELDS ACTIVE");

    setTimeout(() => {
      playNarratorVoice("Core systems restored. System operating within normal specifications.");
    }, 600);
  });


  // --------------------------------------------------------------------------
  // TIME & LATENCY SIMULATORS
  // --------------------------------------------------------------------------
  const systemTimeVal = document.getElementById('hud-system-time');
  const pingVal = document.getElementById('ping-latency');

  function updateSystemTime() {
    const date = new Date();
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    systemTimeVal.textContent = `${h}:${m}:${s}`;
  }

  function simulateNetworkPing() {
    const currentPing = Math.floor(Math.random() * 8) + 7;
    pingVal.textContent = `${currentPing}ms`;
  }

  setInterval(updateSystemTime, 1000);
  setInterval(simulateNetworkPing, 4000);
  
  updateSystemTime();
  simulateNetworkPing();
});
