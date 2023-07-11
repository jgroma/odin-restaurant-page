import './style/reset.css';
import './style/style.css';
import testImage from './assets/sophia-unsplash.jpg';

console.log("Is this working? Oh, yes.");

//testing image loading
const testDiv = document.createElement('div');
testDiv.classList.add('test-div');
testDiv.textContent = "PenguinBistre";

const glacierImg = new Image();
glacierImg.src = testImage;

testDiv.appendChild(glacierImg);

document.body.appendChild(testDiv);