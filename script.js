const fetchData = async () => {
    const response = await fetch('/data.json');
    const data = await response.json();
    console.log(data);
    return data;
}

fetchData();
// this is to create a toggle the background color of the page
//Getting the [parent-container]

const searchBarIcon = document.getElementById("searchBarIconSun");
const body = document.querySelector('body');
const moon = './assets/images/icon-moon.svg';
const sun = './assets/images/icon-sun.svg';
function changeBackgroundColor() {
    body.style.background = "var(--Light-Gradient)";
    body.style.color = "var(--Neutral900)";
}


searchBarIcon.addEventListener('click', (e) => {
    e.preventDefault();
    changeBackgroundColor();

})


