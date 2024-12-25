// Card Animation
const images = [
    "../fave_invitation/assets/img/hand_blue_69280.webp",
    "../fave_invitation/assets/img/hand_green_69270.webp",
    "../fave_invitation/assets/img/hand_pink_69320.webp",
    "../fave_invitation/assets/img/hand_orange_69290.webp",
    "../fave_invitation/assets/img/hand_purple_69310.webp",
    "../fave_invitation/assets/img/hand_red_69330.webp",
    "../fave_invitation/assets/img/hand_yellow_69300.webp",
    "../fave_invitation/assets/img/hand_black_68770.webp",
    "../fave_invitation/assets/img/hand_white__68760.webp",
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
    blue: "../fave_invitation/assets/img/blue_69280.webp",
    purple: "../fave_invitation/assets/img/purple_69310.webp",
    pink: "../fave_invitation/assets/img/pink_69320.webp",
    red: "../fave_invitation/assets/img/red_69330.webp",
    yellow: "../fave_invitation/assets/img/yellow_69300.webp",
    orange: "../fave_invitation/assets/img/orange_69290.webp",
    green: "../fave_invitation/assets/img/green_69270.webp",
    black: "../fave_invitation/assets/img/black_68770.webp",
    white: "../fave_invitation/assets/img/white_68760.webp"
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
