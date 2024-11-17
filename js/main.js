/* 
Add current year to footer
*/
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyright = document.getElementById('copyright');
    copyright.textContent = `(c) ${currentYear}, Nandini Semwal`;
})