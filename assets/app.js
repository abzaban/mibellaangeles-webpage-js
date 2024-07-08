(() => {
    'use strict'

    const div = document.querySelector('.slider-container');

    const showImage = () => {
        for (let i = 23; i > 0; i--) {
            if (i == 17) {
                div.innerHTML += `
                    <video class="slider-item" controls>
                        <source src="assets/media/${i}.mp4" type="video/mp4">
                    </video>
                `;
                continue;
            }
            div.innerHTML += `<img class="slider-item" src="assets/media/${i}.jpeg" width="100%" height="100%" />`;
        }
    }
    showImage();
})();