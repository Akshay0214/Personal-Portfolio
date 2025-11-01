const toggleBtn = document.querySelector('.toggle-btn');
const hamburgerImg = document.querySelectorAll('.toggle-btn > img');
const navActionLinks = document.querySelector('.nav-action-links');
toggleBtn.addEventListener('click', () => {
    hamburgerImg[0].classList.toggle('active');
    hamburgerImg[1].classList.toggle('active');
    navActionLinks.classList.toggle('active');
    // hamburgerImg.forEach((ele) = {
    //     ele.classList.toggle('active');
    // })
})