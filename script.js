document.addEventListener("DOMContentLoaded", function() {
    let pictures = document.querySelectorAll(".available-pictures a");
    let loadMoreButton = document.getElementById("load-more");
    let loadLessButton = document.getElementById("load-less");
    let currentIndex = 0;
    const increment = 4;

    function showMorePictures() {
        for (let i = 0; i < increment; i++) {
            if (currentIndex < pictures.length) {
                pictures[currentIndex].style.display = "table";
                currentIndex++;
            }
        }
        updateButtons();
    }

    function showLessPictures() {
        for (let i = 0; i < increment; i++) {
            if (currentIndex > 0) {
                currentIndex--;
                pictures[currentIndex].style.display = "none";
            }
        }
        updateButtons();
    }

    function updateButtons() {
        loadMoreButton.style.display = currentIndex < pictures.length ? "table" : "none";
        loadLessButton.style.display = currentIndex > 0 ? "table" : "none";
    }

    loadMoreButton.addEventListener("click", showMorePictures);
    loadLessButton.addEventListener("click", showLessPictures);

    // Show initial set of pictures
    showMorePictures();

    // Modal functionality
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("img01");
    let span = document.getElementsByClassName("close")[0];

    pictures.forEach(picture => {
        picture.addEventListener("click", function(event) {
            event.preventDefault();
            modal.style.display = "block";
            modalImg.src = this.href;
        });
    });

    span.onclick = function() { 
        modal.style.display = "none";
    }

    modal.onclick = function() { 
        modal.style.display = "none";
    }
});