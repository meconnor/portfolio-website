const menu = document.querySelector("#menu");

const nav = document.querySelector(".links");

const resume = document.querySelector("#resume");

const contactSection = document.querySelector("#contact");

const hireBtn = document.querySelector(".btn-box .btn:nth-child(1)");
const contactBtn = document.querySelector(".btn-box .btn:nth-child(2)");


// NAV BAR RESUME LINK

resume.addEventListener("click", (event) => {
    event.preventDefault();
    link = "https://launchcode-candidate-store-production.s3.us-west-2.amazonaws.com/candidates/a135814/resume/Resume-connor-meriweather2024-03-18.pdf?X-Amz-Expires=604799&X-Amz-Date=20240821T204421Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIRU7A5IHFCM4WQPA%2F20240821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=0e25d91eb577f2c68b3c9284bb8ef3958738027981e315aa8dddb2ad095e614d"
    if (link) {
        window.open(link, "_blank");
        console.log("Resume reviewed");
    } else {
        console.error("No URL defined for resume:", link)
    }
});

// NAV BAR SCROLL TO SELECTED SECTION FUNCTION

menu.addEventListener("click", () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
});

// Contact Me and Hire FUNCTION 
function scrollToContactForm() {
    contactSection.scrollIntoView({behavior: "smooth", block: "start"});
}

hireBtn.addEventListener("click", () => {
    scrollToContactForm();
})
contactBtn.addEventListener("click", () => {
    scrollToContactForm();
})


// Links to projects in PROJECTS ON GITHUB

function openProjects(project) {
    const links = {
        nutraStride: "https://github.com/KBSwift/pivot-pirates",
        ormJava: "https://github.com/meconnor/JavaGA4",
        todoList: "https://github.com/meconnor/toDoList"
    };

    const link = links[project]

    if (link) {
        window.open(link,"_blank");
    } else {
        console.error("No URL defined for the project:", project)
    }
}

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

// CONTACT FORM

function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_3hd0ape", "template_99w3y2b", params).then(function(res) {
        alert("Your message has been sent to my email. I will get back to you within 24 hours." + res.status);
    }).catch(function(error) {
        console.error("Error sending email:", error);
    });
}
