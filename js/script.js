
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




// Fechar ao clicar em um link (útil para sites de uma página só / anchors)
document.addEventListener('DOMContentLoaded', function () {
    const menuDropdown = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');

    const closeMenu = () => {
        // Verifica se o menu está aberto (Bootstrap usa a classe 'show')
        if (menuDropdown.classList.contains('show')) {
            if (window.bootstrap && bootstrap.Collapse) {
                // Tenta recuperar a instância existente para evitar conflitos
                let instance = bootstrap.Collapse.getInstance(menuDropdown);
                if (!instance) {
                    instance = new bootstrap.Collapse(menuDropdown, { toggle: false });
                }
                instance.hide();
            } else {
                menuDropdown.classList.remove('show');
            }
        }
    };

    // 1. Fecha ao clicar fora (ou tocar fora)
    document.addEventListener('pointerdown', function (e) {
        const isClickInside = menuDropdown.contains(e.target);
        const isToggler = toggler && toggler.contains(e.target);

        if (!isClickInside && !isToggler) {
            closeMenu();
        }
    });

    // 2. Fecha ao clicar em um link interno
    const links = menuDropdown.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Pequeno delay para garantir que a navegação comece antes do menu sumir
            setTimeout(closeMenu, 150);
        });
    });
});