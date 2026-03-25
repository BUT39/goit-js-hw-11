import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"; 

const galleryList = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightbox = new SimpleLightbox('.gallery a');
export function createGallery(images) {
    const markup = images.map(image => `<li>
  <a href="${image.largeImageURL}">
    <img src="${image.webformatURL}" alt="${image.tags}" />
    <div>
      <p>Likes ${image.likes}</p>
      <p>Views ${image.views}</p>
      <p>Comments ${image.comments}</p>
      <p>Downloads ${image.downloads}</p>
    </div>
  </a>
</li>
`).join("");
    galleryList.innerHTML = markup;
    lightbox.refresh();
};
 
export function clearGallery() { 
    galleryList.innerHTML = "";
};
export function showLoader() {
    loader.classList.remove("hidden");
};
export function hideLoader() { 
    loader.classList.add("hidden");
};
