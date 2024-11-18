/* 
Add current year to the footer
*/

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const copyright = document.getElementById('copyright');
    copyright.textContent = ` ${currentYear}, Nandini Semwal`;
})

//add alert button to display Hello, world!

const alertButton = document.getElementById("btn-alert");
alertButton.addEventListener("click", function () {
    alert("You are the Best"); // Now you have the alert displayed 
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
    hoverButton.textContent = "Here!";
});

hoverButton.addEventListener("mouseout", function () { 
    hoverButton.textContent = "SURPRISE!";//Hover over the text
});

//Add loop in list with odd and even numbers
document.addEventListener('DOMContentLoaded', () => {
    const olElement = document.getElementById('numbers');
    for (let i = 1; i <= 12; i++) {
        const listItem = document.createElement('li');
        if (i % 2 === 0) {
            listItem.textContent = `${1} - Even`;
        } else {
            listItem.textContent = `${i} - Odd`;
        }
        olElement.appendChild(listItem);
    }
});

//Add greetings according to time in the home page
document.addEventListener('DOMContentLoaded', () => {
    const currentHour = new Date().getHours();
    const greetingElement = document.getElementById("greeting");
//Add greeting message and class
let greetingMessage = "";
let greetingClass = "";

    if (currentHour < 12) {
        greetingMessage = "Good Morning!";
        greetingClass = "morning";
    } else if (currentHour < 18) {
        greetingMessage = "Good Afternoon!";
        greetingClass = "afternoon";
    } else {
        greetingMessage = "Good Evening!";
        greetingClass = "evening";
    }
greetingElement.textContent = greetingMessage;

greetingElement.classList.add(greetingClass);
});