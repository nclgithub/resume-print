import puppeteer from 'puppeteer';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const data = searchParams.get('data');
    let parsedData = JSON.parse(decodeURIComponent(data))

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('http://localhost:3000/pdf?data=' + encodeURIComponent(JSON.stringify(parsedData)), { waitUntil: 'networkidle0' });

    const pdfBuffer = await page.pdf({
        path: 'resume.pdf',
        format: 'A4',
        printBackground: true,
    });

    await browser.close();
    console.log('PDF generated successfully!');

    return new Response(pdfBuffer, {
        headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=resume.pdf",
        },
    });
};