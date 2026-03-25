import iziToast from "izitoast";
import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, hideLoader, showLoader, clearGallery} from "./js/render-functions";


import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const query = event.target.elements["search-text"].value.trim();
    if (query === "") {
        iziToast.warning({ message: "Enter something for search!" })
        return;
    }

  clearGallery();
    showLoader();

    getImagesByQuery(query).then(data => {
        if (data.hits.length === 0) {
            iziToast.warning({ message: "Sorry, there are no images matching your search query. Please try again!" })
            return;
        }
        createGallery(data.hits);
    }).catch(() => {
        iziToast.error({ message: "Something went wrong!" });
    })
        .finally(() => hideLoader());
    return;
})

