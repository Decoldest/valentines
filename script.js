const container = document.querySelector('.container');
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const gif = document.querySelector('.gif');
const cat = document.getElementById('cat');

yesButton.addEventListener('click', () => {
  container.replaceWith(gif);
  gif.classList.toggle('hidden');
  console.log('clicked');
});

const moveNoButton = () => {
  const x = Math.random() * 400;
  const y = Math.random() * 400;

  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

noButton.addEventListener('click', () => {
  cat.src = "sanrio-kuromi.gif";
});
noButton.addEventListener('mouseenter', moveNoButton);