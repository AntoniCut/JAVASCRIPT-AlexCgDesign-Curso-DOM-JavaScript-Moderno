//  *************************************************  
//  **********  /01-traversing/01-app.css  **********  
//  *************************************************  



//  **********  1. Traversing  **********

console.warn('**********  01-Traversing  **********');
console.log('\n\n');


const html = document.documentElement;
console.log('HTML', html);

const docType = document.doctype;
console.log('docType', docType);

const head = document.head;
console.log('head', head);

const body = document.body
console.log('body', body);


//  *****  childNodes  *****
console.log('\n\n');
console.warn('-----  childNodes  -----');
console.log('\n');

{

    const childBody = document.body.childNodes;
    console.log('childBody', childBody);

    const wrapper = document.body.childNodes[1];
    console.log('wrapper', wrapper);

    const childWrapper = wrapper.childNodes;
    console.log('childWrapper', childWrapper);
}



//  *****  children, firstChild, lastChild, firstlementChild, lastElementChild, elementChild  *****
console.log('\n\n');
console.warn('-----  children, firstChild, lastChild, firstlementChild, lastElementChild, elementChild  -----');
//console.log('\n');

console.warn(`
    
    <body>
    
    <div class="wrapper" id="wrapper">

        <h1 class="title">DOM (Document Object Model)</h1>

        <div>

            <a href="https://google.com" class="link bold">Primer Hijo</a>
            <a href="#" class="link">Segundo Hijo</a>
            <a href="#" class="link">Tercer Hijo</a>

        </div>

        <a href="#" class="link">Cuarto Hijo</a>

        <form>

            <label for="telephone">Telefono</label>
            <input type="number" id="telephone" name="telefono">

        </form>

    </div>

    <!-- Soy un comentario en el DOM -->

    <script src="./01-app.js"></script>
</body>

`);


{
    //  -----  children  -----
    const childBody = document.body.children;
    console.log({childBody});

    const firstChildBody = document.body.children[0];
    console.log({firstChildBody});

    const lastChildBody = document.body.children[ body.children.length - 1];
    console.log({lastChildBody});
    

    //  -----  firstChild  -----
    const bodyFirstChild = document.body.firstChild;
    console.log({bodyFirstChild});
    
    //  -----  firstElementChind  -----
    const bodyFirstElementChild = document.body.firstElementChild;
    console.log({bodyFirstElementChild});

    //  -----  lastChild  -----
    const bodyLastChild = document.body.lastChild;
    console.log({bodyLastChild});
    
    //  -----  lastElementChind  -----
    const bodyLastElementChild = document.body.lastElementChild;
    console.log({bodyLastElementChild});

    //  -----  hasChildNodes()  -----
    const wrapper = document.body.firstElementChild;
    console.log({wrapper});
    const wrapperHasChilNodes =  wrapper.hasChildNodes();
    console.log({wrapperHasChilNodes});
}



//  *****  nextElementSibling, previousElemntSibling, parentElement  *****
console.log('\n\n');
console.warn('-----  nextElementSibling, previousElemntSibling, parentElement  -----');
//console.log('\n');

console.warn(`
    
    <body>
    
    <div class="wrapper" id="wrapper">

        <h1 class="title">DOM (Document Object Model)</h1>

        <div>

            <a href="https://google.com" class="link bold">Primer Hijo</a>
            <a href="#" class="link">Segundo Hijo</a>
            <a href="#" class="link">Tercer Hijo</a>

        </div>

        <a href="#" class="link">Cuarto Hijo</a>

        <form>

            <label for="telephone">Telefono</label>
            <input type="number" id="telephone" name="telefono">

        </form>

    </div>

    <!-- Soy un comentario en el DOM -->

    <script src="./01-app.js"></script>
</body>

`);


{
     const wrapper = document.body.firstElementChild;
     console.log('\n')
     console.warn({wrapper});
     
     const nodes = wrapper.childNodes;
     console.log({nodes});

     const children = wrapper.children;
     console.log({children});

     firstChildren = document.body.firstElementChild.firstElementChild;
     console.log({firstChildren});

     //  -----  nextSibling  -----
     nextSibling = firstChildren.nextSibling;
     console.log({nextSibling});

     //  -----  nextElementSibling  -----
     nextElementSibling = firstChildren.nextElementSibling;
     console.log({nextElementSibling});

     //  -----  previousSibling  -----
     previousSibling = nextSibling.previousSibling;
     console.log({previousSibling});

     //  -----  previousElementSibling  -----
     previousElementSibling = nextSibling.previousElementSibling;
     console.log({previousElementSibling});


     //  ----------
     const h1 = wrapper.firstElementChild;
     console.log({h1})
     console.log('h1.textContent', h1.textContent = 'Estoy siendo modificado desde el DOM');

     const anchor2 = h1.nextElementSibling.firstElementChild.nextElementSibling;
     console.log({anchor2})
     
     //  -----  parentElement  -----
     anchor2.addEventListener('click', () => {
        
        h1.textContent = 'Estoy siendo otra vez modificado por el DOM';
        const wrapper = h1.parentElement;
        wrapper.style.color = '#fff';
        wrapper.style.backgroundColor = '#000';
     });

     const body = anchor2.parentElement.parentElement.parentElement;
     console.log({body});

}


console.log('\n\n\n\n\n')


/*
const wrapper = document.querySelector('#wrapper');
const title = document.querySelector('.title');
const link = document.querySelector('.link.bold');
const inputNumber = document.querySelector('[type="number"]');

const img = document.querySelector('[data-identificador="img"]');
const figcaption = document.querySelector('figcaption');

img.src = "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg";

figcaption.textContent = img.dataset.textoMostrar;
*/