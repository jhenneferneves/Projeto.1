const form = document.getElementById("form");
const username = document.getElementById("username");
const datadenascimento = document.getElementById("datadenascimento");
const cidade = document.getElementById("cidade");
const servicosprestados = document.getElementById("servicos-prestados");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const datadenascimento = datadenascimento.value;
  const cidadeValue = cidade.value;
  const servicosprestadosConfirmationValue= servicosprestados.value;

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (datadenascimentoValue === "") {
    setErrorFor(datadenascimento, "O datadenascimento é obrigatório.");
  } else if (!checkDatadenascimento(datadenascimentoValue)) {
    setErrorFor(datadenascimento, "Por favor, insira uma datadenasciemento válido.");
  } else {
    setSuccessFor(datadenascimento);
  }

  if (cidadeValue === "") {
    setErrorFor(cidade, "A cidade é obrigatória.");
  } else if (cidadeValue.length < 7) {
    setErrorFor(cidade, "A cidade precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(cidade);
  }

  if (servicosprestadosValue === "") {
    setErrorFor(servicosprestradosConfirmation, "A confirmação de senha é obrigatória.");
  } else if (servicosprestradosConfirmationValue !== servicosprestradosValue) {
  } else {
    setSuccessFor(servicosprestadosConfirmation);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
