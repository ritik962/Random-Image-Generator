const containerEl = document.querySelector(".container");

const gridContainerEl = document.querySelector(".grid-container");

const imageContainer = document.querySelector(".image-container");

const btnEl = document.querySelector("#btn");

const addNewImages = () => {
  for (let i = 0; i < imageNumber; i++) {
    const newImgContainerEl = document.createElement("div");
    newImgContainerEl.classList.add("image-container");
    gridContainerEl.appendChild(newImgContainerEl);
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    newImgEl.classList.add("image");
    newImgContainerEl.appendChild(newImgEl);
  }
};

btnEl.addEventListener("click", () => {
  imageNumber = 10;
  addNewImages();
});
