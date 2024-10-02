/*=============== Show Menu =============== */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== Menu Show =====*/
/* Validate if navToggle exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== Menu Hidden =====*/
/* Validate if navClose exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*===== Close the menu if a link is clicked =====*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});

/*=============== Remove Menu Mobile =============== */
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  // Use the existing 'navMenu' from global scope
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== Background Header ============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greter than 50 viewport height, add the
    //scroll-header class to header tag
    if(this.scrollY >=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
    }
    
    window.addEventListener('scroll', scrollHeader);

/*=============== Contact Form ===========*/
const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    // Check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || message.value === '') {
        // Add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        // Show message
        contactMessage.textContent = 'Write all the input fields';
    } else {
        // serviceID - templateID #form - publickey
        emailjs.sendForm(
            'service_ux2c0ju',
            'template_6r0mq4h',
            contactForm,
            'usm96YrJ1mWD8Xu2z'
        ).then(() => {
            // Show message and add color
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent';

            // Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        }, (error) => {
            alert('OOPs! SOMETHING WENT WRONG...', error);
        });

        // Clear input fields
        contactName.value = '';
        contactEmail.value = '';
        message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);



/*=============== Style Switcher =============== */
