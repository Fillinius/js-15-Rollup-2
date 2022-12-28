import "./index.css";
import imgJS from './assets/js.png';

const textH1 = document.createElement('h1')
textH1.textContent = 'I love JavaScript too'
const imgHTML = document.createElement('img')
imgHTML.src = imgJS
imgHTML.alt = 'Тут должно быть фото'
document.body.append(textH1, imgHTML)
console.log('Hello World');