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

    

    //  ----------------------------------------------
    //  ----------  PROPAGACION DE EVENTOS  ----------
    //  ----------------------------------------------

    body = document.querySelector('body');
    sectionEvent = document.querySelector('.section-event-propagation');
    eventProp = document.getElementById('eventProp');


    function handEvent(event) {

        //  -----  currentTarget  --  propaga el evento hasta body  -----
        //  -----  boton -> section -> body  ----------------------------
        alert(`Has dado click en ${event.currentTarget.nodeName}`);

        //  -----  target  --  No propaga el evento  -----
        //alert(`Has dado click en ${event.target.nodeName}`);

    }

    body.addEventListener('click', handEvent);
    sectionEvent.addEventListener('click', handEvent);
    eventProp.addEventListener('click', handEvent);



    //  ------------------------------------------------------
    //  ----------  DETENER PROPAGACION DE EVENTOS  ----------
    //  ------------------------------------------------------

    bodyStop = document.querySelector('body');
    sectionEventStop = document.querySelector('.section-event-propagation-stop');
    eventPropStop = document.getElementById('eventPropStop');


    function handEventStop(event) {

        //  -----  Detiene la Propagacion del Evento  -----
        event.stopPropagation();

        //  -----  currentTarget  --  propaga el evento hasta body  -----
        //  -----  boton -> section -> body  ----------------------------
        alert(`Has dado click en ${event.currentTarget.nodeName}`);

    }

    bodyStop.addEventListener('click', handEventStop);
    sectionEventStop.addEventListener('click', handEventStop);
    eventPropStop.addEventListener('click', handEventStop);



    //  ----------------------------------------------------------------
    //  ----------  DETENER PROPAGACION INMEDIATA DE EVENTOS  ----------
    //  ----------------------------------------------------------------

    bodyImmediateStop = document.querySelector('body');
    sectionImmediateEventStop = document.querySelector('.section-event-propagation-stop-immediate');
    
    function handEventStopImmediate(event) {

        //  -----  Detiene la Propagacion del Evento Inmediatamente  -----
        event.stopImmediatePropagation();
        //event.stopPropagation();

        //  -----  currentTarget  --  propaga el evento hasta body  -----
        //  -----  boton -> section -> body  ----------------------------
        alert(`Has dado click en ${event.currentTarget.nodeName}`);

    }

    bodyImmediateStop.addEventListener('click', handEventStopImmediate);
    
    sectionImmediateEventStop.addEventListener('click', handEventStopImmediate);
    sectionImmediateEventStop.addEventListener('click', () => {
        alert('Hola Mundo!!!');
    });
       


     //  ----------------------------------------------
    //  ----------  FASE CAPTURA DE EVENTOS  ----------
    //  -----------------------------------------------

    bodyCapture = document.querySelector('body');
    sectionCapture = document.querySelector('.section-fase-captura');
    eventCapture = document.querySelector('#eventCapture');
    
    function handEventCapture(event) {

        //  -----  currentTarget  --  propaga el evento hasta body  -----
        //  -----  boton -> section -> body  ----------------------------
        alert(`Has dado click en ${event.currentTarget.nodeName}`);

    }

    //  -----  se desencadenan los eventos en secuencia De Mayor a Menor  -----

    bodyCapture.addEventListener('click', handEventCapture, {
        capture: true
    });

    sectionCapture.addEventListener('click', handEventCapture, {
        capture: true
    });

    eventCapture.addEventListener('click', handEventCapture, {
        capture: true
    });
    


    //  -----------------------------------------
    //  ----------  MATCHES Y CLOSEST  ----------
    //  -----------------------------------------

    const elemsDataId = document.querySelectorAll('[data-id]');
    console.log(elemsDataId);

    for(elemento of elemsDataId) {
        
        //console.log(elemento);

        const currentElement = elemento.matches('[data-id="button-show"]');
        
        if(currentElement) {
            console.log(elemento);
            console.log(`El botón ${elemento.nodeName} contiene button-show en su atributo`);
        }
    }

    //  -----  closest retorna el ancestro mas cercano  -----
    const input2 = document.querySelector('[type="text"]');
    console.log('closest del input', input2.closest('.wrapper'));

    
    //  ------------------------------------
    //  ----------  CHANGE COLOR  ----------
    //  ------------------------------------

    const sectionColor = document.querySelector('.section-change-color');

    //  -----  funciones de change color  -----
    const eventDelegation = (e) => {

        if (e.target.matches('.button-color')) {

            const getColor = e.target.getAttribute('data-color');
            e.currentTarget.style.backgroundColor = getColor;
        }
    }

    //  -----  eventos de change color  -----
    sectionColor.addEventListener('click', eventDelegation);

    console.log('\n\n\n\n\n')

});




