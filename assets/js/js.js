// Card Animation
const images = [
    "../assets/img/hand_blue.webp",
    "../assets/img/hand_green.webp",
    "../assets/img/hand_pink.webp",
    "../assets/img/hand_orange.webp",
    "../assets/img/hand_purple.webp",
    "../assets/img/hand_red.webp",
    "../assets/img/hand_yellow.webp",
    "../assets/img/hand_black.webp",
    "../assets/img/hand_white.webp",
];

let currentIndex = 0;

const imageElement = document.getElementById("image");

function changeImage() {
    imageElement.classList.remove("visible");

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];

        imageElement.classList.add("visible");
    }, 1000);
}

imageElement.src = images[currentIndex];
imageElement.classList.add("visible");

setInterval(changeImage, 4000); 


// For Card Selection
const buttons = document.getElementsByClassName("color_button");
const cardImage = document.querySelector(".card_img_select img");
const bgPattern = document.querySelector(".bg_pattern");

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

const bgClasses = {
    blue: "bg_blue",
    purple: "bg_purple",
    pink: "bg_pink",
    red: "bg_red",
    yellow: "bg_yellow",
    orange: "bg_orange",
    green: "bg_green",
    black: "bg_black",
    white: "bg_white"
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        for (let j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove("clicked");
        }
        buttons[i].classList.toggle("clicked");

        const colorClass = buttons[i].querySelector(".inner_button").classList[1];

        cardImage.classList.add("fade_out");

        setTimeout(() => {
            cardImage.src = imagePaths[colorClass];
            cardImage.classList.remove("fade_out");
            cardImage.classList.add("fade_in");

            setTimeout(() => {
                cardImage.classList.remove("fade_in");
            }, 500)
        }, 500);

        for (const bgClass in bgClasses) {
            bgPattern.classList.remove(bgClasses[bgClass]);
        }
        bgPattern.classList.add(bgClasses[colorClass]);
    });
}

// Accordion
document.querySelectorAll('.faq_box').forEach(box => {
    const questionBox = box.querySelector('.question_box');
    const answerBox = box.querySelector('.answer_box');
    const mark = box.querySelector('.line_2'); 

    answerBox.style.maxHeight = "0";
    answerBox.style.overflow = "hidden";
    answerBox.style.transition = "max-height 0.3s ease";
    questionBox.classList.add('closed_box');

    questionBox.addEventListener('click', () => {
        if (answerBox.style.maxHeight === "0px") {
            answerBox.style.maxHeight = answerBox.scrollHeight + "px";
            questionBox.classList.remove('closed_box');
            mark.classList.add('open');
        } else {
            answerBox.style.maxHeight = "0";
            questionBox.classList.add('closed_box');
            mark.classList.remove('open');
        }
    });
});

// Accordion
document.querySelectorAll('.card_info_box').forEach(box => {
    const questionbox2 = box.querySelector('.question_box');
    const cardinfobox = box.querySelector('.card_info_table');
    const mark = box.querySelector('.line_2'); 

    cardinfobox.style.maxHeight = "0";
    cardinfobox.style.overflow = "hidden";
    cardinfobox.style.transition = "max-height 0.3s ease";

    questionbox2.addEventListener('click', () => {
        if(cardinfobox.style.maxHeight === "0px") {
            cardinfobox.style.maxHeight = cardinfobox.scrollHeight + "px";
            mark.classList.add('open');
        } else {
            cardinfobox.style.maxHeight = "0";
            mark.classList.remove('open');
        }
    });
});
