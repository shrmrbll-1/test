document.addEventListener('DOMContentLoaded', function() {
    const menuOnButton = document.querySelector('.navigation_menu_on');
    const menuOffButton = document.querySelector('.navigation_menu_off');
    const menuOption = document.querySelector('.menu_option');

    // Initially hide the menu
    menuOption.style.display = 'none';

    menuOnButton.addEventListener('click', function() {
        menuOption.style.display = 'block';  // Show the menu
    });

    menuOffButton.addEventListener('click', function() {
        menuOption.style.display = 'none';  // Hide the menu
    });
});