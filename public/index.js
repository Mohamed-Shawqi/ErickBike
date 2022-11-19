let heroSection = document.querySelector(".hero-section");
let imgBanner = ["banner_one.png", "banner_two.jpg", "banner_three.jpg"];
let keySetting = document.querySelector(".key-setting");
let gearIcon = document.querySelector(".icon-gear");
let settingBox = document.querySelector(".setting-box");
let bicyclesArray = document.querySelectorAll(".bicycle-box");
let modalContainer = document.getElementById("modal-container");
let productName = document.getElementById("p-name");
let productCategory = document.getElementById("p-category");
let productPrice = document.getElementById("p-price");
let productImg = document.getElementById("p-img");

let i = 0;
let boxId = 0;

// Slider Code
setInterval(() => {
  if (i >= imgBanner.length) {
    i = 0;
  }
  heroSection.style.backgroundImage = `url(images/Erik/${imgBanner[i]})`;
  i++;
}, 5000);

// Key Setting Box
keySetting.addEventListener("click", () => {
  gearIcon.classList.toggle("fa-spin");
  settingBox.classList.toggle("open-box");
});

// Modal Box
bicyclesArray.forEach((element) => {
  element.addEventListener("click", () => {
    // Get JSON file for looping elements data
    fetch("bicycles.json")
      .then((result) => result.json())
      .then((result) => {
        for (const e of result.bicycles) {
          if (e.id == element.dataset.id) {
            productImg.src = e.imgSrc;
            productName.textContent = `Name: ${e.name}`;
            productCategory.textContent = `Category: ${e.category}`;
            productPrice.textContent = `Price: $${e.price}`;
          }
        }
      });
    element.dataset.id;
    modalContainer.style.cssText = `
      opacity:1;
      display: flex;
    `;
  });
});

window.onclick = (e) => {
  if (e.target == modalContainer) {
    modalContainer.style.display = "none";
  }
};
