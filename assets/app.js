(() => {
    'use strict'

    const div = document.querySelector('.slider-container');

    const showImage = () => {
        for (let i = 17; i > 0; i--)
            div.innerHTML += `<img class="slider-item" src="assets/img/${i}.jpg" />`;
    }
    showImage();
})();