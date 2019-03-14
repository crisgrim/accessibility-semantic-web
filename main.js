const enroll = () => {
    alert('apuntada')
}




//tabindex

    const button0 = document.querySelector('.button-0');
    const button1 = document.querySelector('.button-1');

    button0.addEventListener('click', function(){
        button1.focus();
    })

    /*
    Lo importante ahora no es entender el código, sino ver cómo funciona:
    Si usáis el tabulador para acceder a los botones el único accesible es el
        "Tabindex0". Al "Tabindex-1" no puedo llegar usando el tabulador.

    En cambio, si presiono enter en el botón "Tabindex0" , me envía el foco al 
    "Tabindex-1". Es un elemento enfocable, pero no accesible mediante teclado. 

    */