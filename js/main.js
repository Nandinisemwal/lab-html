/* 
Add current year to the footer
*/

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyright = document.getElementById('copyright');
    copyright.textContent = `(c) ${currentYear}, Nandini Semwal`;
})

//add alert button to display Hello, world!

const alertButton = document.getElementByIdElement("btn-alert");
alertButton.addEventListener("click", function () {
    alert("Hey What's up!");
})
