alert('Bienvenidos a mi sitio.')

//Global
var msg;

var res = confirm("Estas seguro de avanzar?");

if (res == true) {
    msg = `Qué alegría que quieras con tu visita
     por este maravilloso sitio.`;

    var nombre = prompt("Ingrese su nombre:");

    if (name) {
        document.querySelector('#bienvenida').innerText =
            `Bienvenido ${name}`
    }

    var edad = Number(prompt("Ingresa tu edad:"));

    if (edad < 18) {
        document.querySelector('.container-general').style.display = 'none'
        document.querySelector('#accesoDenegado').style.display = 'block'
    } else {
        var hobbies = prompt("Ingresa sus hobbies:").toLowerCase();

        if (hobbies.indexOf('programación') > -1 ||
            hobbies.indexOf('programacion') > -1 ||
            hobbies.indexOf('programar') > -1) {
            alert("Qué bueno que te guste la programación.")
            document.querySelector('.background-img').style.backgroundImage = "url('img/programmer.jpeg')"
        } else {
            alert("Qué lástima que no te guste la programación")
            document.querySelector('.background-img').style.backgroundImage = "url('img/gatito.jpeg')"
        }

        let hobbiesArray = hobbies.split(',')
        let HTMLHobbiesOL = '<ol>';
        for (let hobbie in hobbiesArray.slice(0, 3)) {
            HTMLHobbiesOL += `<li>${hobbiesArray[hobbie]}</li>`
        }
        HTMLHobbiesOL += '</ol>';

        document.querySelector('.hobbies').innerHTML = HTMLHobbiesOL
    }



} else {
    msg = `Lamentamos que no quieras continuar tu
     visita por este maravilloso sitio`;
}

document.querySelector('#mensaje').innerText = msg