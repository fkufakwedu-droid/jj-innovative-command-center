window.CLIENT = {
  name: 'CLIENT NAME',
  subtitle: 'multifamily',
  seed: 1234, // any number: changes the demo data
  accent: '#38bdf8',
  accent2: '#8b5cf6',
  logo: null, // './logo.png' (put the file next to this config)
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
  properties: [
    { name: 'Property One', units: 40 },
    { name: 'Property Two', units: 24 },
  ],
}
