
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
