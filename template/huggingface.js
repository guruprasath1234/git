const accessKey = "QsexEuOEBYa-3GF1BXAI_wdmwHWIFAl8ICs0-cBldh0";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        searchResult.innerHTML = "";
    }

    console.log(data);

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html; // Fix the typo here
        imageLink.target = "_blank"; // Fix the typo here

        const downloadButton = document.createElement("a");
        downloadButton.href = result.urls.raw + "&dl=1"; // Direct download link
        downloadButton.target = "_blank";
        downloadButton.innerText = "Download";


   // Adding inline styles for the download button
   downloadButton.style.display = "inline-block";
   downloadButton.style.margin = "10px";
   downloadButton.style.padding = "8px 16px";
   downloadButton.style.backgroundColor = "#4CAF50";
   downloadButton.style.color = "white";
   downloadButton.style.textDecoration = "none";
   downloadButton.style.borderRadius = "4px";
   downloadButton.style.transition = "background-color 0.3s ease-in-out";

   // Adding hover style for the download button
   downloadButton.addEventListener("mouseover", () => {
       downloadButton.style.backgroundColor = "#45a049";
   });

       // Update the event listener for downloadButton
       downloadButton.addEventListener("click", (event) => {
        event.preventDefault();

        const modal = document.getElementById("modal");
        const modalImage = document.getElementById("modal-image");
        const modalDownloadButton = document.getElementById("modal-download-button");

        // Set modal image and download button details
        modalImage.src = result.urls.regular; // Use "regular" or appropriate image size
        modalDownloadButton.href = result.urls.raw + "&dl=1";

        modal.style.display = "block";
    });

    // Close the modal when the close button is clicked
const closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    const modalImage = document.getElementById("modal-image");
    // modalImage.src = ""; 


    modalImage.src = result.urls.regular; // Use "regular" or appropriate image size
    modalDownloadButton.href = result.urls.raw + "&dl=1";

    modal.style.display = "block";

    const modalContent = document.querySelector(".modal-content");
    modalContent.style.display = "flex";
    modalContent.style.flexDirection = "column";
    modalContent.style.justifyContent = "center";
    modalContent.style.alignItems = "center";
});






    
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container"); // You can add a custom class for styling if needed

        imageLink.appendChild(image);
        imageContainer.appendChild(imageLink);
        imageContainer.appendChild(downloadButton);
        // searchResult.appendChild(imageLink);
        searchResult.appendChild(imageContainer);
    })
    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", ()=>{
 page++;
 searchImages();
})

// ... Your existing code ...

// results.map((result) => {
//     const image = document.createElement("img");
//     image.src = result.urls.small;

//     const imageLink = document.createElement("a");
//     imageLink.href = result.links.html;
//     imageLink.target = "_blank";

//     const downloadButton = document.createElement("a");
//     downloadButton.href = result.urls.raw + "&dl=1"; // Direct download link
//     downloadButton.target = "_blank";
//     downloadButton.innerText = "Download";

//     const imageContainer = document.createElement("div");
//     imageContainer.classList.add("image-container"); // You can add a custom class for styling if needed

//     imageLink.appendChild(image);
//     imageContainer.appendChild(imageLink);
//     imageContainer.appendChild(downloadButton);
//     searchResult.appendChild(imageContainer);
// });

// ... Rest of your code ...

   // Add a class name to your download button for styling
