//  ***********************************************  
//  **********  /05-todo-list/05-app.js  **********  
//  ***********************************************  


/*

- `beforebegin` ← El HTML se inserta antes del elemento de referencia, como hermano anterior.
- `afterbegin`  ← El HTML se inserta como primer hijo del elemento.
- `beforeend`   ← El HTML se inserta como último hijo del elemento.
- `afterend`    ← El HTML se inserta después del elemento de referencia, como hermano siguiente.

*/


//  **********  3. Clases  **********

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
    
    console.log('\n\n\n\n\n')

});
