//  **************************************************************  
//  **********  /01-traversing-parte3/01-app-parte3.js  **********  
//  **************************************************************  



//  **********  1. Traversing  **********

console.warn('**********  01-Traversing - Parte 3  **********');
console.log('\n\n');


//  *****  setAttribute(), hasAttribute(), getAttribute(), removeAttribute(), data-*  *****
console.log('\n\n');
console.warn('-----  setAttribute(), hasAttribute(), getAttribute(), removeAttribute(), data-*  -----');
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

        <script src="./01-app-parte3.js"></script>
</body>

`);

{
    const title = document.querySelector('.title');
    const wrapper = document.querySelector('#wrapper');
    const link = document.querySelector('.link.bold');
    const inputNumber = document.querySelector('[type="number"]');

    //  -----  getAttribute()  -----
    console.log('title.getAttribute("class") => ', title.getAttribute('class'));
    console.log('title.id = "encabezado" => ', title.id = 'encabezado');
    console.log('title.src = "https:google.es" => ', title.src = 'https://google.es');

    //  -----  setAttribute()  -----
    title.setAttribute('id', 'cabecera')
    console.log('title.setAttribute("id", "cabecera") => ', title.getAttribute('id'));

    const img = document.querySelector('img');
    //img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg');
    img.src = "https://upload.wikimedia.org/wikipedia/commons/5/52/Spider-Man.jpg";
    img.setAttribute('alt', 'spiderman el hombre araña');
    
    //  -----  hasAttributte()  -----
    console.log('img.hasAttribute("alt")', img.hasAttribute('alt'));

    //  -----  removeAttributte()  -----
    img.removeAttribute('alt');
    console.log('img.removeAttribute("alt") y despues  img.hasAttribute("alt")', img.hasAttribute('alt'));
    console.log('img.attributes => ', img.attributes);
    
    //  -----  data    atributos personalizados  -----
    const figcaption = document.querySelector('figcaption');
    const textoMostrar = img.getAttribute('data-texto-mostrar');
    console.log('textoMostrar => ', textoMostrar);
    figcaption.textContent = textoMostrar;
    

    const imgData = document.querySelector('[data-identificador2="img"]');
    imgData.src = "https://m.media-amazon.com/images/I/71+2s0BFlKL.jpg";
    img.setAttribute('alt', 'spiderman el hombre araña 2');
    
    const figcaption2 = document.querySelector('.figcaption2');
    const textoMostrar2 = imgData.getAttribute('data-texto-mostrar2');
    console.log('textoMostrar2 => ', textoMostrar2);
    figcaption2.textContent = textoMostrar2;
    
    //  -----  dataset  -----
    console.log('img.dataset', img.dataset);
    console.log('imgData.dataset', imgData.dataset);

    figcaption.textContent = img.dataset.textoMostrar
    figcaption2.textContent = imgData.dataset.textoMostrar2

}


console.log('\n\n\n\n\n')
