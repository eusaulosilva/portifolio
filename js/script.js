
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Opcional: remova o comentário abaixo se quiser que 
            // a animação aconteça toda vez que subir/descer
            // entry.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.1 // Ativa quando 10% do elemento aparece
});

// Seleciona todos os elementos com a classe hidden
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


document.getElementById('formContato').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    // 1. Pega os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // 2. Configure seu número (Formato: 55 + DDD + Numero)
    // Exemplo: 5561988887777 (sem espaços, parênteses ou traços)
    const meuNumero = "5561998340336";

    // 3. Formata a mensagem com quebras de linha e negrito
    const textoFormatado = `*Novo contato do Portfólio*%0A%0A` +
        `*Nome:* ${nome}%0A` +
        `*E-mail:* ${email}%0A` +
        `*Mensagem:* ${mensagem}`;

    // 4. Cria o link da API do WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${meuNumero}&text=${textoFormatado}`;

    // 5. Abre em uma nova aba
    window.open(url, '_blank');
});