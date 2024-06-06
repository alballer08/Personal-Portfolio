// js for the typing on the screen animation
document.addEventListener('DOMContentLoaded',function(){  
var typed = new Typed('#element', {
    strings: ['Cybersecuritist.', 'Software Engineer.', 'Web Developer.'],
    typeSpeed: 75,
})
});

//js for the contact information pop up
document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.querySelector('.contact-btn');
    const contactDropdown = document.querySelector('.contact-dropdown');
    const arrow = document.querySelector('.contact-btn .arrow');

    contactBtn.addEventListener('click', function() {
        if (contactDropdown.style.display === 'none' || contactDropdown.style.display === '') {
            contactDropdown.style.display = 'block';
            contactDropdown.classList.add('outlined');
            arrow.style.transform = 'rotate(180deg)';
        } else {
            contactDropdown.style.display = 'none';
            contactDropdown.classList.remove('outlined');
            arrow.style.transform = 'rotate(0deg)';
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!contactBtn.contains(event.target) && !contactDropdown.contains(event.target)) {
            contactDropdown.style.display = 'none';
            contactDropdown.classList.remove('outlined');
            arrow.style.transform = 'rotate(0deg)';
        }
    });
});
