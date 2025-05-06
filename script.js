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
  document.getElementById("ext-text-header").style.color = "var(--Neutral900)";
}

function changeBackgroundColorDark() {
  body.style.background = "var(--Dark-Gradient)";
  body.style.color = "var(--Neutral000)";
  searchBarIconSun.classList.toggle("hidden");
  searchBarIconMoon.style.display = "none";
  document.getElementById("ext-text-header").style.color = "var(--Neutral000)";
}
searchBarIconSun.addEventListener("click", (e) => {
  e.preventDefault();
  searchBarIconSun.classList.toggle("hidden");
  searchBarIconMoon.style.display = "block";
  changeBackgroundColorDefault();
});
searchBarIconMoon.addEventListener("click", (e) => {
  e.preventDefault();
  changeBackgroundColorDark();
});

// this is to use the data to create all other extentions using map() function

// Fistly create a variable to represent each element in the card.

const fetchData = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  localStorage.setItem("data", JSON.stringify(data));
  const extentions = localStorage.getItem("data");

  createExtensionCard(extentions);
};
fetchData();

function createExtensionCard(extentions) {
  const data = extentions ? JSON.parse(extentions) : [];
  if (!Array.isArray(data)) {
    throw new Error("data is not array");
  } else {
    for (let i = 0; i < data.length; i++) {
      document.getElementById("card-content").innerHTML += `
        <div class="ext-card-body">
          <div class="ext-card-body-details">
            <img src=${data[i].logo} alt="">
            <div class="ext-body-detail-text">
              <h4 class="ext-body-heading">${data[i].name}</h4>
              <p class="ext-body-paragraph">${data[i].description}</p>
            </div>
          </div>
          <!-- this is the extension card footer container -->
          <div class="ext-card-footer">
            <button type="button" class="ext-card-footer-btn" id="remove-button">Remove</button>
            <div class="ext-card-footer-switch ">
              <div class="ext-footer-left-switch  hidden ${data[i].isActive}">
                <p class="dot-icon-inactive"></p>
              </div>
              <div class="ext-footer-right-switch hidden ${data[i].isActive}">
                <p class="dot-icon-active"></p>
              </div>
            </div>
          </div>
        </div>
		`;
    }

    function updateActiveCardComponent() {
      const leftFooterSwitch = document.querySelectorAll(
        ".ext-footer-left-switch"
      );
      const rightFooterSwitch = document.querySelectorAll(
        ".ext-footer-right-switch"
      );
      console.log(leftFooterSwitch, rightFooterSwitch);

       rightFooterSwitch.forEach((items) => {
        if (items.classList.contains("true")) {
          console.log("right Switch:", items);
          items.style.display = "block";
        }
      });

      leftFooterSwitch.forEach((items) => {
        if (items.classList.contains("false")) {
          console.log("left Switch:", items);
          items.style.display = "block";
        }
      });



      console.log("left switch: ", leftSwtich);
    }

    updateActiveCardComponent();
  }
}
