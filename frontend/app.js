const templates = [
  {
    id: "portfolio-basic",
    name: "Portfolio Basic",
    description: "Hero banner with about section and project grid.",
    fields: [
      { id: "heroTitle", label: "Hero Title", type: "text", required: true, placeholder: "Hi, I'm Alex" },
      { id: "heroSubtitle", label: "Hero Subtitle", type: "textarea", required: true, placeholder: "Product designer crafting delightful experiences." },
      { id: "ctaLabel", label: "Call To Action Label", type: "text", placeholder: "View Projects" },
      { id: "aboutHeading", label: "About Heading", type: "text", placeholder: "About Me" },
      { id: "aboutBody", label: "About Body", type: "textarea", placeholder: "Describe your background and mission." },
      { id: "projectOneTitle", label: "Project One Title", type: "text", placeholder: "Mobile Banking" },
      { id: "projectOneDesc", label: "Project One Description", type: "textarea", placeholder: "Brief summary of the project and outcome." },
      { id: "projectTwoTitle", label: "Project Two Title", type: "text", placeholder: "Marketing Automation" },
      { id: "projectTwoDesc", label: "Project Two Description", type: "textarea", placeholder: "Explain what you delivered and impact." },
      { id: "contactEmail", label: "Contact Email", type: "text", placeholder: "you@email.com" }
    ],
    render: (content, settings) => {
      const accent = settings.accentColor || "#2563eb";
      return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${escapeHtml(settings.title || "Untitled Site")}</title>
    <style>
      body { margin: 0; font-family: 'Segoe UI', system-ui, sans-serif; background: #0f172a; color: #f8fafc; line-height: 1.6; }
      .hero { padding: 80px 24px; text-align: center; background: linear-gradient(160deg, ${accent}, #1e3a8a); }
      .hero h1 { font-size: 2.8rem; margin-bottom: 16px; }
      .hero p { max-width: 640px; margin: 0 auto 24px; opacity: 0.85; }
      .hero a { display: inline-block; padding: 14px 24px; border-radius: 999px; background: #f8fafc; color: #0f172a; font-weight: 600; text-decoration: none; }
      .section { max-width: 960px; margin: 0 auto; padding: 64px 24px; }
      .section h2 { font-size: 1.8rem; margin-bottom: 24px; }
      .about p { max-width: 720px; opacity: 0.85; }
      .projects { display: grid; gap: 24px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
      .project-card { padding: 28px; border-radius: 20px; background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(148, 163, 184, 0.2); }
      .project-card h3 { margin-top: 0; }
      footer { text-align: center; padding: 48px 24px 64px; opacity: 0.7; }
      a.contact { color: ${accent}; }
    </style>
  </head>
  <body>
    <section class="hero">
      <h1>${escapeHtml(content.heroTitle || "Your Name")}</h1>
      <p>${escapeHtml(content.heroSubtitle || "Describe the value you create.")}</p>
      ${content.ctaLabel ? `<a href="#projects">${escapeHtml(content.ctaLabel)}</a>` : ""}
    </section>
    <section class="section about">
      <h2>${escapeHtml(content.aboutHeading || "About")}</h2>
      <p>${escapeHtml(content.aboutBody || "Share your story and what drives you.")}</p>
    </section>
    <section class="section" id="projects">
      <h2>Featured Projects</h2>
      <div class="projects">
        <article class="project-card">
          <h3>${escapeHtml(content.projectOneTitle || "Project One")}</h3>
          <p>${escapeHtml(content.projectOneDesc || "Explain the problem you solved and the outcome.")}</p>
        </article>
        <article class="project-card">
          <h3>${escapeHtml(content.projectTwoTitle || "Project Two")}</h3>
          <p>${escapeHtml(content.projectTwoDesc || "Highlight the impact and learnings.")}</p>
        </article>
      </div>
    </section>
    <footer>
      <p>Ready to collaborate? <a class="contact" href="mailto:${encodeURI(content.contactEmail || "hello@example.com")}">${escapeHtml(content.contactEmail || "hello@example.com")}</a></p>
    </footer>
  </body>
  </html>`;
    }
  },
  {
    id: "link-in-bio",
    name: "Link In Bio",
    description: "Avatar, bio, and link buttons for social sharing.",
    fields: [
      { id: "displayName", label: "Display Name", type: "text", required: true, placeholder: "River Stone" },
      { id: "bio", label: "Short Bio", type: "textarea", placeholder: "Founder, speaker, strategist." },
      { id: "avatarUrl", label: "Avatar URL", type: "text", placeholder: "https://..." },
      { id: "primaryLinkLabel", label: "Primary Link Label", type: "text", placeholder: "Book a Call" },
      { id: "primaryLinkUrl", label: "Primary Link URL", type: "text", placeholder: "https://cal.com/" },
      { id: "secondaryLinks", label: "Secondary Links (label|url per line)", type: "textarea", placeholder: "Newsletter|https://newsletter.example.com" }
    ],
    render: (content, settings) => {
      const accent = settings.accentColor || "#14b8a6";
      const secondary = parseSecondaryLinks(content.secondaryLinks || "");
      return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${escapeHtml(settings.title || "Untitled Site")}</title>
    <style>
      body { margin: 0; min-height: 100vh; font-family: 'Segoe UI', system-ui, sans-serif; display: flex; align-items: center; justify-content: center; background: radial-gradient(circle at top, ${accent}40, #020617 55%); color: #f8fafc; }
      .card { width: min(420px, 92vw); background: rgba(2, 6, 23, 0.8); border: 1px solid rgba(148, 163, 184, 0.2); padding: 36px 28px; border-radius: 24px; text-align: center; box-shadow: 0 24px 64px rgba(2, 6, 23, 0.5); }
      .avatar { width: 120px; height: 120px; border-radius: 50%; border: 4px solid ${accent}; margin: 0 auto 20px; object-fit: cover; background: rgba(30, 41, 59, 0.6); }
      h1 { margin: 0 0 12px; font-size: 1.8rem; }
      p { margin: 0 0 24px; opacity: 0.82; }
      .links { display: flex; flex-direction: column; gap: 16px; }
      a.link { display: block; padding: 14px 18px; border-radius: 999px; font-weight: 600; text-decoration: none; color: #020617; background: #f8fafc; }
      a.secondary { background: transparent; border: 1px solid rgba(148, 163, 184, 0.3); color: #f8fafc; }
    </style>
  </head>
  <body>
    <article class="card">
      ${content.avatarUrl ? `<img class="avatar" src="${escapeAttribute(content.avatarUrl)}" alt="${escapeAttribute(content.displayName || "User avatar")}">` : ""}
      <h1>${escapeHtml(content.displayName || "Your Name")}</h1>
      <p>${escapeHtml(content.bio || "Add a short description about yourself or your brand.")}</p>
      <div class="links">
        ${content.primaryLinkUrl ? `<a class="link" href="${escapeAttribute(content.primaryLinkUrl)}" target="_blank" rel="noopener">${escapeHtml(content.primaryLinkLabel || "Primary Link")}</a>` : ""}
        ${secondary.map(link => `<a class="link secondary" href="${escapeAttribute(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label)}</a>`).join("")}
      </div>
    </article>
  </body>
  </html>`;
    }
  }
];

const state = {
  user: null,
  selectedTemplate: templates[0],
  settings: {
    webname: "",
    title: "",
    accentColor: "#1d4ed8"
  },
  content: {}
};

const storageKey = "riosweb-demo-state";

const templateListEl = document.getElementById("templateList");
const fieldEditorEl = document.getElementById("fieldEditor");
const previewEl = document.getElementById("preview");
const siteSettingsForm = document.getElementById("siteSettingsForm");
const publishButton = document.getElementById("publishButton");
const publishStatus = document.getElementById("publishStatus");
const authForm = document.getElementById("authForm");
const userSession = document.getElementById("userSession");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#96;");
}

function parseSecondaryLinks(raw) {
  return raw
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const [label, url] = line.split("|").map(part => part?.trim() || "");
      return { label: label || "Untitled", url: url || "#" };
    });
}

function hydrateFromStorage() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (parsed.user) state.user = parsed.user;
    if (parsed.settings) state.settings = { ...state.settings, ...parsed.settings };
    if (parsed.content) state.content = parsed.content;
    if (parsed.selectedTemplateId) {
      const found = templates.find(t => t.id === parsed.selectedTemplateId);
      if (found) state.selectedTemplate = found;
    }
  } catch (error) {
    console.warn("Failed to load saved state", error);
  }
}

function persistState() {
  const payload = {
    user: state.user,
    selectedTemplateId: state.selectedTemplate.id,
    settings: state.settings,
    content: state.content
  };
  localStorage.setItem(storageKey, JSON.stringify(payload));
}

function renderUserSession() {
  if (state.user) {
    userSession.innerHTML = `<div class="user-chip">Signed in as <strong>${escapeHtml(state.user.username)}</strong> <button type="button" id="signOutButton">Sign Out</button></div>`;
    const signOutButton = document.getElementById("signOutButton");
    signOutButton.addEventListener("click", () => {
      state.user = null;
      persistState();
      renderUserSession();
      updatePublishState();
    });
  } else {
    userSession.innerHTML = "";
    userSession.appendChild(authForm);
    authForm.reset();
  }
}

function renderTemplateList() {
  templateListEl.innerHTML = "";
  templates.forEach(template => {
    const card = document.createElement("article");
    card.className = `template-card${state.selectedTemplate.id === template.id ? " active" : ""}`;
    card.innerHTML = `<h3>${template.name}</h3><p>${template.description}</p>`;
    card.addEventListener("click", () => {
      state.selectedTemplate = template;
      renderTemplateList();
      renderFieldEditor();
      updatePreview();
      persistState();
    });
    templateListEl.appendChild(card);
  });
}

function renderFieldEditor() {
  fieldEditorEl.innerHTML = "";
  state.selectedTemplate.fields.forEach(field => {
    const wrapper = document.createElement("label");
    wrapper.setAttribute("for", field.id);
    wrapper.textContent = field.label;

    const input = createFieldInput(field);
    fieldEditorEl.appendChild(wrapper);
    fieldEditorEl.appendChild(input);
  });
}

function createFieldInput(field) {
  const value = state.content[field.id] ?? "";
  let input;
  if (field.type === "textarea") {
    input = document.createElement("textarea");
    input.rows = 4;
  } else if (field.type === "select" && field.options) {
    input = document.createElement("select");
    field.options.forEach(option => {
      const optionEl = document.createElement("option");
      optionEl.value = option.value;
      optionEl.textContent = option.label;
      if (option.value === value) optionEl.selected = true;
      input.appendChild(optionEl);
    });
  } else {
    input = document.createElement("input");
    input.type = field.type || "text";
  }
  input.id = field.id;
  input.name = field.id;
  input.placeholder = field.placeholder || "";
  input.required = Boolean(field.required);
  input.value = value;
  input.addEventListener("input", handleFieldChange);
  return input;
}

function handleFieldChange(event) {
  const { name, value } = event.target;
  state.content[name] = value;
  updatePreview();
  persistState();
  updatePublishState();
}

function updatePreview() {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("title", "Site preview");
  previewEl.innerHTML = "";
  previewEl.appendChild(iframe);
  const doc = iframe.contentDocument;
  doc.open();
  doc.write(state.selectedTemplate.render(state.content, state.settings));
  doc.close();
}

function updatePublishState() {
  const hasUser = Boolean(state.user);
  const hasWebname = Boolean(state.settings.webname);
  const fieldsValid = state.selectedTemplate.fields.every(field => {
    if (!field.required) return true;
    return Boolean(state.content[field.id]);
  });
  publishButton.disabled = !(hasUser && hasWebname && fieldsValid);
  if (!hasUser) {
    publishStatus.textContent = "Sign in to publish your site.";
  } else if (!hasWebname) {
    publishStatus.textContent = "Add a webname to continue.";
  } else if (!fieldsValid) {
    publishStatus.textContent = "Complete the required template fields.";
  } else {
    publishStatus.textContent = "Ready to publish.";
  }
}

function handleSiteSettingsSubmit(event) {
  event.preventDefault();
  const formData = new FormData(siteSettingsForm);
  state.settings.webname = (formData.get("webname") || "").toString().trim();
  state.settings.title = (formData.get("title") || "").toString().trim();
  state.settings.accentColor = formData.get("accentColor") || state.settings.accentColor;
  persistState();
  updatePreview();
  updatePublishState();
}

function handlePublishClick() {
  if (!state.user || !state.settings.webname) return;
  const publishDate = new Date().toLocaleString();
  const url = `https://example.com/${state.user.username}/${state.settings.webname}`;
  publishStatus.textContent = `Published to ${url} • ${publishDate}`;
}

authForm.addEventListener("submit", event => {
  event.preventDefault();
  const formData = new FormData(authForm);
  const username = (formData.get("username") || "").toString().trim().toLowerCase();
  if (!username) return;
  state.user = { username };
  persistState();
  renderUserSession();
  updatePublishState();
});

siteSettingsForm.addEventListener("submit", handleSiteSettingsSubmit);
publishButton.addEventListener("click", handlePublishClick);

function init() {
  hydrateFromStorage();
  renderUserSession();
  renderTemplateList();
  renderFieldEditor();
  siteSettingsForm.webname.value = state.settings.webname;
  siteSettingsForm.title.value = state.settings.title;
  siteSettingsForm.accentColor.value = state.settings.accentColor;
  Object.entries(state.content).forEach(([id, value]) => {
    const input = document.getElementById(id);
    if (input) input.value = value;
  });
  updatePreview();
  updatePublishState();
}

document.addEventListener("DOMContentLoaded", init);
