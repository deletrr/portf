document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    // 1. Função para atualizar o ícone do botão de tema
    const updateIcon = () => {
        if (body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    };

    // 2. Verifica se o usuário já tem uma preferência salva de tema
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateIcon();
    }

    // 3. Evento de clique para trocar o tema
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
        updateIcon();
    });

    // 4. Saudação Automática
    const greeting = document.getElementById('greeting');
    const hours = new Date().getHours();
    if (hours < 12) greeting.innerText = 'Bom dia';
    else if (hours < 18) greeting.innerText = 'Boa tarde';
    else greeting.innerText = 'Boa noite';

    // 5. Lógica de Filtro (Projeto Integrador vs Início)
    const btnInicio = document.getElementById('btn-inicio');
    const btnPi = document.getElementById('btn-pi');
    const cards = document.querySelectorAll('.card');

    // Quando clica em "Projeto Integrador"
    btnPi.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        btnInicio.classList.remove('active');
        btnPi.classList.add('active');

        cards.forEach(card => {
            const title = card.querySelector('.card-text h3').innerText;
            if (title.trim().toUpperCase().startsWith('PI')) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

    // Quando clica em "Início"
    btnInicio.addEventListener('click', (e) => {
        e.preventDefault();
        
        btnPi.classList.remove('active');
        btnInicio.classList.add('active');

        cards.forEach(card => {
            card.classList.remove('hidden');
        });
    });

    // 6. Lógica da Nota (Informações do Projeto virando a carta)
    const infoBtns = document.querySelectorAll('.info-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    infoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); 
            const card = e.target.closest('.card');
            card.classList.add('show-note');
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const card = e.target.closest('.card');
            card.classList.remove('show-note');
        });
    });
});