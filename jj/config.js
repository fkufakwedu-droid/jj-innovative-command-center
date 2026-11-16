window.CLIENT = {
  name: 'JJ Property Ventures',
  subtitle: 'multifamily',
  seed: 4379,
  accent: '#c8963e',
  accent2: '#8b5cf6',
  logo: null, // e.g. './logo.png'
  // Optional: this client's live n8n dashboard. Anything pointed at 'dashboard' opens it in a new tab.
  // Must be http(s). Example: 'https://example.app.n8n.cloud/webhook/<client>-dashboard'
  dashboardUrl: null,
  // Optional: change where a card's "Source" link goes. Keys: cash, occupancy, collections, dscr, noi,
  // turn, funnel, workorders, capex, leases ('*' = everything not listed). Values:
  //   'buildings' (an in-app page: units, arrears, loans, projects, tickets, buildings, leasing, activity)
  //   'dashboard' or 'dashboard:loans' (dashboardUrl, optionally + #loans)   'https://...' (new tab)
  //   { page: 'projects', label: 'CapEx tracker' }
  // Example: { collections: 'dashboard', dscr: 'dashboard:loans' }
  sourceMap: {},
  properties: null, // null = demo portfolio; or [{ name: 'Building A', units: 40 }, ...]
}
