//animation
  AOS.init();



const form = document.querySelector('#form');
const input = document.querySelector('#input');
const formField = document.querySelector('.form__field')




eventListener();

function eventListener() {
    input.addEventListener('blur', emailValidation);
    form.addEventListener('submit', getSubscription);

}

function getSubscription(e) {
    e.preventDefault();
    

      if(this.type === 'email') {
        emailValidation(this);
   }
   if(input.value !== '' ) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You have subscribed successfully',
        showConfirmButton: false,
        timer: 1800
      })

      input.classList.remove('footer__form__input-correct');
      form.reset();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            showConfirmButton: false,
            text: 'Something went wrong!',
            timer: 1800
           
          })
   
 }
    
}

function emailValidation(e) {
    
const  mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



if(e.target.value.match(mailformat)) {
    formField.removeChild(formField.lastChild);
    
    input.classList.remove('footer__form__input-error');
    input.classList.add('footer__form__input-correct');

} else{
    input.classList.remove('footer__form__input-correct');
    input.classList.add('footer__form__input-error');
    
    const paragraph = document.createElement('p');
    paragraph.classList.add('footer__error')
    paragraph.innerHTML = 'Check your email please';

    formField.appendChild(paragraph);
}
}


    