
const navBar = document.querySelector('.nav-container');
const navIcon = document.querySelectorAll('.nav-links li');
const skillCard = document.querySelectorAll('.skills-container');
const projectCard = document.querySelector('.projects-container');


window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

const noOfIcons = ["HTML5", "CSS3", "JavaScript", "Git", "GitHub", "React", "Tailwind CSS", "Java", "Python", "MySQL"];
async function loadSkill(){
    for(let i in noOfIcons){
        const imageURL = `./Images/skill-icons/${noOfIcons[i]}.svg`;
        const card = document.createElement('div');
        card.classList.add("flex-box-ver");
        card.classList.add("card");
        card.innerHTML = `<div><img loading="lazy" src="${imageURL}" alt="icon"></div><p>${noOfIcons[i]}</p>`;
        skillCard[0].appendChild(card);
    } 
}

window.onload = ()=>{
    setTimeout(loadSkill,100);
    // loadProject();
}

const proPrevBtns = document.querySelectorAll('.pro-prev-btn');
const proGitBtns = document.querySelectorAll('.pro-github-btn');

const projectLinks = ["/", "/Pages/new-project.html", "/Pages/new-project.html"]

proPrevBtns.forEach((prevBtn, ind) => {
    prevBtn.addEventListener("click", () => {
        window.location.href = `${projectLinks[ind]}`;
    })
})

const projectGithubLinks = ["/", "/Pages/new-project.html", "/Pages/new-project.html"];

proGitBtns.forEach((gitbtn, ind) => {
    gitbtn.addEventListener('click', () => {
        window.location.href = `${projectGithubLinks[ind]}`;
    })
})



document.querySelectorAll('.resume-dnld').forEach((ele) => {
    ele.addEventListener('click', () => {
        window.location.href = "Pages/new-project.html"
    })
})

document.querySelector('#contact-me-btn').addEventListener('click', () => {
    window.location.href = "#contact-form"
})

document.querySelector('#contact-form-submit-btn').addEventListener('click', () => {
    window.location.href = "Pages/form-submit.html"
})
