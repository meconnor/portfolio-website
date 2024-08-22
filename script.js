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
        linkedin: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
        insta: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    };

    const url = urls[platform];

    if (url) {
        window.open(url, "_blank");
    } else {
        console.error("No URL defined for the platform:", platform);
    }
}