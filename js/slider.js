
const images = [
    "images/pic-1.jpg",
    "images/pic-2.jpg",
    "images/pic-3.jpg",
    "images/pic-4.jpg",
    "images/pic-5.jpg",
    "images/pic-6.jpg",
    "images/pic-7.jpg",
    "images/pic-8.jpg",
    "images/pic-9.jpg"

]
let imgIndex = 0;
const imageElement = document.getElementById("image-element");
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    imageElement.setAttribute('src', images[imgIndex]);
    // console.log(imgIndex);
    imgIndex++;
}, 1000);