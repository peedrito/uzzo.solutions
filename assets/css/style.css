/* Estilos Globais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #000;
    color: white;
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
}

/* Estilos Globais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: #000;
    color: white;
}

/* Cabeçalho */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 95%;
    max-width: 78rem;
    height: 4rem;

    position: fixed;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);

    background: rgba(0, 77, 64, 0.6);
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

    border-radius: 1rem;
    z-index: 1000;
}

.logo {
    display: flex;
    align-items: center;
    margin-right: 20px;
}

.logo img {
    width: 100px;
    height: auto;
}

nav {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-grow: 1;
    justify-content: space-between;
}

.menu {
    list-style: none;
    display: flex;
    gap: 20px;
}

.menu li a {
    text-decoration: none;
    color: white;
    font-size: 16px;
    padding: 10px 15px;
    position: relative;
}

.menu li a::after {
    content: '';
    width: 0;
    height: 2px;
    background-color: #00cc99;
    position: absolute;
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease;
}

.menu li a:hover::after {
    width: 100%;
}

/* Botão de Contato */
.contact-button-menu {
    margin-left: auto; /* Empurra o botão para a direita */
    display: flex;
    align-items: center;
}

.contact-button {
    background-color: rgba(0, 242, 195, 1);
    color: black;
    border: none;
    border-radius: 3rem;
    padding: 0.5rem 1.5rem;
    font-weight: bold;
    text-decoration: none;
    transition: background-position 0.5s ease;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.contact-button:hover {
    background-position: 100% 50%;
}

.contact-button::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 20px;
    background: linear-gradient(135deg, rgba(0, 204, 153, 0.4), rgba(0, 133, 111, 0.4));
    z-index: -1;
    transition: opacity 1s ease;
    opacity: 0;
}

.contact-button:hover::before {
    animation: glowLoop 18s linear infinite;
    opacity: 1;
}

@keyframes glowLoop {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Estilo do ícone de menu (hambúrguer) para mobile */
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

/* Responsividade */
@media (max-width: 700px) {
    .menu {
        display: none; /* Oculta o menu padrão no mobile */
    }

    .menu-toggle {
        display: flex; /* Mostra o ícone de menu no mobile */
    }
}

/* Seção Hero */
/* Seção Hero */
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px 40px;
    text-align: center;
    color: #fff;
}

.hero-content h1 {
    margin-top: 50px;
    max-width: 800px;
    font-size: 3.5em;
    font-weight: bold;
    line-height: 1.2;
    color: #fff;
    margin-bottom: 10px;
}

.hero-content h1 span {
    color: #00cc99; /* Cor diferenciada para o texto em destaque */
}

.hero-content p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #b0b0b0;
    max-width: 800px; /* Aumente este valor para expandir o parágrafo */
    width: 100%; /* Permite que o parágrafo ocupe até a largura total disponível */
    margin: 10px auto 30px;
    line-height: 1.5;
    text-align: center;
}

/* Botão de Ação */
.cta-button {
    display: inline-block;
    background-color: #00cc99;
    color: #000000;
    padding: 12px 24px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bolder;
    font-size: 1em;
    transition: background-color 0.3s ease, color 0.3s ease;
    margin-top: 0%;
    text-align: center;
}

.cta-button:hover {
    background-color: #00b589;
    color: #dfdfdf;
}

/* Responsividade */
@media (max-width: 768px) {
    .hero-content h1 {
        font-size: 2.2em;
        line-height: 1.2;
    }

    .hero-content p {
        font-size: 1em;
    }

    .cta-button {
        padding: 10px 20px;
        font-size: 0.8em;
    }
}


/* Seção de Parceiros */
.trusted-companies {
    text-align: center;
    padding: 50px 0;
    background-color: #000;
    color: white;
}

