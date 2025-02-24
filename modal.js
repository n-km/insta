let currentImageIndex = 0;
        let currentImages = [];

        function openModal(imageElement) {
            // Finde alle Bilder in der aktuellen Summary-Gruppe
            const summary = imageElement.closest("details");
            currentImages = Array.from(summary.querySelectorAll(".available-pictures a img"));
            currentImageIndex = currentImages.indexOf(imageElement);

            updateModalImage();
            document.getElementById("imageModal").style.display = "block";
        }

        function updateModalImage() {
            if (currentImages.length > 0) {
                document.getElementById("previewImage").src = currentImages[currentImageIndex].src;
            }
        }

        function changeImage(step) {
            currentImageIndex = (currentImageIndex + step + currentImages.length) % currentImages.length;
            updateModalImage();
        }

        function closeModal() {
            document.getElementById("imageModal").style.display = "none";
        }

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeModal();
            if (event.key === "ArrowLeft") changeImage(-1);
            if (event.key === "ArrowRight") changeImage(1);
        });

        // Event Listener zu allen Bildern hinzufügen
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".available-pictures a img").forEach(img => {
                img.addEventListener("click", (e) => {
                    e.preventDefault();
                    openModal(img);
                });
            });
        });