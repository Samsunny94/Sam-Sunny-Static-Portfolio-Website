/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
/* ===========Mail Sending Function=============*/
function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value ,
        number: document.getElementById("number").value ,
        subject: document.getElementById("subject").value 
    };

    const serviceID = "service_g5ozsld";
    const templateID = "template_0aoa0ea";

    emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("number").value="";
                document.getElementById("subject").value="";
                console.log(res);
                alert("Your message was sent succcessfully !");
            }
        )
        .catch(err => console.log(err));
}
const readMoreButton = document.querySelector('.about .btn');
const aboutSection = document.getElementById('about');

readMoreButton.addEventListener('click', function () {
    aboutSection.classList.toggle('expanded');
});
//----------Progress Bar------------------
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercents = [97, 85, 80, 85, 89, 93];


const mainFn = () => {
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop - 10) {
            navbarLinks.forEach((navbarLink) => {
                navbarLink.classList.remove("change");
            });
            navbarLinks[i].classList.add("change");
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
        document.querySelectorAll(".progress-percent").forEach((el, i) => {
            el.style.width = `${progressBarPercents[i]}%`;
            el.previousElementSibling.firstElementChild.textContent =
                progressBarPercents[i];
        });
    }
};

mainFn();

const htmlProgress = document.getElementById("html-progress");
const cssProgress = document.querySelector(".progress-bar.css .progress-percent");
const jsProgress = document.querySelector(".progress-bar.javascript .progress-percent");
const bootstrapProgress = document.querySelector(".progress-bar.bootstrap .progress-percent");
const csharpProgress = document.querySelector(".progress-bar.csharp .progress-percent");
const sqlProgress = document.querySelector(".progress-bar.sql .progress-percent");

// Set the target percentages for each progress bar
const targetHtml = 97;
const targetCss = 85;
const targetJs = 60;
const targetBootstrap = 85;
const targetCsharp = 89;
const targetSql = 93;

// Define the animation duration in milliseconds
const animationDuration = 2000;

// Define a function to animate the progress bar width
function animateProgressBar(progressBar, targetPercentage) {
    // Calculate the current width of the progress bar
    const currentWidth = parseInt(progressBar.style.width) || 0;

    // Calculate the number of steps needed to reach the target percentage
    const numSteps = Math.abs(targetPercentage - currentWidth);

    // Calculate the width increment per step
    const increment = (targetPercentage - currentWidth) / numSteps;

    // Define a variable to keep track of the current width
    let currentProgress = currentWidth;

    // Define an interval to update the progress bar width every 10 milliseconds
    const interval = setInterval(() => {
        // Update the progress bar width
        currentProgress += increment;
        progressBar.style.width = `${currentProgress}%`;

        // Stop the animation when the target percentage is reached
        if (Math.abs(currentProgress - targetPercentage) < Math.abs(increment)) {
            clearInterval(interval);
        }
    }, animationDuration / numSteps);
}

// Animate each progress bar
animateProgressBar(htmlProgress, targetHtml);
animateProgressBar(cssProgress, targetCss);
animateProgressBar(jsProgress, targetJs);
animateProgressBar(bootstrapProgress, targetBootstrap);
animateProgressBar(csharpProgress, targetCsharp);
animateProgressBar(sqlProgress, targetSql); 

function validateForm() {
    // Get form inputs
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const numberInput = document.getElementById('number');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Check if required fields are filled
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please fill in all required fields.');
        return false;
    }

    // Check if email is in the correct format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Check if phone number is in the correct format
    const phoneRegex = /^\d{10}$/;
    if (numberInput.value && !phoneRegex.test(numberInput.value)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }

    return true;
}