.trusted-title {
    font-size: 1em;
    opacity: 0.7;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.carousel {
    overflow: hidden;
    max-width: 100%;
    position: relative;
    padding: 10px 0;
}

.carousel-track {
    display: flex;
    gap: 40px; /* Espaço entre as imagens */
    position: relative;
    animation: none; /* A animação será controlada via JavaScript */
}

.carousel-track img {
    height: 60px;
    width: auto;
    opacity: 0.8;
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.carousel-track img:hover {
    transform: scale(1.1);
    opacity: 1;
}


/* Portfólio */
.portfolio {
    text-align: center;
}

.animated-title {
    font-size: 3em;
    font-weight: bold;
    color: white;
    position: relative;
    display: inline-block;
    padding-bottom: 5px;
    margin-bottom: 20px;
}

.animated-title::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, white, transparent);
    transform-origin: center;
    animation: underlineExpand 15s ease-in-out infinite;
}

@keyframes underlineExpand {
    0%, 100% {
        width: 0;
    }
    50% {
        width: 100%;
        left: 0;
    }
}

.portfolio-gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 1 / 1;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease, filter 0.3s ease;
}

.portfolio-item:hover img {
    transform: scale(1.1);
    filter: brightness(0.7);
}

.portfolio-item .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.portfolio-item:hover .overlay {
    opacity: 1;
}

.portfolio-item .overlay .saiba-mais {
    color: #00cc99;
    text-decoration: none;
    font-weight: bold;
    font-size: 1em;
}

/* Ajustes para a seção de depoimentos */
.testimonials {
    text-align: center;
    padding: 50px 0;
}

.testimonials h2 {
    font-size: 3em;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
}

.testimonials p {
    font-size: 0.8em;
    color: #bbb;
    margin-top: 0%;
    margin-bottom: 40px;
}

.testimonial-wrapper {
    position: relative;
    overflow: hidden;
    max-width: 100%;
    padding: 0 20px;
}

