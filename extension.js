const PAGES = {
    login: 'http://bo.flashtechsolution.net/',
    Summary: 'http://bo.flashtechsolution.net/Admin/Report/LicenseeWinLose.aspx',
    Main: 'http://bo.flashtechsolution.net/index.aspx',
    logout: 'http://bo.flashtechsolution.net/main/logout.ashx'
   
}

const SELECTORS = {
    partner: '#partnerCode',
    username: '#userName',
    password: '#password',
    login: '#btn-login',
    Report:'#sidebar-ul > li:nth-child(6) > a > span',
    LicenseeWinLose: '#sidebar-ul > li.submenu.open > ul > li:nth-child(3) > a',
    //logout:'body > header > div.userinfo > span.logout > a'
} 

module.exports = {
    pages: PAGES,
    selectors: SELECTORS
}