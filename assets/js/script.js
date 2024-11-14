document.addEventListener("DOMContentLoaded", () => {
    // Elementos principais
    const menuToggle = document.querySelector('.menu-toggle'); // Botão do menu hamburguer
    const menu = document.querySelector('.menu'); // Menu principal
    const menuLinks = document.querySelectorAll('.menu li a');
    const testimonialContainer = document.getElementById('testimonial-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const subscribeForm = document.querySelector('.subscribe-form');
    const contactPopup = document.querySelector('.contact-popup');
    const closePopup = document.querySelector('.close-popup');
    const contactForm = document.querySelector('.contact-form');
    const contactButton = document.querySelector('.contact-button');
    const mainContent = document.querySelector('.main-content');
    const ctaContactButton = document.querySelector('.cta-contact');
    const saibaMaisButton = document.querySelector('.cta-button[href="#servicos"]');

    // Scroll suave para o botão "Saiba Mais"
    if (saibaMaisButton) {
        saibaMaisButton.addEventListener('click', (event) => {
            event.preventDefault();
            const targetSection = document.querySelector('#servicos');
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Toggle do menu no mobile
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }

    // Scroll suave ao clicar nos itens do menu
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
                if (menu.classList.contains('active')) {
                    menu.classList.remove('active');
                }
            }
        });
    });

    // Configuração para a rolagem do carrossel de depoimentos
    if (testimonialContainer && prevBtn && nextBtn) {
        const scrollStep = 350; // Valor fixo para cada rolagem

        // Botão de navegação para o próximo
        nextBtn.addEventListener('click', () => {
            testimonialContainer.scrollBy({
                left: scrollStep,
                behavior: 'smooth'
            });
        });

        // Botão de navegação para o anterior
        prevBtn.addEventListener('click', () => {
            testimonialContainer.scrollBy({
                left: -scrollStep,
                behavior: 'smooth'
            });
        });

        // Suporte para deslizar com toque em dispositivos móveis
        let startX;
        testimonialContainer.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        testimonialContainer.addEventListener('touchmove', (e) => {
            const moveDiff = startX - e.touches[0].clientX;
            if (Math.abs(moveDiff) > 50) {
                testimonialContainer.scrollBy({
                    left: moveDiff,
                    behavior: 'smooth'
                });
                startX = e.touches[0].clientX;
            }
        });
    }

    // Pop-up de contato
    const openContactPopup = (e) => {
        e.preventDefault();
        if (contactPopup) {
            contactPopup.classList.add('active');
            mainContent.classList.add('blur-active');
        }
    };
    if (contactButton) contactButton.addEventListener('click', openContactPopup);
    if (ctaContactButton) ctaContactButton.addEventListener('click', openContactPopup);

    if (closePopup) {
        closePopup.addEventListener('click', () => {
            contactPopup.classList.remove('active');
            mainContent.classList.remove('blur-active');
        });
    }
    if (contactPopup) {
        contactPopup.addEventListener('click', (e) => {
            if (e.target === contactPopup) {
                contactPopup.classList.remove('active');
                mainContent.classList.remove('blur-active');
            }
        });
    }

    // Enviar informações do formulário de contato via e-mail
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            if (name && phone && service) {
                const mailtoLink = `mailto:info@uzzo.solutions?subject=Contato%20Uzzo%20Solutions&body=Nome:%20${encodeURIComponent(name)}%0ATelefone:%20${encodeURIComponent(phone)}%0AServi%C3%A7o%20desejado:%20${encodeURIComponent(service)}`;
                window.location.href = mailtoLink;
            } else {
                alert('Por favor, preencha todos os campos.');
            }
        });
    }

    // Inscrição da newsletter
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = subscribeForm.querySelector('input[type="email"]');
            const email = emailInput.value;
            if (email) {
                const mailtoLink = `mailto:info@uzzo.solutions?subject=Assinatura%20de%20Newsletter&body=Eu%20aceito%20receber%20ofertas%20e%20not%C3%ADcias.%0AEmail:%20${encodeURIComponent(email)}`;
                window.location.href = mailtoLink;
            } else {
                alert('Por favor, insira um endereço de e-mail válido.');
            }
        });
    }

    // Atualizar links das redes sociais
    const instagramLink = document.querySelector(".social-icons a[href*='instagram']");
    const linkedinLink = document.querySelector(".social-icons a[href*='linkedin']");
    const discordLink = document.querySelector(".social-icons a[href*='discord']");
    if (instagramLink) instagramLink.href = "https://www.instagram.com/uzzosolutions/";
    if (linkedinLink) linkedinLink.href = "https://www.linkedin.com/company/uzzo-solutions/";
    if (discordLink) discordLink.href = "https://discord.gg/EFgNAVYD4q";
});