.testimonial-container {
    display: flex;
    gap: 20px;
    overflow-x: hidden; /* Oculta a barra de rolagem horizontal */
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.testimonial {
    flex: 0 0 auto;
    width: 300px; /* Define uma largura fixa */
    background: linear-gradient(135deg, #004d40, #006f59);
    border-radius: 20px;
    color: white;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    scroll-snap-align: center; /* Alinhamento ao parar de rolar */
}

.testimonial img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-bottom: 15px;
    object-fit: cover; /* Corrige a distorção das imagens */
}

.testimonial h3 {
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 10px;
}

.testimonial p {
    font-size: 0.8em;
    line-height: 1.4;
    color: #ddd;
}

/* Botões de navegação */
.testimonial-controls {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}

.control-button {
    background: #00cc99;
    border: none;
    color: white;
    padding: 10px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.control-button:hover {
    background-color: #00856f;
}

.control-button i {
    font-size: 1em;
}

/* Responsividade para dispositivos móveis */
@media (max-width: 768px) {
    .testimonial-container {
        gap: 10px;
    }

    .testimonial-wrapper {
        padding: 0 10px;
    }

    .testimonial {
        flex: 0 0 100%;
        max-width: 100%;
        scroll-snap-align: start;
    }

    .testimonials h2 {
        font-size: 2em;
    }

    .testimonials p {
        font-size: 0.8em;
    }

    /* Esconde os botões de navegação em telas menores */
    .testimonial-controls {
        display: none;
    }
}



/* Serviços */
.services {
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px 20px;
    text-align: center;
}

.services h2 {
    font-size: 3em;
    margin-bottom: 20px;
}

.services p {
    max-width: 500px;
    margin: 0 auto 40px;
    font-size: 0.8em;
    color: #bbb;
    margin-bottom: 40px;
}

.service-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
}

.service-card {
    background-color: #000;
    border: 1px solid #fff;
    padding: 20px;
    border-radius: 15px;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.service-card h3 {
    font-size: 1em;
    font-weight: bold;
    color: #fff;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.service-card p {
    font-size: 0.8em;
    color: #bbb;
}

.service-card .service-icon {
    font-size: 1.8em;
    color: #00f2c3;
    position: absolute;
    top: 15px;
    right: 15px;
}

.service-link {
    display: inline-block;
    color: #00f2c3;
    text-decoration: none;
    font-weight: bold;
    margin-top: 15px;
    transition: color 0.3s ease;
}

.service-link:hover {
    color: #00cc99;
}

.service-cards::-webkit-scrollbar {
    display: none;
}

.service-cards {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Ajuste para Desktop */
@media (min-width: 769px) {
    .service-card .service-icon {
        position: absolute;
        top: 15px;
        left: 15px;
        font-size: 1.8em;
        color: #00f2c3;
    }

    .service-card h3 {
        margin-top: 40px;
    }
}

@media (max-width: 768px) {
    .service-cards {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 10px;
        padding: 20px 10px;
    }

    .service-card {
        min-width: 80%;
        scroll-snap-align: start;
    }

    .service-card .service-icon {
        position: relative;
        top: 0;
        right: 0;
        margin-bottom: 10px;
    }
}

/* Sobre Nós */
.about {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px 20px;
    max-width: 1200px;
    margin: 0 auto;
    gap: 50px;
}

.about-content {
    max-width: 50%;
}

.about-content h2 {
    font-size: 3em;
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 20px;
}

.about-content h2 span {
    color: #00cc99;
}

.about-content p {
    font-size: 0.9em;
    margin-bottom: 30px;
    color: #bbb;
}

.about-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    width: 100%;
    max-width: 600px;
    height: 400px;
}

.image-placeholder {
    width: 100%;
    height: 100%;
    background-color: #d3d3d3;
}

/* Chamada para Ação */
.cta {
    text-align: center;
    padding: 100px 20px;
    background-color: #000;
    color: #fff;
}

.cta h2 {
    font-size: 4em;
    text-align: center;
    margin: 0 auto;
    width: auto;
    font-weight: superbold;
}

.cta h2 span {
    color: #00cc99;
}

.cta-contact {
    display: inline-block;
    margin-top: 20px;
    color: #00cc99;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
    border-bottom: 2px solid #00cc99;
    padding-bottom: 5px;
}

/* Pop-up de Contato */
.main-content.blur-active {
    filter: blur(5px);
    transition: filter 0.3s ease;
}

/* Fundo do pop-up em cinza */
.contact-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(50, 50, 50, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s ease, visibility 0.5s ease;
    z-index: 2000;
}

.contact-popup.active {
    opacity: 1;
    visibility: visible;
}

/* Conteúdo do pop-up */
.popup-content {
    background: #f5f5f5;
    padding: 30px;
    border-radius: 15px;
    width: 90%;
    max-width: 500px;
    position: relative;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    z-index: 2100;
    color: #333;
}

/* Botão de fechar o pop-up */
.close-popup {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    color: #333;
    background: #fff;
    border-radius: 50%;
    padding: 5px;
    width: 35px;
    height: 35px;
    border: 2px solid #00cc99;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s, color 0.3s;
}

.close-popup:hover {
    background: #00cc99;
    color: #fff;
}

/* Texto dentro do formulário */
.contact-form label {
    display: block;
    margin-top: 15px;
    font-weight: bold;
    color: #333;
}

.contact-form input,
.contact-form select {
    width: calc(100% - 20px);
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 1rem;
    color: #333;
}

/* Botão de enviar */
.contact-form button {
    display: block;
    width: 100%;
    padding: 15px;
    background: #00cc99;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.contact-form button:hover {
    background: #00856f;
}

/* Mensagem de redirecionamento para o email */
.email-redirect-message {
    font-size: 0.9em;
    color: #666;
    text-align: center;
    margin-top: 15px;
}

/* Rodapé */
.footer {
    background-color: #000;
    color: #fff;
    padding: 50px 20px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
    gap: 20px;
    flex-wrap: wrap;
}

.footer-logo img {
    width: 120px;
    margin-bottom: 20px;
}

.social-icons {
    display: flex;
    justify-content: center; /* Alinha os itens horizontalmente no centro */
    align-items: center; /* Alinha os itens verticalmente no centro */
    gap: 10px;
}

.social-icons i {
    font-size: 1.5em;
    color: #00cc99;
}

.footer-links {
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
}

.footer-links ul {
    list-style: none;
}

.footer-links ul li a {
    text-decoration: none;
    color: #fff;
    font-size: 1em;
}

.footer-subscribe {
    text-align: center;
}

.footer .social-icons a:hover {
    color: #00cc99;
}

.footer-links ul li a:hover {
    color: #00cc99;
}

.subscribe-form {
    display: flex;
    margin-top: 10px;
}

.subscribe-form input {
    padding: 10px;
    border-radius: 20px 0 0 20px;
    border: 1px solid #fff;
    outline: none;
    flex: 1;
}

.subscribe-form button {
    padding: 10px 20px;
    border-radius: 0 20px 20px 0;
    border: none;
    background-color: #00cc99;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.subscribe-form button:hover {
    background-color: #00856f;
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #333;
    margin-top: 30px;
    color: #bbb;
    display: flex;
    justify-content: center;
    align-items: center; /* Alinha verticalmente os itens */
    gap: 20px;
    flex-wrap: nowrap; /* Impede que os itens quebrem de linha */
}

.footer-bottom p {
    margin: 0; /* Remove as margens para evitar espaçamento extra */
    font-size: 0.9em; 
    white-space: nowrap; /* Garante que o texto não quebre */
    display: flex; 
    align-items: center; /* Alinha os ícones com o texto */
    gap: 5px; /* Espaço entre ícone e texto */
}


@media (max-width: 768px) {
    .footer-bottom {
        gap: 10px; /* Reduz o espaço entre os itens no mobile */
    }

    .footer-bottom p {
        font-size: 0.8em; /* Reduz o tamanho da fonte para caber melhor */
    }
}

@media (max-width: 480px) {
    .footer-bottom {
        gap: 5px; /* Reduz o espaço entre os itens para telas pequenas */
        padding-left: 10px;
        padding-right: 10px;
    }

    .footer-bottom p {
        font-size: 0.7em; /* Reduz ainda mais o tamanho da fonte */
    }
}

/* Ajustes de layout em telas pequenas para evitar sobreposição */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 1.8em;
        line-height: 1.2;
        text-align: center;
    }

    .hero p {
        font-size: 1em;
        text-align: center;
        padding: 0 20px;
    }

    .benefits {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
    }

    .benefit-item {
        margin: 10px 0;
        text-align: center;
    }

    .portfolio-gallery {
        display: flex;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        gap: 10px;
        padding: 20px;
    }

    .portfolio-item {
        min-width: 100%;
        scroll-snap-align: center;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .portfolio-gallery::-webkit-scrollbar {
        display: none;
    }
    .portfolio-gallery {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .portfolio-item .overlay .saiba-mais {
        display: none;
    }

    .mobile-button {
        display: block;
        text-align: center;
        background-color: #00cc99;
        color: white;
        text-decoration: none;
        font-weight: bold;
        padding: 10px;
        border-radius: 20px;
        margin-top: 10px;
        width: 90%;
    }

    .menu {
        flex-direction: column;
        position: fixed;
        top: 0;
        right: -100%;
        width: 250px;
        height: 100%;
        background: rgba(0, 77, 64, 0.9);
        padding-top: 60px;
        transition: right 0.3s ease;
        z-index: 1000;
    }

    .menu.active {
        right: 0;
    }

    .menu-toggle {
        display: block;
        cursor: pointer;
    }

    .menu li {
        text-align: left;
        padding: 15px;
    }

    .portfolio {
        grid-template-columns: repeat(2, 1fr);
        gap: 5px;
    }

    .about {
        flex-direction: column;
        text-align: center;
    }

    .about-content, .about-image {
        max-width: 100%;
    }

    .footer-content {
        flex-direction: column;
        text-align: center;
    }

    .footer-links {
        flex-direction: column;
        gap: 20px;
    }
}

@media (max-width: 480px) {
    .hero h1 {
        font-size: 2.2em;
    }

    .hero p {
        font-size: 1em;
    }

    .cta-button {
        padding: 10px 20px;
    }

    .partner-logos img {
        width: 80px;
    }

    .portfolio {
        grid-template-columns: 1fr;
        gap: 5px;
    }

    .testimonial {
        flex: 0 0 220px;
    }

    .control-button {
        width: 35px;
        height: 35px;
        padding: 8px;
    }

    .service-card {
        padding: 20px;
    }

    .service-card .service-icon {
        font-size: 1.5em;
    }

    .footer-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .footer-links {
        gap: 15px;
    }

    .footer-links ul li a {
        font-size: 0.9em;
    }

    .subscribe-form {
        flex-direction: column;
        gap: 10px;
    }

    .subscribe-form input {
        border-radius: 20px;
    }

    .subscribe-form button {
        border-radius: 20px;
        padding: 10px;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 10px;
    }
}
/* Estilos Gerais do Rodapé */
.footer {
    background-color: #000;
    color: #fff;
    padding: 40px 20px;
    font-family: 'Montserrat', sans-serif;
}

.footer a {
    color: #fff;
    text-decoration: none;
}

.footer h3 {
    font-size: 1.1em;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
}

/* Rodapé Desktop */
.footer-desktop .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    gap: 50px;
    flex-wrap: nowrap;
}

.footer-logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.footer-logo img {
    margin-bottom: 10px;
    width: 80px;
    height: auto;
}

/* Ícones Sociais Desktop */
.social-icons {
    display: flex;
    gap: 15px;
    margin-top: 10px;
}

.social-icons a {
    color: #00cc99;
    font-size: 1.2em;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: #fff;
}

/* Links do Rodapé */
.footer-links {
    display: flex;
    gap: 50px;
}

.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-links ul li {
    margin-bottom: 5px;
}

.footer-links ul li a {
    font-size: 1em;
    color: #fff;
    transition: color 0.3s ease;
}

.footer-links ul li a:hover {
    color: #00cc99;
}

/* Newsletter Desktop */
.footer-subscribe.desktop {
    text-align: left;
}

h3.h3-new-desktop {
    font-size: 0.8em;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
}

.subscribe-form {
    display: flex;
    gap: 10px;
}

.subscribe-form input[type="email"] {
    padding: 10px 15px;
    border-radius: 30px;
    border: 1px solid #fff;
    outline: none;
    color: #000;
    flex: 1;
}

.subscribe-form button {
    padding: 10px 20px;
    border-radius: 30px;
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.subscribe-form button:hover {
    background-color: #00cc99;
    color: #000;
}

/* Rodapé Inferior */
.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid #333;
    color: #bbb;
    font-size: 0.8em;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
}

.footer-bottom p {
    margin: 0;
    display: flex;
    align-items: center;
    gap: 5px;
    white-space: nowrap;
}

.footer-bottom p a {
    color: #bbb;
}

.footer-bottom p a:hover {
    color: #00cc99;
}

/* Responsividade */
@media (max-width: 768px) {
    /* Oculta o rodapé desktop no mobile */
    .footer-desktop {
        display: none;
    }
}
/* Oculta a versão desktop no mobile e vice-versa */
.footer-desktop {
    display: none;
}

.footer-mobile {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo principal */
    background-color: #000;
    color: #fff;
    padding: 30px 20px;
    font-family: 'Montserrat', sans-serif;
}

.footer-mobile-content {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo das colunas */
    gap: 20px;
}

.footer-column {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza os itens dentro de cada coluna */
}

.footer-column h4 {
    font-size: 1em;
    color: #00cc99;
    margin-bottom: 10px;
    text-align: center; /* Centraliza o texto do h4 */
}

.footer-column p,
.footer-column li a {
    font-size: 0.8em;
    text-align: center;
    color: #bbb;
}

.footer-column p i,
.footer-column li a {
    margin-right: 8px;
}

.footer-column ul {
    list-style: none;
    padding: 0;
}

.footer-column li {
    margin-bottom: 8px;
}

.footer-column li a {
    text-decoration: none;
    color: #bbb;
    transition: color 0.3s;
}

.footer-column li a:hover {
    color: #00cc99;
}

/* Estilos dos Ícones Sociais */
.social-icons {
    display: flex;
    gap: 10px;
    margin-top: 15px;
}

.social-icons a {
    color: #00cc99;
    font-size: 1.2em;
    transition: color 0.3s ease;
}

.social-icons a:hover {
    color: #fff;
}

/* Newsletter Mobile */
.footer-subscribe {
    margin-top: 15px;
}

.subscribe-form {
    display: flex;
    gap: 8px;
    align-items: center;
}

.subscribe-form input[type="email"] {
    flex: 1;
    padding: 8px 10px;
    border-radius: 20px;
    border: 1px solid #fff;
    outline: none;
    color: #000;
}

.subscribe-form button {
    padding: 8px 15px;
    border-radius: 20px;
    border: 1px solid #00cc99;
    background-color: #000;
    color: #00cc99;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.subscribe-form button:hover {
    background-color: #00cc99;
    color: #000;
}

/* Responsividade para dispositivos maiores */
@media (min-width: 769px) {
    .footer-mobile {
        display: none; /* Oculta o rodapé mobile em telas maiores */
    }

    .footer-desktop {
        display: block; /* Exibe o rodapé desktop em telas maiores */
    }
}
.language-switch {
    display: flex;
    align-items: center;
    gap: 10px; /* Ajusta o espaçamento entre os elementos, reduzindo para evitar o afastamento */
}

.language-selector {
    position: relative;
    cursor: pointer;
}

.selected-language {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
}

.selected-language img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Faz a bandeira preencher todo o círculo */
}

