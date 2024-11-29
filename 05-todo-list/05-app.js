//  ***********************************************  
//  **********  /05-todo-list/05-app.js  **********  
//  ***********************************************  


//  **********  5. Todo List  **********

document.addEventListener('DOMContentLoaded', () => {


    console.warn('**********  05-todo-list  **********');
    console.log('\n\n');

    //  ----------  referencias al HTML  ----------
    //const button = document.querySelector('.button');
    const form = document.querySelector('.form');
    const input = form.querySelector('.input');
    const listContainer = document.querySelector('.list-container');
    const h3Message = document.createElement('h3');
    

    //  ---------------------------------
    //  ----------  FUNCIONES  ----------
    //  ---------------------------------
    
    //  ------------------------------
    const handleSubmit = (event) => {

        event.preventDefault();
        const inputValue = input.value;
        //console.log(inputValue);

        createTask(inputValue);
        form.reset();
                       
        message();
    }


    //  ---------------------------------
    const createTask = (inputValue) => {

        const newTask = document.createElement('li');
                
        newTask.textContent = inputValue;
        listContainer.prepend(newTask);

        addEvents(newTask);
    }


    //  -------------------
    const message = () => {

        h3Message.classList.add('task-message');
        h3Message.textContent = listContainer.firstElementChild ? 'Tareas por Hacer' : 'No hay Tareas aún';

        //listContainer.parentElement.insertBefore(h3Message, listContainer);
        listContainer.before(h3Message);
    }


    //  ----------------------------
    const addEvents = (element) => {

        element.addEventListener('dblclick', () => {
            
            alert('Eliminando Elemento');
            //element.parentElement.removeChild(element);
            element.remove();
            
            message();
        });
    }

    
    //  -----------------------------------------------------
    //  ----------  Llamada a Funciones y Eventos  ----------
    //  -----------------------------------------------------

    message();
    
    form.addEventListener('submit', handleSubmit);


    //  -----  beforebegin -----
    //  -----  El HTML se inserta antes del elemento de referencia, como hermano anterior  -----
    const wrapper2 = document.querySelector('.wrapper2');
    wrapper2.insertAdjacentHTML('beforebegin', `
        <h4> insertAdjacentHTM - beforebegin </h4>    
        <button> Dame Click!!! </button>
    `);


    //  -----  afterbegin -----
    //  -----  El HTML se inserta como primer hijo del elemento.  -----
    wrapper2.insertAdjacentHTML('afterbegin', `
        <h4> insertAdjacentHTM - afterbegin </h4>    
        <button> Dame Click!!! </button>
    `);

    //  -----  beforeend -----
    //  -----  El HTML se inserta como último hijo del elemento.  -----
    wrapper2.insertAdjacentHTML('beforeend', `
        <h4> insertAdjacentHTM - beforeend </h4>    
        <button> Dame Click!!! </button>
    `);

    //  -----  afterend -----
    //  -----  El HTML se inserta después del elemento de referencia, como hermano siguiente  -----
    wrapper2.insertAdjacentHTML('afterend', `
        <h4> insertAdjacentHTM - afterend </h4>    
        <button> Dame Click!!! </button>
    `);

    //  -----  cloneNode = true, clona el nodo y sus hijos  -----
    //  -----  cloneNode = false, clona el nodo solamente  -----
    const copyWrapper2 = wrapper2.cloneNode(true);
    wrapper2.after(copyWrapper2);

    
    console.log('\n\n\n\n\n')

});
