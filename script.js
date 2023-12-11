// this is for the Dillan letters
const nameText = document.getElementById('name-text');
const originalName = 'Dillan.';
let index = 0;

function animateName() {
    if (index < originalName.length) {
        nameText.textContent += originalName.charAt(index);
        index++;
        setTimeout(animateName, 200);
    }
}

function showImage(project) {
    const allImages = document.querySelectorAll('.project-image');
    allImages.forEach(image => image.style.display = 'none');

    const selectedImage = document.getElementById(`${project}Image`);
    selectedImage.style.display = 'block';
}

const projectsTitle = document.querySelector('.projects');
const originalTitle = '<Projects>';
let titleIndex = 0;

function animateTitle() {
    if (titleIndex < originalTitle.length) {
        projectsTitle.textContent += originalTitle.charAt(titleIndex);
        titleIndex++;
        setTimeout(animateTitle, 250);
    }
}

window.addEventListener('load', function () {
    animateName();
});
window.addEventListener('load', function () {
    animateTitle();
});