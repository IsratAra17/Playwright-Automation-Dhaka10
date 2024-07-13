// playwright.config.js
module.exports = {
    use: {
      headless: false, // Set to true for headless mode
      viewport: { width: 1280, height: 720 },
      ignoreHTTPSErrors: true,
      video: 'retain-on-failure',
    },
    reporter: [['list'], ['html']],
  };
  