// Shared storage helpers + default content
const STORAGE_KEYS = {
  site: 'aap_site_content',
  blogs: 'aap_blogs',
  ads: 'aap_ads',
  adminAuth: 'aap_admin_auth'
};

const DEFAULT_SITE = {
  heroBadge: 'Free • Instant • 2026 Standards',
  heroTitle: 'Is your site ready for',
  heroHighlight: 'Google AdSense?',
  heroSubtitle: 'Get a complete readiness audit: approval probability, every issue, and prioritized fixes — based on current Google AdSense & Publisher Policies.',
  auditButton: 'Run Free Audit',
  auditNote: 'We analyze public signals only. No login required. Results are estimates based on known AdSense criteria.',
  howTitle: 'How the Audit Works',
  howSubtitle: 'We evaluate your site against the same categories Google reviewers and quality raters focus on for AdSense eligibility in 2026.',
  checklistTitle: '2026 AdSense Readiness Factors',
  checklistSubtitle: 'These are the areas our audit evaluates (aligned with public Google guidance and common rejection patterns).',
  faqTitle: 'Frequently Asked Questions',
  footerNote: 'Independent readiness tool. Not affiliated with Google.',
  footerCopy: '© 2026 AdSense Audit Pro. Always verify against official Google AdSense Help and Publisher Policies.'
};

const DEFAULT_ADS = {
  header: '',
  footer: '',
  sidebar: '',
  afterResults: ''
};

const DEFAULT_BLOGS = [
  {
    id: 'welcome-post',
    title: 'How to Prepare Your Site for AdSense in 2026',
    slug: 'prepare-site-adsense-2026',
    excerpt: 'A practical checklist of content, legal pages, and technical signals Google reviewers look at before approving a new publisher.',
    content: `<p>Getting approved for Google AdSense still comes down to trust, value, and compliance. In 2026 the core signals remain the same: original content that helps users, transparent ownership, and a clean technical foundation.</p>
<p><strong>Start with content volume and depth.</strong> Sites with only a few thin pages are frequently rejected. Aim for 15–30 well-written articles that thoroughly answer real questions.</p>
<p><strong>Add the non-negotiable pages:</strong> Privacy Policy (mention cookies and Google ads), About, and Contact. Link them in the footer on every page.</p>
<p><strong>Technical basics:</strong> HTTPS, mobile-friendly layout, and ensure Googlebot can crawl your content.</p>
<p>Use our free audit tool to surface the most common gaps before you submit.</p>`,
    date: '2026-08-10',
    author: 'AdSense Audit Team',
    published: true
  },
  {
    id: 'privacy-policy-guide',
    title: 'Writing an AdSense-Ready Privacy Policy',
    slug: 'adsense-ready-privacy-policy',
    excerpt: 'What your Privacy Policy must include so Google reviewers and users understand how data and ads work on your site.',
    content: `<p>A Privacy Policy is one of the most common missing pieces that lead to AdSense rejection. It does not need to be long, but it must be accurate and clear.</p>
<p>Key points to cover:</p>
<ul>
<li>What data you collect (cookies, analytics, contact forms)</li>
<li>How Google AdSense / DoubleClick cookies work</li>
<li>Links to Google’s ad settings and opt-out pages</li>
<li>How users can contact you about privacy</li>
</ul>
<p>Place the page at a clear URL such as <code>/privacy-policy</code> or <code>/privacy</code> and link it from the footer of every page.</p>`,
    date: '2026-08-15',
    author: 'AdSense Audit Team',
    published: true
  }
];

function getSiteContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.site);
    return raw ? { ...DEFAULT_SITE, ...JSON.parse(raw) } : { ...DEFAULT_SITE };
  } catch {
    return { ...DEFAULT_SITE };
  }
}

function saveSiteContent(data) {
  localStorage.setItem(STORAGE_KEYS.site, JSON.stringify(data));
}

function getBlogs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.blogs);
    return raw ? JSON.parse(raw) : [...DEFAULT_BLOGS];
  } catch {
    return [...DEFAULT_BLOGS];
  }
}

function saveBlogs(blogs) {
  localStorage.setItem(STORAGE_KEYS.blogs, JSON.stringify(blogs));
}

function getAds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.ads);
    return raw ? { ...DEFAULT_ADS, ...JSON.parse(raw) } : { ...DEFAULT_ADS };
  } catch {
    return { ...DEFAULT_ADS };
  }
}

function saveAds(ads) {
  localStorage.setItem(STORAGE_KEYS.ads, JSON.stringify(ads));
}

function isAdminLoggedIn() {
  return localStorage.getItem(STORAGE_KEYS.adminAuth) === 'true';
}

function setAdminLoggedIn(val) {
  if (val) localStorage.setItem(STORAGE_KEYS.adminAuth, 'true');
  else localStorage.removeItem(STORAGE_KEYS.adminAuth);
}

// Simple password for demo (change in production)
const ADMIN_PASSWORD = 'admin123';
