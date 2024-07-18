describe('Check all links on the website', () => {
  const visited = new Set();
  const baseUrl = 'http://localhost:3000';

  function checkLinks(url) {
    if (visited.has(url) || url.includes('/news') || url.includes('/press') || url.includes('/programme/')) return;
    visited.add(url);

    cy.visit(url, { timeout: 120000 });

    cy.get('a[href^="/"]').each($el => {
      const link = new URL($el.prop('href')).pathname;

      if (!visited.has(link) && !link.includes('/news') && !link.includes('/press') && !link.includes('/programme/')) {
        cy.request({
          url: link,
          failOnStatusCode: false // Prevent Cypress from failing the test automatically on non-2xx status codes
        }).then(response => {
          if (response.status === 404) {
            cy.log(`404 Error: ${link} not found`);
          } else if (response.status !== 200) {
            cy.log(`Unexpected status code ${response.status} for ${link}`);
          }
          expect(response.status, `${link} should return 200 OK`).to.eq(200);
          checkLinks(link);
        });
      }
    });
  }

  it('should have no broken links (only 200 status codes) across the entire website, excluding /news, /press, and /programme/', () => {
    const initialRoutes = [`${baseUrl}/`]; // Start from the home page

    initialRoutes.forEach(route => {
      checkLinks(route);
    });
  });
});
