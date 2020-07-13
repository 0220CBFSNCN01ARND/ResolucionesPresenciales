//POST
fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'nombre=harold&apellido=reyes'
    })
    .then((response) => { console.log('response =' + Response); return response.text() })
    .then((data) => { console.log('data =' + data) })
    .catch((error) => { console.log(error) })

//GET
fetch('https://httpbin.org/ip')
    .then(resp => { return resp.text() })
    .then(resp => { console.log(JSON.parse(resp)) })