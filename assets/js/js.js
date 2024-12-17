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
setInterval(changeImage, 4000); 


// For color buttons
const buttons = document.getElementsByClassName("color_button");
const cardImage = document.querySelector(".card_img_select img");

const imagePaths = {
    blue: "../assets/img/blue.webp",
    purple: "../assets/img/purple.webp",
    pink: "../assets/img/pink.webp",
    red: "../assets/img/red.webp",
    yellow: "../assets/img/yellow.webp",
    orange: "../assets/img/orange.webp",
    green: "../assets/img/green.webp",
    black: "../assets/img/black.webp",
    white: "../assets/img/white.webp"
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("clicked");
        }
        buttons[i].classList.toggle("clicked");

        const colorClass = buttons[i].querySelector(".inner_button").classList[1];

        cardImage.src = imagePaths[colorClass];
    });
}
