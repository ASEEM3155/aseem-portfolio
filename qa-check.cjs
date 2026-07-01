const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  fs.mkdirSync('qa', { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const cases = [
    { name: 'desktop', width: 1440, height: 1000 },
    { name: 'mobile', width: 390, height: 844 },
  ];
  for (const item of cases) {
    const page = await browser.newPage({ viewport: { width: item.width, height: item.height }, deviceScaleFactor: 1 });
    await page.goto('http://127.0.0.1:5173/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `qa/${item.name}.png`, fullPage: true });
    const canvasInfo = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return { exists: false };
      const rect = canvas.getBoundingClientRect();
      const ctx = canvas.getContext('2d');
      let nonBlank = null;
      try {
        const data = ctx.getImageData(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 20, 20).data;
        nonBlank = Array.from(data).some((value, index) => index % 4 !== 3 && value !== 0);
      } catch (error) {
        nonBlank = 'webgl-canvas-readable-via-page-layout';
      }
      return { exists: true, width: rect.width, height: rect.height, nonBlank };
    });
    console.log(`${item.name}:`, JSON.stringify(canvasInfo));
    await page.close();
  }
  await browser.close();
})();
