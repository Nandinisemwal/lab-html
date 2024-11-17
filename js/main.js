/* 
Add current year to the footer
*/

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyright = document.getElementById('copyright');
    copyright.textContent = `(c) ${currentYear}, Nandini Semwal`;
})

//add alert button to display Hello, world!

const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", function () {
    alert("you are the best"); // Now you have the alert displayed 
})

//how to add hover functions
alertButton.addEventListener("mouseover", function () {
    alertButton.textContent = "Hey, What'sup!";
});

alertButton.addEventListener("mouseout", function () {//alert button function
    alertButton.textContent = "Click Me";
});
const hoverButton = document.getElementById("btn-hover"); //add hover effects

hoverButton.addEventListener("mouseover", function () {
    hoverButton.textContent = "hover!";
});

hoverButton.addEventListener("mouseout", function () { 
    hoverButton.textContent = "Hover for a  surprise!";
});