.language-options {
    display: none;
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #333;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    z-index: 1000;
}

.language-options li {
    list-style: none;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.language-options li:hover {
    background-color: #00cc99;
}

.language-options img {
    width: 30px;
    height: auto;
    object-fit: cover; /* Garante que as bandeiras nas opções também fiquem centralizadas */
}

.translation-message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    animation: fadeInOut 3s ease;
}

@keyframes fadeInOut {
    0%, 100% {
        opacity: 0;
        transform: translateY(20px) translateX(-50%);
    }
    10%, 90% {
        opacity: 1;
        transform: translateY(0) translateX(-50%);
    }
}
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popup-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .popup-content p {
    margin-bottom: 15px;
  }
  
  #close-popup {
    padding: 8px 16px;
    background-color: #00cc99;
    color: #fff;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }
  
/* Alterações para melhorar a responsividade */

/* Menu Toggle para Mobile */
.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 4px;
}

.menu-toggle div {
    width: 25px;
    height: 3px;
    background: white;
}

/* Responsividade */
@media (max-width: 700px) {
    .menu {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
    }
    
    .menu.active {
        transform: translateX(0);
    }

    .menu-toggle {
        display: flex;
    }
}

/* Seção Hero */
.hero-content h1 {
    font-size: clamp(1.8rem, 4vw, 3rem);
    font-weight: bold;
    line-height: 1.2;
    margin-bottom: 10px;
}

.hero-content p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: #b0b0b0;
    max-width: 800px;
    margin: 10px auto 30px;
    line-height: 1.5;
}

/* Footer Responsivo */
.footer-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.footer-links ul {
    list-style: none;
}

.footer-links ul li a {
    color: white;
    text-decoration: none;
}

@media (max-width: 768px) {
    .footer-content {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 768px) {
    .footer-content {
        gap: 10px;
    }

    .footer-links {
        flex-direction: column;
        gap: 10px;
    }
    
    .cta h2 {
        font-size: 1.5em;
    }
}

.social-icons-desktop {
    gap: 10px;
    margin-left: 10px;
    margin: auto;
}
