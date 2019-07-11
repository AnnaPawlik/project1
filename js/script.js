function toggleMenu(visible) {
    document.querySelector('.navbar-menu').classList.toggle('show', visible)
}

document.querySelector('.navbar-menu').addEventListener('click', function (e) {
    e.preventDefault();
    toggleMenu()
});