const submit = document.querySelector('#submit-button')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const selectPeriodo = document.querySelector('#selectPeriodo')
const selectTamanho = document.querySelector('#selectTamanho')
const containerOptions = document.querySelector('.container-options')
const options = document.querySelectorAll('#li-options')
const smallOption = document.querySelector('#select-Option')
const optionsT = document.querySelectorAll('#li-optionsT')
const smallOptionT = document.querySelector('#select-OptionT')
const selectMenu = document.querySelector('.selectMenu')
const selectMenuLast = document.querySelector('.selectMenu-last')
const form = document.querySelector('form')
const formControl = form.querySelectorAll('.check')


function validForm(){
    const formValid = [...formControl].every(formControl => 
        formControl.classList.contains('success'))
        console.log(formValid)
    
    if(formValid){
        const setFather = submit.parentElement;
        setFather.classList.remove('invalid')
        setFather.classList.add('valid')
        console.log("enviado")
    } else{
        const setFather = submit.parentElement;
        console.log("Não enviado")
        setFather.classList.remove('valid')
        setFather.classList.add('invalid')
    }    
}




submit.addEventListener('click', function(e){
    e.preventDefault();

    console.log("clicado")
    
})

//Open select
selectPeriodo.addEventListener('click', function(){
    selectMenu.classList.toggle("active")

    // Options dos Períodos
    options.forEach(option => {
        option.addEventListener('click', () => {
            let selectOptions = option.querySelector('.option-text').innerText;
            smallOption.innerText = selectOptions;
            selectMenu.classList.remove("active")
    
            if(smallOption.innerText != "Selecione um Período"){
                selectMenu.classList.add('success')
                console.log("deu certo")
            } else {
                selectMenu.classList.remove('success')
                console.log("não deu certo")
            }
            validForm()
        })
    })
})

//Open select
selectTamanho.addEventListener('click', function(){
   selectMenuLast.classList.toggle("active")

   // Options dos Tamanhos
    optionsT.forEach(option => {
        option.addEventListener('click', () => {
            let selectOptions = option.querySelector('.option-text-T').innerText
            smallOptionT.innerText = selectOptions;
            selectMenuLast.classList.remove("active")

            if(smallOptionT.innerText != "Selecione um Tamanho"){
                selectMenuLast.classList.add('success')
                console.log("deu certo")
            } else{
                selectMenuLast.classList.remove('success')
                console.log("Não deu certo")
            }
            validForm()
        })
    })
})


//Validation Name.
inputName.addEventListener('input', function(){
    const setFatherName = inputName.parentElement;
    const nameValue = inputName.value;

    if(nameValue === ""){
        setFatherName.classList.remove('success')
        // console.log("Não deu certo")
    }else if(nameValue.length < 7){
        setFatherName.classList.remove('success')
        // console.log("deu certo")
    } else{
        setFatherName.classList.add('success')
        setSuccess(inputName)
    }

    validForm()
})

inputName.addEventListener('blur', function(){
    const setFather = inputName.parentElement;
    const nameValue = inputName.value;

    
    if(nameValue.length < 7){
        setError(inputName, "Insira seu nome completo")
        setFather.classList.remove('success')
    } else{
        setSuccess(inputName)
        setFather.classList.add('success')
    }

     if(nameValue === ""){
        setFather.classList.remove('success')
        // console.log("Não deu certo")
    } else {
        setFather.classList.add('success')
        // console.log("deu certo")
    }
})


inputEmail.addEventListener('input', function(){
    const setFatherEmail = inputEmail.parentElement;
    if(!checkEmail(inputEmail.value)){
        setError(inputEmail, "E-mail invalido")
        setFatherEmail.classList.remove('success')
    } else{
        setSuccess(inputEmail)
        setFatherEmail.classList.add('success')
    }
    validForm()
})

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}  

// Picture...
const inputPicture = document.querySelector('#img-picture')
const pictureBox = document.querySelector('.img-picture')
inputPicture.addEventListener('change', function(event){
    const inputTarget = event.target;
    const file = inputTarget.files[0]; // Estou pegando o primeiro elemento que entar no input-file.
    

    if(file){
        const reader = new FileReader();// o fileReader vai ler a img que estou atribuindo.

        reader.onload = function(event){
            const readerTarget = event.target
            const img = document.createElement('img')
            img.src = readerTarget.result; // aqui eu to passando reader para o elemento img
            img.classList.add('img-style')
            pictureBox.innerHTML = ""
            pictureBox.appendChild(img)
            
        }

        const setFather = document.querySelector('#label-picture').parentElement;
        setFather.classList.add('success')
        // console.log(setFather)
        // console.log(file)
        reader.readAsDataURL(file)
        validForm()
    } else{
        console.log("não entrou")
    }
})

// Print Error
function setError(input, message){
    const setFather = input.parentElement;
    const textMessage = setFather.querySelector('small');
    const boxError = setFather.querySelector('.box-error')

    boxError.style = "display: flex"
    textMessage.innerText = message;
}

// Print Success
function setSuccess(input){
    const setFather = input.parentElement;
    const boxError = setFather.querySelector('.box-error')
    boxError.style = "display: none"
    setFather.classList.add('success')
}

