
const elements = {
  inputEmail: document.getElementById('input-email'),
  inputSenha: document.getElementById('input-senha'),
  formLogin: document.getElementById('form-login'),
  emailError: document.getElementById('email-error'),
  senhaError: document.getElementById('senha-error'),
}


function showEmailError(msg) {
  elements.emailError.textContent = msg;
}


function showSenhaError(msg) {
  elements.senhaError.textContent = msg;
}




elements.formLogin.addEventListener('submit', function (event) {

  let emailLength = elements.inputEmail.value.length
  let senhaLength = elements.inputSenha.value.length

  showEmailError('');
  //emailError.textContent = "";
  showSenhaError('');
  //senhaError.textContent = "";

  if (!emailLength) {
    showEmailError('Email obrigatorio')
    //emailError.innerHTML = 'Email obrigatorio'; 
    event.preventDefault();
  }
  if (!senhaLength) {
    showSenhaError('Senha obrigatoria')
    //senhaError.innerHTML = 'Senha obrigatoria';
    event.preventDefault();
  }

})
