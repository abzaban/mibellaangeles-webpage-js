

(() => {
    'use strict'

    const videoIndexes = [9, 11];
    let media = '';
    for (let i = 17; i > 0; i--) {
        if (videoIndexes.find(e => e == i)) {
            media += `
            <video controls>
                <source src="assets/media/${i}.mp4" type="video/mp4" width="100%" height="100%">
            </video>`;
            continue;
        }

        media += `<img src="assets/media/${i}.jpeg" alt="photo" width="100%" height="100%"></img>`;
    }

    document.querySelector(".slider").innerHTML = media;

    var audio = document.querySelector("#mi-kryptonita");
    audio.volume = 0.2;
})();