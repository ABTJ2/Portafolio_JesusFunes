(() => {
  // Spanish is the source content in HTML; only the English copy needs a dictionary.
  const en = {
    brandHome: "Go to homepage",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNavigation: "Main navigation",
    languageSelection: "Select language",
    aboutNav: "About me",
    projectsNav: "Projects",
    experienceNav: "Experience",
    capabilitiesNav: "Strengths",
    toolsNav: "Tools",
    contactNav: "Contact",
    heroEyebrow: "Professional portfolio · 2026",
    heroRole: "Junior Software Developer · Software Development Student",
    heroIntro: "I contribute to real-world software projects, business systems, and web development. I'm looking to grow as a developer, gain hands-on experience, and deepen my understanding of software engineering.",
    viewProjects: "View projects",
    age: "26 years old",
    profile: "Profile",
    portraitRole: "Junior Software Developer",
    portraitAlt: "Professional portrait of Jesús Emanuel Funes Costa",
    development: "Development",
    appliedAI: "Applied AI",
    collaboration: "Team collaboration",
    aboutHeading: "Learning, building, and gaining practical experience.",
    name: "Name",
    location: "Location",
    phone: "Phone",
    viewProfile: "View profile ↗",
    aboutLead: "I'm studying for a Tecnicatura Superior en Desarrollo de Software and building experience as a junior software developer through personal and collaborative projects.",
    aboutOrganization: "I'm organized, dependable, and proactive. I work best with clear goals and structured tasks, and I take time to understand the problem each project is meant to solve.",
    aboutLearning: "I adapt to new tools and working environments. When something is unfamiliar, I research it, evaluate options, and find a practical way forward. I value communication, teamwork, and respect for each person's responsibilities.",
    aboutGoal: "My goal is to keep developing my skills and experience while gradually specializing in software development.",
    projectsHeading: "Projects I've contributed to",
    projectsIntro: "A selection of projects and systems where I've contributed to requirements analysis, planning, development, code review, testing, and follow-up work.",
    biantiAlt: "Placeholder for a screenshot of the BIANTI project",
    biantiImage: "assets/images/bianti-placeholder-en.svg",
    biantiType: "Business management system and digital catalog",
    biantiDescription: "A project supporting the day-to-day operations of a retail business. The system brings together tools for products, categories, inventory, pricing, sales, orders, customers, promotions, and administrative tasks.",
    myContribution: "My contribution",
    biantiContribution: "I helped analyze business needs, define features, plan development tasks, review interfaces, test workflows, identify issues, and improve the system.",
    biantiTech: "Technologies used in BIANTI",
    viewCatalog: "View catalog",
    fitnessAlt: "Placeholder for an anonymized screenshot of Fitness Club",
    fitnessImage: "assets/images/fitness-placeholder-en.svg",
    fitnessType: "Gym management system",
    fitnessDescription: "A team project to streamline daily gym operations, including member records, memberships, renewals, payments, cash management, user accounts, and data synchronization.",
    fitnessContribution: "I contributed to project planning and follow-up, requirements analysis, task breakdown, code review, testing, tracking fixes, and integrating features with the team.",
    fitnessTech: "Technologies used in Fitness Club",
    privateProject: "Private project",
    livestockAlt: "Placeholder for the livestock management project",
    livestockImage: "assets/images/ganado-placeholder-en.svg",
    livestockType: "Business project · Backend",
    livestockDescription: "Software project focused on managing information related to livestock operations.",
    livestockContribution: "I contributed to requirements analysis, task planning and tracking, feature review, acceptance-criteria validation, testing, and following up on fixes.",
    livestockTech: "Technologies used in the livestock management system",
    businessPrivate: "Private business project",
    webAlt: "Placeholder for other web projects",
    webImage: "assets/images/web-placeholder-en.svg",
    freelanceType: "Independent work",
    freelanceHeading: "Websites and independent work",
    freelanceDescription: "Alongside these projects, I've created websites, informational pages, landing pages, and digital business cards for a range of needs.",
    workCovered: "What I worked on",
    freelanceMobile: "Mobile-friendly layouts.",
    freelanceContent: "Content organization.",
    freelanceDesign: "Simple interface design.",
    freelanceNeeds: "Understanding client requirements.",
    freelanceImplementation: "Site implementation and refinements.",
    webAreas: "Areas covered by other web projects",
    design: "Design",
    experienceHeading: "Experience that informs my work in software.",
    softwareProjects: "Software projects",
    softwareExperience: "Hands-on contributions to software systems and team projects: requirements analysis, task planning, code review, testing, validation, documentation, and AI-assisted development using Git and AI tools.",
    operations: "Operations and logistics",
    dispatcher: "Ride dispatch operator",
    dispatcherDescription: "Coordinated rides, assisted customers, prioritized requests, communicated with drivers and passengers, and handled issues in real time.",
    commercial: "Sales",
    sales: "Sales and customer service",
    salesDescription: "Experience advising customers, handling sales, communicating product information, and working with people with different needs.",
    communication: "Communication",
    digitalMarketing: "Digital marketing",
    marketingDescription: "Practical experience promoting products, creating social media posts and sales content, and supporting engagement and sales initiatives.",
    capabilitiesHeading: "How I work.",
    organization: "Organization",
    organizationDescription: "I work best with clear goals, prioritized tasks, and a defined structure.",
    initiative: "Initiative",
    initiativeDescription: "When I encounter something new, I research it, test alternatives, and find a practical way forward.",
    adaptability: "Adaptability",
    adaptabilityDescription: "I adapt to new tools, technologies, teams, and ways of working.",
    teamwork: "Teamwork",
    teamworkDescription: "I value communication, collaboration, and respect for roles and responsibilities.",
    problemSolving: "Problem-solving",
    problemSolvingDescription: "I analyze problems, set priorities, and look for practical solutions that move the work forward.",
    continuousLearning: "Continuous learning",
    continuousLearningDescription: "I aim to build knowledge and experience through every project I contribute to.",
    toolsHeading: "Technologies I've worked with.",
    toolsIntro: "My experience varies across these tools, and I'm continuing to develop my technical skills. I don't claim advanced proficiency in all of them.",
    dataPlatforms: "Data and platforms",
    aiDevelopment: "AI-assisted development",
    aiWorkflow: "I use AI tools as part of my development workflow to analyze requirements, plan tasks, work with existing code, implement features, review results, identify issues, validate changes, and document my work.",
    aiAgents: "AI agents",
    aiNote: "AI is a supporting tool in this process; I remain responsible for analysis, planning, review, and validation.",
    education: "Education",
    inProgress: "Higher technical degree in software development · In progress.",
    additionalEducation: "Additional training",
    courseDetails: "6 hours · September 2026",
    courseDescription: "A training session on AI-assisted software development, from analysis and implementation through to deployment.",
    viewCertificate: "View certificate",
    contactHeading: "I'm building experience and ready to keep growing.",
    contactIntro: "I'm interested in projects where I can learn, take responsibility, and continue developing professionally.",
    footerRole: "Junior Software Developer · San Juan, Argentina",
    backToTop: "Back to top ↑",
    personalPortfolio: "Personal portfolio · "
  };

  const originals = new Map();
  const translated = [...document.querySelectorAll("[data-i18n], [data-i18n-alt], [data-i18n-aria-label], [data-i18n-src]")];
  translated.forEach((element) => {
    const values = {};
    if (element.dataset.i18n) values.textContent = element.textContent;
    if (element.dataset.i18nAlt) values.alt = element.getAttribute("alt");
    if (element.dataset.i18nAriaLabel) values["aria-label"] = element.getAttribute("aria-label");
    if (element.dataset.i18nSrc) values.src = element.getAttribute("src");
    originals.set(element, values);
  });

  const metadata = {
    title: document.title,
    description: document.querySelector('meta[name="description"]').content
  };
  const languageButtons = [...document.querySelectorAll(".language-switch button")];
  const languageGroup = document.querySelector(".language-switch");
  const urlLanguage = new URL(window.location.href).searchParams.get("lang");
  let savedLanguage;
  try {
    savedLanguage = localStorage.getItem("portfolio-language");
  } catch (_) {
    // The URL and selector still work when storage is unavailable.
  }
  let currentLanguage = "es";

  const setLanguage = (language, updateUrl = false) => {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = language === "en" ? "Jesús Funes — Junior Software Developer" : metadata.title;
    document.querySelector('meta[name="description"]').content = language === "en"
      ? "Professional portfolio of Jesús Emanuel Funes Costa, Junior Software Developer and software development student."
      : metadata.description;

    translated.forEach((element) => {
      const values = originals.get(element);
      if (element.dataset.i18n) element.textContent = language === "en" ? en[element.dataset.i18n] : values.textContent;
      if (element.dataset.i18nAlt) element.setAttribute("alt", language === "en" ? en[element.dataset.i18nAlt] : values.alt);
      if (element.dataset.i18nAriaLabel) element.setAttribute("aria-label", language === "en" ? en[element.dataset.i18nAriaLabel] : values["aria-label"]);
      if (element.dataset.i18nSrc) element.setAttribute("src", language === "en" ? en[element.dataset.i18nSrc] : values.src);
    });

    languageButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
    const toggle = document.getElementById("menuToggle");
    toggle.setAttribute("aria-label", toggle.getAttribute("aria-expanded") === "true"
      ? (language === "en" ? en.menuClose : "Cerrar menú")
      : (language === "en" ? en.menuOpen : "Abrir menú"));

    try {
      localStorage.setItem("portfolio-language", language);
    } catch (_) {
      // Browsing without storage remains possible.
    }

    if (updateUrl) {
      const url = new URL(window.location.href);
      if (language === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      history.replaceState(null, "", url);
    }
  };

  setLanguage(["es", "en"].includes(urlLanguage) ? urlLanguage : savedLanguage === "en" ? "en" : "es");
  languageButtons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.lang, true)));

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const progress = document.getElementById("scrollProgress");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      document.body.classList.toggle("menu-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen
        ? (currentLanguage === "en" ? en.menuClose : "Cerrar menú")
        : (currentLanguage === "en" ? en.menuOpen : "Abrir menú"));
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        document.body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", currentLanguage === "en" ? en.menuOpen : "Abrir menú");
      });
    });
  }

  // Reveal animations
  const reveals = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    reveals.forEach((element) => observer.observe(element));
  } else {
    reveals.forEach((element) => element.classList.add("is-visible"));
  }

  // Scroll progress
  const updateProgress = () => {
    if (!progress) return;
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const percentage = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    progress.style.width = `${percentage}%`;
  };

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();

  // Active section in navigation
  const sectionIds = ["sobre-mi", "proyectos", "experiencia", "capacidades", "herramientas", "contacto"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const navLinks = [...document.querySelectorAll(".main-nav a")];

  if ("IntersectionObserver" in window && sections.length) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${visible.target.id}`
          );
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
