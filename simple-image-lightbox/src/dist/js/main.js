const images = document.querySelectorAll("[data-lightbox='lightbox-img']");
const lightboxPopup = document.querySelector("#lightbox-popup");
const lightboxPopupImg = document.querySelector("#lightbox-popup-img");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", () => {
    const getImgSrc = images[i].getAttribute("src");
    lightboxPopupImg.setAttribute("src", getImgSrc);
    showLightboxPopup();
  });
}

const showLightboxPopup = () => {
  if (lightboxPopup.classList.contains("invisible")) {
    lightboxPopup.classList.remove("invisible");
    lightboxPopup.classList.add("visible");
  } else {
    hideLightboxPopup();
  }
};

const hideLightboxPopup = () => {
  if (!lightboxPopup.classList.contains("invisible")) {
    lightboxPopup.classList.remove("visible");
    lightboxPopup.classList.add("invisible");
  }

  removeImgSrcAttribute();
};

const removeImgSrcAttribute = () => {
  if (lightboxPopupImg.hasAttribute("src")) {
    lightboxPopupImg.removeAttribute("src");
  }
};
