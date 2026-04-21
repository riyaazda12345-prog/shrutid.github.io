document.addEventListener("DOMContentLoaded", () => {

    const pages = document.querySelectorAll(".page");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    const cover = document.getElementById("coverPage");
    const music = document.getElementById("bg-music");

    let current = 0;

    function showPage(index) {
        pages.forEach((page, i) => {
            page.classList.remove("active", "prev");

            if (i === index) page.classList.add("active");
            else if (i < index) page.classList.add("prev");
        });
    }

    function playMusic() {
        music.play().catch(()=>{});
    }

    cover.addEventListener("click", () => {
        current = 1;
        showPage(current);
        playMusic();
    });

    nextBtn.addEventListener("click", () => {
        if (current < pages.length - 1) {
            current++;
            showPage(current);
            playMusic();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (current > 0) {
            current--;
            showPage(current);
        }
    });

});