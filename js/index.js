function clicar(){
var nome = document.getElementById("name")
var email = document.getElementById('email')
var txt = document.getElementById("text-body")
var txtname = document.getElementById("pname")
var txtemail = document.getElementById('pemail')

if (nome.value == ""){
    txtname.hidden = false
}else{
    txtname.hidden = true
}

if (email.value == ""){
    txtemail.hidden = false
}else{
    txtemail.hidden = true
}

if(txt.value == ""){
    alert("Digite sua mensagem")
}else{
    alert ("Mensagem enviada com sucesso")
    // location.reload()
}

}

function nightwindow(){
    const body = document.getElementsByTagName('body')
    const night = document.getElementById('nightmode')
    const formulario = document.getElementById("formulario")

    if (night.checked === true) {
        document.body.style.backgroundColor = "#FFF"
        formulario.style.backgroundColor = "#ccc"
        document.body.style.color = "#000"
    }else{
        document.body.style.backgroundColor = "#333"
        formulario.style.backgroundColor = "#555"
        document.body.style.color = "#fff"
    }
}