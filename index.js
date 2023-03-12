const stars = document.getElementById('stars');
const ratingText = document.getElementById('rating-text');
const buttons = document.getElementById('buttons');
const submit = document.getElementById('submit');
const thanks = document.getElementById('thanks');
const ratingResult = document.getElementById('rating-result');

let rating = 0;

const handleRating = value =>{
  rating = value;
  updateStars();
}

function updateStars() {
  stars.innerHTML = '';
  for (let i = 1; i <= rating; i++) {
    stars.innerHTML += '<img src="img\\icon-star.svg" style="padding:10px; background-color:#262E38; border-radius:20px" alt="Star">';
  }
}

function handleSubmit() {
  ratingText.style.display = 'none';
  buttons.style.display = 'none';
  submit.style.display = 'none';
  thanks.style.display = 'flex';
  ratingResult.innerHTML = `You selected ${rating} out of 5`;
  stars.innerHTML=''
}

updateStars();
