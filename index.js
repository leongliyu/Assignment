const puppeteer = require('puppeteer')
const auth = require('./auth')
const extension = require('./extension')

const run = async () => {
    const browser = await puppeteer.launch({ headless: false })
    try {
        const page = await browser.newPage()

        await page.setViewport({
            width: 1280,
            height: 800
        })

        await login(page)
        await page.waitFor(3000)
        await gotoReport(page)
        await page.waitFor(5000)
        await logout(page)
        browser.close()

    } catch (e) {
        console.error(e.message)
    }
}

const login = async(page) => {
    await page.goto(extension.pages.login)
    await page.waitForSelector(extension.selectors.partner, { visible: true })
    await page.type(extension.selectors.partner, auth.partner)
    await page.waitForSelector(extension.selectors.username, { visible: true })
    await page.type(extension.selectors.username, auth.username)
    await page.waitForSelector(extension.selectors.password, { visible: true })
    await page.type(extension.selectors.password, auth.password)
    await page.click(extension.selectors.login)
    
}

const gotoReport = async(page) => {
    //await page.goto(extension.pages.Summary) 
    await page.goto(extension.pages.Main) 
    await page.click(extension.selectors.Report)  
    await page.click(extension.selectors.LicenseeWinLose)
    
}

const logout = async(page) => {
    await page.goto(extension.pages.logout)
   // await page.click(extension.selectors.logout)
}

run();