module.exports = {
    siteUrl: 'https://www.communityjameel.org',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/api/*', '/server-side/*'],  // Exclude API routes or internal pages
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };
  