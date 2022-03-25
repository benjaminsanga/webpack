import generateJoke from "./generateJoke";
import './styles/main.scss';
import ann from './assets/Ann.png';

const annImg = document.getElementById('annImg');
annImg.src = ann;

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke()