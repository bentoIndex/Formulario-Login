/* DOM */

const input = document.querySelectorAll('.input-Content');
const label = document.querySelectorAll('label');
const btn = document.querySelector('.submit');

/* Regex Email */

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* Validação Nome */

function validarNome(name) {

  name = input[0].value;

  return name.length < 3;
  
};

/* Validação CPF */

const cpf = input[1].value.split("").map((e) => parseInt(e));

function validarPrimeiroDigito(cpf) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += cpf[i] * (10 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
      return cpf[9] == resto;
    }
    return cpf[9] == 0;
  }
  
  function validarSegundoDigito(cpf) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += cpf[i] * (11 - i);
    }
    const resto = (sum * 10) % 11;
    if (resto < 10) {
      return cpf[10] == resto;
    }
    return cpf[10] == 0;
  }
  
  function validarRepetido(cpf) {
    const primeiro = cpf[0];
    let diferente = false;
    for(let i = 1; i < cpf.length; i++) {
      if(cpf[i] != primeiro) {
        diferente = true;
      }
    }
    return diferente;
  }
  
  function validarCpf(cpf) {
    if (cpf.length != 11) {
      return false;
    }
    if(!validarRepetido(cpf)) {
      return false;
    }
    if (!validarPrimeiroDigito(cpf)) {
      return false;
    }
    if (!validarSegundoDigito(cpf)) {
      return false;
    }
    return true;
  }
  

/* Validar E-mail */

function validarEmail(email) {

  email = input[2].value;

  return !emailRegex.test(email);
 
}


/* Validar Idade */

function validarIdade(dataHoje, dataInput) {

  dataHoje = new Date().getFullYear();

  dataInput = new Date(input[3].value).getFullYear();

  return (dataHoje - dataInput) < 18;
  
}


/* Classe se Erro */

function setError(index) {
  
  input[index].style.border = '2px solid red';
  label[index].style.color = 'red';

}

function setRemove(index) {

  input[index].style.border = '';
  label[index].style.color = '';
  
}



/* Check Form */

btn.addEventListener('click', () => checkForm());

function checkForm(nameValidate, cpfValidate, emailValidate, idadeValidate,) {

  nameValidate = validarNome() ? setError(0) : setRemove(0);

  console.log(nameValidate);

  cpfValidate = validarCpf(cpf) ? setError(1) : setRemove(1);

  console.log(cpfValidate);

  emailValidate = validarEmail() ? setError(2) : setRemove(2);

  console.log(emailValidate);

  idadeValidate = validarIdade() ? setError(3) : setRemove(3);

  console.log(idadeValidate);
  
}



















