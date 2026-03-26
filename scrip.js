function adicionarTarefa() {
  const input = document.getElementById("tarefaInput");
  const lista = document.getElementById("lista");

  if (!input.value) return;

  const item = document.createElement("li");
  item.textContent = input.value;

  lista.appendChild(item);

  input.value = "";
}