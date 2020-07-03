// 1
window.onload = function(){
    // 2
    // alert('hola');
    // 3
    let btnAbracadabra =  document.getElementById('abracadabra');
    //3.a
    btnAbracadabra.onclick = () => {
        //3.b
        let nombre = prompt('Cuál es tu nombre');
        //3.c
        let nombreTitular = document.querySelector('#titular strong');
        nombreTitular.innerText = nombre;
    }
    //4 
    let touch = document.getElementById('btnContact');
    touch.ondblclick = (e) => {
        e.preventDefault();
        let p = document.querySelector('.parrafo-color');
        // p.style.color = 'red';

        //6
        p.style.color = colorAlAzar();
    }
    //5
    function colorAlAzar(){
        let colores = ['red','yellow','green','orange','pink'];
        return colores[Math.ceil(Math.random()*5)]
    }
    // console.log(colorAlAzar());
    let stuffs = document.querySelectorAll('.stuffs');
    stuffs.forEach(stuff => {
        // 7        
        stuff.onclick = (e) => {
            e.preventDefault();
            //7.a
            let h3 = stuff.querySelector('h3')
            //7.b 
            alert(h3.innerText);
        }
    })

    //+++++++++++++
    // 2DA PARTE
    //+++++++++++++

    //1
    let btnPortfolio = document.getElementById('btnPortfolio');
    let textoPortfolio = document.getElementById('textoPorfolio');
    btnPortfolio.onmouseover = () => textoPortfolio.style.color = colorAlAzar();
    btnPortfolio.onmouseout = () => textoPortfolio.style.color = '#888';

    //2
    let lechuza = document.getElementById('lechuza')
    //2.a
    lechuza.onclick = () => {
        alert('Preparate para el futuro…')
         //2.b
        setTimeout(function () {
            alert('Y el futuro ya llegó!');
        }, 5000)
    };
   
    let estadoSecreto = 0;
    //3 
    window.addEventListener("keypress", function (event) {
        console.log('Ey, tocaste el teclado!');
        // 4        
        // if  (event.key == " ") console.log('Ey, tocaste la barra!');
        
       
        // 6
        
        // 0 significa que todavía no escribió nada
        // 1 significa que escribió “s”
        // 2 significa que escribió “se”
        // 3 significa que escribió “sec”
        // 4 significa que escribió “secr”
        // 5 significa que escribió “secre”
        // 6 significa que escribió “secret”
        switch (estadoSecreto) {
            case 0:
                (event.key == "s") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 1:
                (event.key == "e") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 2:
                (event.key == "c") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 3:
                (event.key == "r") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 4:
                (event.key == "e") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 5:
                (event.key == "t") ? estadoSecreto++ : estadoSecreto = 0
                break;
            case 6:
                if (event.key == "o") {
                    
                    alert('SECRETO MAGICO');
                    estadoSecreto = 0;
                    
                }
                break;
        }
    
    });

    //5
    let email = document.getElementById('email');
    email.onkeypress = (event) => {
        if (event.key == " ") console.log('Un correo no puede tener espacios!');
    }
    
}