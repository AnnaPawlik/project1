function toggleMenu(visible) {
    document.querySelector('.navbar').classList.toggle('hide', visible)
}

document.querySelector('.navbar-menu').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});