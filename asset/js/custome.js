
const header = document.getElementById('header');
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        header.classList.remove('top');
    } else {
        header.classList.add('top')
    }
}
