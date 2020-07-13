function validarEmail(email) {
    fetch("http://localhost:3000/users/getemails/" + email.value)
        .then((resp) => {
            return resp.text();
        })
        .then((resp) => {
            alert(resp);
        });
}