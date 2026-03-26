function adicionarTarefa() {
  const input = document.getElementById("tarefaInput");
  const texto = input.value;

  if (texto === "") return;

  const lista = document.getElementById("lista");

  const item = document.createElement("li");
  item.textContent = texto;

  item.onclick = function () {
    item.style.textDecoration = "line-through";
  };

  lista.appendChild(item);

  input.value = "";
}