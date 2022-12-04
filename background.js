const backgroundImage = document.createElement("img");

const imageList = [
  "one.jpg",
  "two.jpg",
  "three.jpg",
  "four.jpg",
  "five.jpg",
  "six.jpg",
  "seven.jpg",
  "eight.jpg",
];

const randomImage = imageList[Math.floor(Math.random() * imageList.length)];

const bgImage = `url(img/${randomImage})`;

document.body.style.backgroundImage = bgImage;
