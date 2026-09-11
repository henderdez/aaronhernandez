// ============================================================
// PORTFOLIO CONTENT
// Edit anything in here to update your site. Don't touch index.html.
// After saving, just refresh the browser to see your changes.
//
// TO ADD A PROJECT PHOTO:
// 1. Put the image file in an "images" folder next to index.html
// 2. Set that project's imageSrc below to "images/yourfile.jpg"
//    (leave it as "" to keep showing the placeholder box)
// ============================================================

window.PORTFOLIO_DATA = {

  pageTitle: "Aaron Hernandez — Mechanical Engineering Student",
  pageDescription: "Mechanical engineering student portfolio — coursework, projects, and professional experience.",

  person: {
    firstName: "Aaron",
    lastName: "Hernandez",
    role: "Mechanical Engineering Student • CCNY",
    location: "New York, NY",
    sheet: "01 / 01",
    rev: "2026"
  },

  hero: {
    intro: "I’m a mechanical engineering student building practical systems, studying core engineering fundamentals, and creating automation tools that make real work easier. I’m especially interested in thermodynamics, applied mechanics, and turning technical ideas into clear, useful outputs.",
    stats: [
      { num: "4", label: "Core courses this term" },
      { num: "3", label: "Automation builds shipped" },
      { num: "1099", label: "Contractor experience" }
    ]
  },

  // Add or remove project entries freely — the page updates to match.
  // imageSrc: leave as "" to show the placeholder box, or point it at a file in /images
  projects: [
    {
      title: "Turbocharger Thermodynamic Analysis",
      description: "Term paper examining turbocharger performance through exergy and entropy analysis, working through T-s and P-v diagrams and steam-table interpolation to characterize real-cycle losses.",
      imageSrc: "",
      imageAlt: "Turbocharger Thermodynamic Analysis",
      linkText: "View writeup →",
      linkHref: "projects/project-thermodynamics.html",
      spec: [
        { k: "Course", v: "Thermodynamics, ENGR 230" },
        { k: "Method", v: "Exergy / entropy analysis" },
        { k: "Reference", v: "Çengel & Boles" }
      ]
    },
    {
      title: "Customer Pricing Analyzer",
      description: "n8n workflow that reads live customer data from Google Sheets, runs pricing analysis, and sends formatted HTML summary emails automatically — no manual pull required.",
      imageSrc: "",
      imageAlt: "Customer Pricing Analyzer",
      linkText: "View workflow →",
      linkHref: "projects/project-pricing-analyzer.html",
      spec: [
        { k: "Stack", v: "n8n, Google Sheets, Gmail" },
        { k: "Trigger", v: "Scheduled" },
        { k: "Output", v: "HTML email report" }
      ]
    },
    {
      title: "F1 Race Prediction Emailer",
      description: "Automated prediction pipeline pulling live race data from the Jolpica/Ergast API, generating a written forecast with an AI model, and emailing it ahead of each race weekend.",
      imageSrc: "",
      imageAlt: "F1 Race Prediction Emailer",
      linkText: "View workflow →",
      linkHref: "projects/project-race-prediction.html",
      spec: [
        { k: "Stack", v: "n8n, Jolpica API, Groq" },
        { k: "Cadence", v: "Weekly, race-linked" },
        { k: "Output", v: "Email forecast" }
      ]
    },
    {
      title: "Statics — Force & Load Studies",
      description: "Coursework set covering force-couple systems, distributed loads, and centroid calculations via the Pappus-Guldinus theorems, applied to multi-body static equilibrium problems.",
      imageSrc: "",
      imageAlt: "Statics — Force & Load Studies",
      linkText: "View select problems →",
      linkHref: "projects/project-statics.html",
      spec: [
        { k: "Course", v: "Statics, ME 24600" },
        { k: "Topics", v: "Centroids, distributed loads" },
        { k: "Tool", v: "TI-Nspire CX" }
      ]
    }
  ],

  skills: {
    engineering: [
      { label: "Thermodynamics", tag: "CYCLES · EXERGY" },
      { label: "Statics", tag: "EQUILIBRIUM" },
      { label: "Physics 208", tag: "OPTICS · CIRCUITS" },
      { label: "Multivariable Calculus", tag: "VECTOR FIELDS" },
      { label: "Fluid Statics", tag: "MANOMETRY" }
    ],
    tools: [
      { label: "n8n", tag: "WORKFLOWS" },
      { label: "Google Sheets / Gmail API", tag: "INTEGRATION" },
      { label: "SerpAPI", tag: "DATA" },
      { label: "TI-Nspire CX", tag: "CALC" },
      { label: "Word / Technical Writing", tag: "DOCUMENTATION" }
    ]
  },

  // Add more entries here if you get another job.
  experience: [
    {
      title: "Sales Representative — Aptive Environmental",
      dates: "Hawthorne & Rockland County, NY",
      bullets: [
        "Manage a full door-to-door sales territory independently, from prospecting through close, in a role that runs entirely on self-set daily targets.",
        "Communicate technical service details to homeowners clearly and under time pressure — the same skill that carries over to writing up engineering results for a non-specialist reader.",
        "Prior 1099 contractor experience, with working familiarity with self-employment tax and ownership of your own performance."
      ]
    }
  ],

  contact: {
    email: "ajhernan6@gmail.com",
    linkedin: { text: "linkedin.com/in/aaron-hernandez-934636189", href: "https://www.linkedin.com/in/aaron-hernandez-934636189/" },
    phone: { text: "(385) 505-6331", href: "tel:+13855056331" },
    resume: { text: "Download PDF ↓", href: "Resume Aaron Hernandez.pdf" }
  }

};
