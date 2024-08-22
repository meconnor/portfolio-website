const menu = document.querySelector("#menu");

const nav = document.querySelector(".links");


menu.addEventListener("click", () => {
    console.log("Menu clicked")
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
});



// Links to socials in FOOTER

function openSocialMedia(platform) {
    const urls = {
        github: "https://github.com/meconnor",
        linkedin:"linkedin.com/in/connor-meriweather-6300a2279"
    };

    const url = urls[platform];

    if (url) {
        window.open(url, "_blank");
    } else {
        console.error("No URL defined for the platform:", platform);
    }
}