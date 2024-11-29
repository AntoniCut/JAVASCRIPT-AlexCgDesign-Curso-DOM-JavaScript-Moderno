//  ********************************************  
//  **********  /03-clases/03-app.js  **********  
//  ********************************************  



//  **********  3. Clases  **********

document.addEventListener('DOMContentLoaded', () => {


    console.warn('**********  03-clases  **********');
    console.log('\n\n');


    const button = document.querySelector('.button');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.modal__close');


    button.addEventListener('click', function () {
        
        console.log(modal.classList);
        modal.classList.add('show');
        console.log(modal.classList);
    });


    closeModal.addEventListener('click', function () {
        modal.classList.remove('show', 'clase2');
    });


    console.log('\n\n\n\n\n')

});




