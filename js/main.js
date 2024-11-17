/* 
Add current year to footer
*/
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('copyright').textContent = `(c) ${currentYear}, Nandini Semwal`;
});
