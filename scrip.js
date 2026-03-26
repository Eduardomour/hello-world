function login() {
  const user = document.getElementById("usuario").value;
  const pass = document.getElementById("senha").value;

  const erro = document.getElementById("erro");

  // usuário fake (simulação)
  if (user === "admin" && pass === "1234") {
    localStorage.setItem("logado", "true");
    window.location.href = "home.html";
  } else {
    erro.textContent = "Usuário ou senha inválidos!";
  }
}