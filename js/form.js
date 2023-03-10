const formE1 = document.getElementById('form-api')

formE1.addEventListener('submit', e =>{
    e.preventDefault();

    const formData = new FormData(formE1);
    const data = Object.fromEntries(formData)

    fetch('http://127.0.0.1:8080/api/v1/messages',{
        method: 'POST',
        headers: {'Content-Type': 'application/json',
    },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
})
