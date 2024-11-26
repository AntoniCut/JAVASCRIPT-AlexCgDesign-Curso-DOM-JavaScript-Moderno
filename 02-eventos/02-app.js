//  *********************************************  
//  **********  /02-eventos/02-app.js  **********  
//  *********************************************  



//  **********  2. Eventos  **********

document.addEventListener('DOMContentLoaded', () => {


    console.warn('**********  02-eventos  **********');
    console.log('\n\n');


    //  -------------------------------
    //  ----------  WRAPPER  ----------
    //  -------------------------------

    const wrapper = document.querySelector('[data-id="wrapper"]');
    const input = document.querySelector('[type="text"]');
    const changeUser = document.querySelector('[data-id="name"]');
    const submitBtn = document.querySelector('[type="submit"]');

    //  -----  eventos de wrapper  -----

    wrapper.addEventListener('click', (e) => {

        $this = e.target;
        console.log($this);

        $this.style.backgroundColor = 'hotpink';

    });

    input.addEventListener('change', (e) => {

        console.log('e.target.value - input => ', e.target.value);
        changeUser.textContent = e.target.value;
    });

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });



    //  ---------------------------------------
    //  ----------  SECTION ONCLICK  ----------
    //  ---------------------------------------

    const buttonShow1 = document.querySelector('[data-id="button-show1"]');
    const buttonShow2 = document.querySelector('[data-id="button-show2"]');

    //  -----  funciones de onclick  -----
    window.controladorEvento = () => {

        const name = prompt('¿Cual es tu nombre?');
        alert('Hola, ' + name);
    }

    //  -----  eventos de onclick  -----
    buttonShow1.onclick = controladorEvento;
    //buttonShow1.onclick = null;
    buttonShow2.addEventListener('click', controladorEvento);



    //  -------------------------------------------
    //  ----------  SECTION SHOW / HIDE  ----------
    //  -------------------------------------------

    const show = document.querySelector('#show');
    const hide = document.querySelector('#hide');

    //  -----  funciones de show / hide  -----

    function showSection(event) {

        console.log('this - show => ', this);
        console.log('event.type - show => ', event.type);
        console.log('event.target - show => ', event.target);

        wrapper.className = 'show';
        this.textContent = 'Muestro el wrapper';

        //  -----  removeEventListener  -----
        show.removeEventListener('click', showSection);
    }


    function hideSection(event) {

        console.log('this - hide => ', this);
        console.log('event.type - hide => ', event.type);
        console.log('event.target - hide => ', event.target);
        wrapper.className = 'hide';
        this.textContent = 'Oculto el wrapper';

        //  -----  removeEventListener  -----
        hide.removeEventListener('click', hideSection);
    }

    //  -----  eventos de show / hide  -----
    show.addEventListener('click', showSection);
    hide.addEventListener('click', hideSection);




    //  ------------------------------------
    //  ----------  CHANGE COLOR  ----------
    //  ------------------------------------

    const sectionColor = document.querySelector('.section-color');

    //  -----  funciones de change color  -----
    const eventDelegation = (e) => {

        if (e.target.matches('.button-color')) {

            const getColor = e.target.getAttribute('data-color');
            e.currentTarget.style.backgroundColor = getColor;
        }
    }


    //  ----------------------------------------------
    //  ----------  PROPAGACION DE EVENTOS  ----------
    //  ----------------------------------------------

    body = document.querySelector('body');
    sectionEvent = document.querySelector('.section-event-propagation');
    eventProp = document.getElementById('eventProp');
    
    
    function handEvent(event) {

        //  -----  currentTarget  --  propaga el evento hasta body  -----
        alert(`Has dado click en ${event.currentTarget.nodeName}`);
        
        //  -----  target  --  No propaga el evento  -----
        //alert(`Has dado click en ${event.target.nodeName}`);

    }

    body.addEventListener('click', handEvent);
    sectionEvent.addEventListener('click', handEvent);
    eventProp.addEventListener('click', handEvent);
    










    //  -----  eventos de change color  -----
    sectionColor.addEventListener('click', eventDelegation);





    console.log('\n\n\n\n\n')



});




