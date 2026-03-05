# ReplyPilot Screenshot Mockup
# Run this script to generate a screenshot of the popup
# Note: Requires puppeteer. If not installed, you'll need to install it.
# npm install puppeteer

const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to extension popup size
  await page.setViewport({ width: 375, height: 600 });
  
  // Load the HTML file
  const filePath = `file://${path.resolve(__dirname, '../../extension/popup-final.html')}`;
  await page.goto(filePath);
  
  // Take screenshot
  await page.screenshot({ path: path.resolve(__dirname, 'replypilot-popup.png') });
  
  await browser.close();
})();
