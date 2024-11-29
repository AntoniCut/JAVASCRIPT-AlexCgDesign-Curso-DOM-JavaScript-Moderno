//  *********************************************  
//  **********  /04-estilos/04-app.js  **********  
//  *********************************************  



//  **********  4. Estilos  **********

document.addEventListener('DOMContentLoaded', () => {


    console.warn('**********  04-estilos  **********');
    console.log('\n\n');


    const title = document.querySelector('.title');
    const inputColor = document.querySelector('[type="color"]');
    const inputRange = document.querySelector('[type="range"]');

    title.style.fontFamily = "cursive";

    const estilosTitle = getComputedStyle(title, '::after');
    console.log(estilosTitle.getPropertyValue('margin'));


    inputColor.addEventListener('change', function (e) {
        
        const newColor = e.target.value;
        title.style.color = newColor;
    });


    inputRange.addEventListener('change', function (e) {
        
        const newFontSize = e.target.value;
        title.style.setProperty('font-size', newFontSize + 'px', 'important');

        console.log(title.style.getPropertyPriority('font-family'));
        console.log(title.style.getPropertyPriority('font-size'));

    });


    //  -----  getComputedStyle()  -----
    console.log('getComputedStyle() background de title => \n', getComputedStyle(title).background);
    console.log('getComputedStyle() de title ::after => ', getComputedStyle(title, '::after'));


    console.log('\n\n\n\n\n')

});
