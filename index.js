/**
 * Documentación:
 * 
 * https://github.com/microsoft/playwright
 * https://playwright.dev/docs/intro/
 * https://playwright.dev/docs/cli/
 * 
 */

const { chromium } = require('playwright');

// Inicio de la función de flecha asíncrona
(async () => {
    const browser = await chromium.launch({
        headless: false, // Con cabeza
        slowMo  : 50,
        devtools: false
    });

    const context = await browser.newContext();
    
    // Abrir nueva página
    const page = await context.newPage();
    
    // Ir a la URL
    await page.goto('https://web.gencat.cat/ca/inici');
    
    // Click input[type="search"]
    await page.click('input[type="search"]');
    
    // Fill input[type="search"]
    await page.fill('input[type="search"]', 'agenda cultural');
    
    // Ejecuta la tecla [ENTER]
    await page.press('input[type="search"]', 'Enter');

    // assert.equal(page.url(), 'https://web.gencat.cat/ca/cercador/?q=agenda+cultural&lr=lang_ca');
    // ---------------------

    //await context.close();
    //await browser.close();

})(); // Fin de la función y () para invocarse a sí misma