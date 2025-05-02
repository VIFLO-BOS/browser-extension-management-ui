const fetchData = async () => {
	const response = await fetch("/data.json");
	const data = await response.json();
	console.log(data);
	return data;
};

fetchData();
// this is to create a toggle the background color of the page
//Getting the [parent-container]

const searchBarIconSun = document.getElementById("searchBarIconSun");
const searchBarIconMoon = document.getElementById("searchBarIconMoon");
const body = document.querySelector("body");
const moon = "./assets/images/icon-moon.svg";
const sun = "./assets/images/icon-sun.svg";

function changeBackgroundColorDefault() {
	body.style.background = "var(--Light-Gradient)";
	body.style.color = "var(--Neutral900)";
}

function changeBackgroundColorDark() {
	body.style.background = "var(--Dark-Gradient)";
	body.style.color = "var(--Neutral000)";
}
searchBarIconSun.addEventListener("click", (e) => {
    e.preventDefault();
    searchBarIconSun.classList.toggle('hidden');
    searchBarIconMoon.style.display = 'block';
    changeBackgroundColorDefault();
});
searchBarIconMoon.addEventListener("click", () => {
	e.preventDefault();
	changeBackgroundColorDark();
});
