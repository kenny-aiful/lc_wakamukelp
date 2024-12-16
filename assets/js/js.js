const images = [
    "../assets/img/hand_blue.webp",
    "../assets/img/hand_green.webp",
    "../assets/img/hand_pink.webp"
];

let currentIndex = 0;

const imageElement = document.getElementById("image");

function changeImage() {
    // Fade out the current image
    imageElement.classList.remove("visible");

    setTimeout(() => {
        // Change the image source
        currentIndex = (currentIndex + 1) % images.length; // Loop through the array
        imageElement.src = images[currentIndex];

        // Fade in the new image
        imageElement.classList.add("visible");
    }, 1000); // Wait for the fade-out transition to complete (matches CSS transition duration)
}

// Initialize the first image
imageElement.src = images[currentIndex];
imageElement.classList.add("visible");

// Change the image every 2 seconds
setInterval(changeImage, 2000); 
