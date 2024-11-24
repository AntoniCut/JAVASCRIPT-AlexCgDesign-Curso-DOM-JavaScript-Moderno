//  *************************************************  
//  **********  /01-traversing/01-app.css  **********  
//  *************************************************  



//  **********  1. Traversing  **********

console.warn('**********  01-Traversing - Parte 2  **********');
console.log('\n\n');


//  *****  className, nodeName, innerHTML, outerHTML, textContent  *****
console.log('\n\n');
console.warn('-----  className, nodeName, innerHTML, outerHTML, textContent  -----');
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

        <script src="./01-app-parte2.js"></script>
</body>

`);


{
    const title = document.querySelector('.title');
    const wrapper = document.querySelector('#wrapper');
    const link = document.querySelector('.link.bold');
    const inputNumber = document.querySelector('[type="number"]');

    console.log('title', title);
    console.log('wrapper', wrapper);
    console.log('link', link);
    console.log('inputNumber', inputNumber);
    console.log('\n');

    //  -----  console.dir()  --  muestra las proiedades de un objeto  -----
    console.dir(title);
    console.dir(wrapper);
    console.dir(link);
    console.dir(inputNumber);
    
    //  -----  className  -----
    console.log('\n');
    console.log('title clasName => ', title.className);
    console.log('wrapper className => ', wrapper.className);
    console.log('link className => ', link.className);
    console.log('inputNumber className => ', inputNumber.className);
    console.log('\n');

    //  -----  className = 'nombreClase' = sobreescribe las clases que tenga por nombreClase  -----

    //  -----  nodeName  --  retorna el nombre del nodo  -----
    console.log('title nodeName => ', title.nodeName)
    console.log('wrapper nodeName =>', wrapper.nodeName);
    console.log('link nodeName => ', link.nodeName);
    console.log('inputNumber nodeName => ', inputNumber.nodeName);
    console.log('\n');

    console.log('wrapper.chilNodes[0].nodeName =>', wrapper.childNodes[0].nodeName);
    console.log('wrapper.chilNodes[1].nodeName =>', wrapper.childNodes[1].nodeName);

    //  -----  textContent  -----
    const nombreUsuario = prompt('¿Como te llamas??');
    title.textContent = `Hola, Bienvenido ${nombreUsuario}`;
   
    //  -----  innerHTML  --  retorna el html del elemento  -----
    wrapper.innerHTML;
    console.log('wrapper.innerHTML =>', wrapper.innerHTML);

    wrapper.innerHTML += `<h2> he añadido un h2 al DOM </h2>`;
    wrapper.innerHTML += `<img src="error" onerror="alert('te han hackeado!!!')">`;


    //  -----  outerHTML  --  retorna el html del elemento  -----
    wrapper.outerHTML += '<h1> Nuevo HTML utilizando outerHTML!!! </h1>';
    console.log('wrapper.outerHTML =>', wrapper.outerHTML);
}


console.log('\n\n\n\n\n')
