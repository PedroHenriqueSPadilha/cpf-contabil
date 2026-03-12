const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    formMessage.textContent = "Preencha os campos obrigatórios.";
    formMessage.style.color = "#fca5a5";
    return;
  }

  formMessage.textContent = "Mensagem enviada com sucesso.";
  formMessage.style.color = "#86efac";

  form.reset();
});