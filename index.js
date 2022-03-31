const ratingContainerEl = document.getElementsByClassName(".btn-container");
const ratingOneEl = document.getElementsByClassName(".rating-one");
const ratingTwoEl = document.getElementsByClassName(".rating-two");
const ratingThreeEl = document.getElementsByClassName(".rating-three");
const ratingFourEl = document.getElementsByClassName(".rating-four");
const ratingFiveEl = document.getElementsByClassName(".rating-five");
const submitBtn = document.getElementById("submit-btn");
const ratingCard = document.getElementsByClassName(".rating-card");
const thankYouCard = document.getElementsByClassName(".thank-you-card");
const ratingForm = document.getElementById("rating-form");
let rating;
const ratingAmounts = document.getElementById("rating-amt");
const numberChosen = document.getElementById("number-rating");

function handleRatingNumberBtn({ target }) {
  removeAllActiveClass();
  target.classList.add("active");
  rating = target.value;
}

function removeAllActiveClass() {
  ratingAmounts.forEach((button) => button.classList.remove("active"));
}

function handleRatingSubmit() {
  if (!rating) {
    return alert("please choose a rating amout");
  }

  numberChosen.textContent = rating;
  thankYouCard.classList.remove("hidden");
  ratingCard.classList.add("hidden");
}

ratingAmounts.forEach((button) => {
  button.addEventListener("click", handleRatingNumberBtn);
});

submitBtn.addEventListener("click", handleRatingSubmit);
