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
  const allBtn = document.querySelector(".ext-btn-all");
  const activeBtn = document.querySelector(".ext-btn-active");
  const inactiveBtn = document.querySelector(".ext-btn-inactive");
  if (!Array.isArray(data)) {
    throw new Error("data is not array");
  } else {
    let card;
    data.forEach((data) => {
      card = `
        <div class="ext-card-body ${data.isActive}">
          <div class="ext-card-body-details">
            <img src=${data.logo} alt="" id="logo">
            <div class="ext-body-detail-text">
              <h4 class="ext-body-heading">${data.name}</h4>
              <p class="ext-body-paragraph">${data.description}</p>
            </div>
          </div>
          <!-- this is the extension card footer container -->
          <div class="ext-card-footer">
            <button type="button" class="ext-card-footer-btn" id="remove-button">Remove</button>
            <div class="ext-card-footer-switch ">
              <div class="ext-footer-left-switch  hidden ${data.isActive}">
                <p class="dot-icon-inactive"></p>
              </div>
              <div class="ext-footer-right-switch hidden ${data.isActive}">
                <p class="dot-icon-active"></p>
              </div>
            </div>
          </div>
        </div> 
		`;

      document.getElementById("card-content").innerHTML += card;
    });

    // this is for the active and inactive section
    allBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const cardEl = Array.from(document.querySelectorAll(".ext-card-body"));
      cardEl.forEach((el) => (el.style.display = "block"));
    });

    // this first is to toggle all the active card
    activeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const cardEl = Array.from(document.querySelectorAll(".ext-card-body"));
      const filtered = cardEl.filter((el) => el.classList.contains("true"));
      console.log(filtered);
      allBtn.classList.remove("active");

      cardEl.forEach((el) => (el.style.display = "none"));
      filtered.forEach((el) => {
        el.style.display = "block";
      });
    });

    inactiveBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const cardEl = Array.from(document.querySelectorAll(".ext-card-body"));
      const filtered = cardEl.filter((el) => el.classList.contains("false"));
      console.log(filtered);

      cardEl.forEach((el) => (el.style.display = "none"));
      filtered.forEach((el) => {
        el.style.display = "block";
      });
    });

    // this is the styling sectio when the searchbar icons is clicked

    function updateActiveCardComponent() {
      const leftFooterSwitch = document.querySelectorAll(
        ".ext-footer-left-switch"
      );
      const rightFooterSwitch = document.querySelectorAll(
        ".ext-footer-right-switch"
      );

      rightFooterSwitch.forEach((items) => {
        const switchIcon = document.querySelector(".dot-icon-active");
        if (items.classList.contains("true")) {
          items.style.display = "block";
          items.addEventListener("click", (e) => {
            e.preventDefault();
            items.style.background = "var(--Red500)";
            items.style.border = "3px solid var(--Neutral800)";
            items.style.outline = "1px solid var(--Red500)"
            switchIcon.style.background = "var(--Neutral100) !important";
            console.log(switchIcon)
          });
        }

 
      });

      leftFooterSwitch.forEach((items) => {
        if (items.classList.contains("false")) {
          items.style.display = "block";
        }
      });
    }

    updateActiveCardComponent();
  }
}

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
  document.querySelector(".search-bar").style.background = "var(--Neutral000)";
  document.getElementById("logo").src = "./assets/images/logo-dark.svg";

  // this is to change the search bar icon
  searchBarIconSun.classList.toggle("hidden");
  searchBarIconMoon.style.display = "block";
  searchBarIconMoon.style.background = "var(--Neutral600)";
  searchBarIconMoon.style.color = "var(--Neutral000)";

  //this is to change the card background color
  const cardBody = document.querySelectorAll(".ext-card-body");
  cardBody.forEach((items) => {
    items.style.background = "Var(--Neutral000)";
  });

  const removeBtn = document.querySelectorAll("#remove-button");
  removeBtn.forEach((items) => {
    items.style.color = "var(--Neutral900)";
    items.style.border = "1px  solid var(--Neutral900)";

    items.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      items.style.background = "var(--Red500)";
      items.style.color = "var(--Neutral100)";
      items.style.border = "1px solid var(Neutral900))";
    });

    items.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      items.style.background = "var(--Neutral000)";
      items.style.color = " var(--Neutral900)";
      items.style.border = "1px solid var(--Neutral900))";
    });

    items.addEventListener("click", (e) => {
      e.preventDefault();
      const focus = {
        background: "var(--Neutral600)",
        color: "var(--Neutral100)",
        border: "2px solid var(--Neutral900)",
        outline: "2px solid var(--Red500)",
      };

      let sty = new FocusEvent(focus);
      items.style = sty;
      items.style.hover = "none";
    });
  });

  const cardParagraph = document.querySelectorAll(".ext-body-paragraph");
  cardParagraph.forEach((items) => {
    items.style.color = "var(--Neutral800)";
  });
}

function changeBackgroundColorDark() {
  body.style.background = "var(--Dark-Gradient)";
  body.style.color = "var(--Neutral000)";

  searchBarIconSun.classList.toggle("hidden");
  searchBarIconMoon.style.display = "none";
  searchBarIconSun.style.color = "var(--Neutral000)";

  document.getElementById("ext-text-header").style.color = "var(--Neutral000)";
  document.querySelector(".search-bar").style.background = "transparent";
  document.getElementById("logo").src = "./assets/images/logo-white.svg";

  const cardBody = document.querySelectorAll(".ext-card-body");
  cardBody.forEach((items) => {
    items.style.background = "Var(--Neutral600)";
  });

  const removeBtn = document.querySelectorAll("#remove-button");
  removeBtn.forEach((items) => {
    items.style.color = "var(--Neutral100)";
    items.style.border = "1px  solid var(--Neutral100)";

    items.addEventListener("mouseenter", (e) => {
      e.preventDefault();
      items.style.background = "var(--Red500)";
      items.style.color = "var(--Neutral900)";
      items.style.border = "1px solid var(--Neutral900)";
    });

    items.addEventListener("mouseleave", (e) => {
      e.preventDefault();
      items.style.background = "var(--Neutral600)";
      items.style.color = " var(--Neutral100)";
      items.style.border = "1px solid var(--Neutral100)";
    });
  });

  const cardParagraph = document.querySelectorAll(".ext-body-paragraph");
  cardParagraph.forEach((items) => {
    items.style.color = "var(--Neutral100)";
  });
}
searchBarIconSun.addEventListener("click", (e) => {
  e.preventDefault();
  changeBackgroundColorDefault();
});

searchBarIconMoon.addEventListener("click", (e) => {
  e.preventDefault();
  changeBackgroundColorDark();
});
