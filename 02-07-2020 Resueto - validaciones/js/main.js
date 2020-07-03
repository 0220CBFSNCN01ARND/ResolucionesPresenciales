//Forma 2
window.addEventListener("load", () => {
    let form = document.querySelector("form");
    let errorSec = document.querySelector("#errors");
    const inputs = document.querySelectorAll(".form-control");

    form.addEventListener("submit", (e) => {
        let errors = [];
        let password = document.querySelector("#password");
        let rePassword = document.querySelector("#rePassword");
        let phone = document.querySelector("#phone");

        for (let index = 0; index < inputs.length; index++) {
            const input = form.querySelector("#" + inputs[index].id);

            if (input.value.trim() == "") {
                input.classList.add("is-invalid");
                errors.push(`El ${input.name} es obligatorio`);
            }

            const minL = input.getAttribute("minlength");
            //Como todo GENIO, me olvide comparar con (input.value.length) (facepalm)  -_-
            if (minL && input.value.length < Number(minL)) {
                input.classList.add("is-invalid");
                errors.push(
                    `El ${input.name} debe tener una longitud minima de ${minL}`
                );
            }
            //Listo la forma generica para los tipos numericos XD
            if (input.type == "number" && isNaN(input.value)) {
                input.classList.add("is-invalid");
                errors.push(`El ${input.name} debe ser un numero`);
            }
        }

        if (password.value.trim() != rePassword.value.trim()) {
            password.classList.add("is-invalid");
            errors.push("Las contrase­ñas deben ser iguales");
        }

        if (errors.length != 0) {
            e.preventDefault();

            errors.forEach((error) => {
                errorSec.innerHTML += "<li>" + error + "</li>";
            });
        }
    });
});

//Forma 1
// window.addEventListener("load", () => {
//     let form = document.querySelector("form");
//     let errorSec = document.querySelector("#errors");
//     let fullName = document.querySelector("#fullName");
//     let email = document.querySelector("#email");
//     let phone = document.querySelector("#phone");
//     let password = document.querySelector("#password");
//     let rePassword = document.querySelector("#rePassword");
//     let country = document.querySelector("#country");

//     form.addEventListener("submit", (e) => {
//         let errors = [];

//         if (fullName.value.trim() == "") {
//             fullName.classList.add("is-invalid");
//             errors.push("El nombre es obligatorio");
//         }
//         if (email.value.trim() == "" || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
//             email.classList.add("is-invalid");
//             errors.push("El correo es obligatorio");
//         }
//         if (phone.value.trim() == "" || isNaN(document.querySelector("#phone").value)) {
//             phone.classList.add("is-invalid");
//             errors.push("El telefono es obligatorio");
//         }
//         if (password.value.trim() == "" || password.value.length < 4) {
//             password.classList.add("is-invalid");
//             errors.push("La contraseña es obligatoria con mas de 4 caracteres");
//         }
//         if (rePassword.value.trim() == "" || rePassword.value.length < 4) {
//             rePassword.classList.add("is-invalid");
//             errors.push("Debe repetir la contraseña con mas de 4 caracteres");
//         }
//         if (password.value.trim() != rePassword.value.trim()) {
//             password.classList.add("is-invalid");
//             errors.push("Las contrase­ñas deben ser iguales");
//         }
//         if (country.selectedIndex == 0) {
//             country.classList.add("is-invalid");
//             errors.push("Debe seleccionar un pais");
//         }
//         if (errors.length != 0) {
//             e.preventDefault();

//             errors.forEach(error => {
//                 errorSec.innerHTML += "<li>" + error + "</li>";
//             })
//         }
//     })
// });