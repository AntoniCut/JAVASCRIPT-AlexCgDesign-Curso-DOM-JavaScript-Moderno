//  *************************************************  
//  **********  /01-traversing/01-app.css  **********  
//  *************************************************  



//  **********  1. Traversing  **********

console.warn('**********  01-Traversing - Parte 1  **********');
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
    console.log({ childBody });

    const firstChildBody = document.body.children[0];
    console.log({ firstChildBody });

    const lastChildBody = document.body.children[body.children.length - 1];
    console.log({ lastChildBody });


    //  -----  firstChild  -----
    const bodyFirstChild = document.body.firstChild;
    console.log({ bodyFirstChild });

    //  -----  firstElementChind  -----
    const bodyFirstElementChild = document.body.firstElementChild;
    console.log({ bodyFirstElementChild });

    //  -----  lastChild  -----
    const bodyLastChild = document.body.lastChild;
    console.log({ bodyLastChild });

    //  -----  lastElementChind  -----
    const bodyLastElementChild = document.body.lastElementChild;
    console.log({ bodyLastElementChild });

    //  -----  hasChildNodes()  -----
    const wrapper = document.body.firstElementChild;
    console.log({ wrapper });
    const wrapperHasChilNodes = wrapper.hasChildNodes();
    console.log({ wrapperHasChilNodes });
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
    console.warn({ wrapper });

    const nodes = wrapper.childNodes;
    console.log({ nodes });

    const children = wrapper.children;
    console.log({ children });

    firstChildren = document.body.firstElementChild.firstElementChild;
    console.log({ firstChildren });

    //  -----  nextSibling  -----
    nextSibling = firstChildren.nextSibling;
    console.log({ nextSibling });

    //  -----  nextElementSibling  -----
    nextElementSibling = firstChildren.nextElementSibling;
    console.log({ nextElementSibling });

    //  -----  previousSibling  -----
    previousSibling = nextSibling.previousSibling;
    console.log({ previousSibling });

    //  -----  previousElementSibling  -----
    previousElementSibling = nextSibling.previousElementSibling;
    console.log({ previousElementSibling });


    //  ----------
    const h1 = wrapper.firstElementChild;
    console.log({ h1 })
    console.log('h1.textContent', h1.textContent = 'Estoy siendo modificado desde el DOM');

    const anchor2 = h1.nextElementSibling.firstElementChild.nextElementSibling;
    console.log({ anchor2 })

    //  -----  parentElement  -----
    anchor2.addEventListener('click', () => {

        h1.textContent = 'Estoy siendo otra vez modificado por el DOM';
        const wrapper = h1.parentElement;
        wrapper.style.color = '#fff';
        wrapper.style.backgroundColor = '#000';
    });

    const body = anchor2.parentElement.parentElement.parentElement;
    console.log({ body });

}



//  *****  getElementById(), getElementsByClassName(), getElementsByTagName()  *****
console.log('\n\n');
console.warn('-----  getElementById(), getElementsByClassName(), getElementsByTagName()  -----');
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

    //  -----  getElementById()  -----
    const wrapperById = document.getElementById('wrapper');
    console.log({wrapperById});

    //  -----  getElementsByClassName()  -----
    //  -----  Devuelve una Coleccion HTML  -----
    const wrapperByClass = document.getElementsByClassName('wrapper');
    console.log({wrapperByClass});

    const link1 = document.getElementsByClassName('link');
    console.log({link1});

    const link2 = wrapperById.getElementsByClassName('link');
    console.log({link2});

    //  -----  getElementsByTagName()  -----
    const divs = document.getElementsByTagName('div')
    console.log({divs});

    //  -----  getElementsByName()  -----
    //  -----  Retorna una lista de nodos, solo se utiliza con document  -----
    const telefono = document.getElementsByName('telefono');
    console.log({telefono});
}



//  *****  querySelector(), querySelectorAll()  *****
console.log('\n\n');
console.warn('-----  querySelector(), querySelectorAll()  -----');
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

    //  -----  querySelector()  -----
    const wrapperQuerySelectorId = document.querySelector('#wrapper');
    console.log({wrapperQuerySelectorId});

    const wrapperQuerySelectorClass1 = document.querySelector('.wrapper');
    console.log({wrapperQuerySelectorClass1});

    const wrapperQuerySelectorClass2 = document.querySelector('[class="wrapper"]');
    console.log({wrapperQuerySelectorClass2});

    const primerDiv = document.querySelector('div');
    console.log({primerDiv});

    const wrapper = document.querySelector('#wrapper');
    const linkBold = wrapper.querySelector('.link.bold');
    console.log({linkBold});

    const lastLink = wrapper.querySelector('.link:last-of-type');
    console.log('lastLink => ', lastLink);

    //  -----  querySelectorAll()  -----
    //  -----  Devuelve una lista de nodos  -----
    const links = document.querySelectorAll('.link');
    console.log('links => ', links);


}




//  *****  NodeList y HTMLCollection  *****
console.log('\n\n');
console.warn('-----  NodeList y HTMLCollection  -----');
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

    //  -----  NodeList  -----
    //  -----  Devuelve una lista de nodos  -----
    //  -----  No se Actualiza aunque el DOM cambie  -----
    const nodeLinks = document.querySelectorAll('.link');
    console.log('nodeLinks => ', nodeLinks);

    console.log('nodeLinks - forEach => ');
    nodeLinks.forEach( link => {
        console.log(link);
    });

    //  -----  HTMLCollection  -----
    //  -----  Devuelve una Colección de HTML  -----
    //  -----  Se Actualiza aunque el DOM cambie  -----
    //  -----  No se puede utilizar el foreach  -----
    const htmlLinks = document.getElementsByClassName('link');
    console.log('htmlLinks => ', htmlLinks);

    const tagAnchor = document.createElement('a');
    tagAnchor.setAttribute('class', 'link');
    tagAnchor.textContent = 'Hola Mundo';
    document.body.append(tagAnchor);

    console.log( 'htmlLinks items => ');
    console.log( htmlLinks.item(0) );
    console.log( htmlLinks.item(1) );
    console.log( htmlLinks.item(2) );
    console.log( htmlLinks.item(3) );
    console.log( htmlLinks.item(4) );
    console.log( htmlLinks.item(5) );
    console.log( htmlLinks.item(6) );   //  item 6 no existe = null

    //  -----  Convertimos la lista de nodos en un array  -----
    nodeLinksArray = Array.from(nodeLinks);
    console.log('nodeLinkArray => ', nodeLinksArray);

    console.log('nodeLinksArray - forEach => ');
    nodeLinksArray.forEach( link => {
        console.log(link);
    });

    //  -----  childNodes  -----
    //  -----  Retorna una lista de nodos y si se actualiza, es la exepción  -----
}

console.log('\n\n\n\n\n')
