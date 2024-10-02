/*=============== Background Header ============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greter than 50 viewport height, add the
    //scroll-header class to header tag
    if(this.scrollY >=50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
    }
    
    window.addEventListener('scroll', scrollHeader);
    
/*=============== Active link ============*/
const navlink = document.querySelectorAll('.nav__link');

function activeLink(){
    navlink.forEach((a) => a.classList.remove('active-link'));
    this.classList.add('active-link');
}

navlink.forEach((a) => a.addEventListener('click', activeLink));


/*=============== Mixitup Filter =============== */
/*let mixerProjects= mixitup('.projects__container', {
    selectors: {
        target: '.project__item',
    },
    animation: {
        duration: 300,
    },
});
/* Active Work */
/*const linkWork = document.querySelectorAll('.category__btn');

function activeWork(){
    linkwork.forEach((a) => a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a) => a.addEventListener('click',activeWork));


/*=============== Mixitup Filter =============== */ 
/*let mixerCertificates = mixitup('.certificates__container', {
    selectors: {
        target: '.certificate__item',
    },
    animation: {
        duration: 300,
    },
});
/* Active Work */
/*const linkWork1 = document.querySelectorAll('.category__btn1');

function activeWork1(){
    linkWork1.forEach((a) => a.classList.remove('active-work1'));
    this.classList.add('active-work1');
}

linkWork1.forEach((a) => a.addEventListener('click',activeWork1));



/*=============== Testimonials Swiper =============== */
var testiSwiper = new Swiper('.testimonial__container',{
    loop: true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    mousewheel: true,
    keyboard: true,
});

/*=============== Contact Form ===========*/
/*const contactForm = document.getElementById('contact-form'),
  contactName = document.getElementById('contact-name'),
  contactEmail = document.getElementById('contact-email'),
  message = document.getElementById('message'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e)  => {
    e.preventDefault();

    //check if the field has a value
    if (contactName.value === '' || 
        contactEmail.value === '' || 
        Message.value === ''
    ) {
        //add and remove color
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        //show message
        contactMessage.textContent = 'Write all the input fields';
    } else{
        //serviceID - templateID #form - publicky
        emailjs
          .sendForm(
            'service_ux2c0ju',
            'template_6r0mq4h',
            '#contact-form',
            'usm96YrJ1mWD8Xu2z' 
        )
        .then(() => {
            //show message and add color,window + dot to open emoji
            contactMessage.classList.add('color-light');
            contactMessage.textContent = 'Message sent';

            //remove message after 5 
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
          },
           (error) => {
            alert('OOPs! SOMETHING WENT WRONG...',error)


        } );
        //clear  input fields
        contactName.value = '';
        contactEmail.value ='';
        Message.value = '';
    }
  };

contactForm.addEventListener('submit', sendEmail);*/

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

