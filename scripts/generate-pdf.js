const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:5173", { waitUntil: "networkidle0" });
    await page.pdf({
        path: "Syed-Haris-Bin-Aamir-CV.pdf",
        format: "A4",
        printBackground: true,
        margin: { top: "20mm", right: "20mm", bottom: "20mm", left: "20mm" }
    });

    await browser.close();
})();
