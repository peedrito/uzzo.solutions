document.addEventListener("DOMContentLoaded", () => {
  // Elementos principais
  const menuToggle = document.querySelector(".menu-toggle"); // Botão do menu hamburguer
  const menu = document.querySelector(".menu"); // Menu principal
  const menuLinks = document.querySelectorAll(".menu li a");
  const testimonialContainer = document.getElementById("testimonial-container");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const subscribeForm = document.querySelector(".subscribe-form");
  const contactPopup = document.querySelector(".contact-popup");
  const closePopup = document.querySelector(".close-popup");
  const contactForm = document.querySelector(".contact-form");
  const contactButton = document.querySelector(".contact-button");
  const mainContent = document.querySelector(".main-content");
  const ctaContactButton = document.querySelector(".cta-contact");
  const saibaMaisButton = document.querySelector(
    '.cta-button[href="#servicos"]'
  );

  // Scroll suave para o botão "Saiba Mais"
  if (saibaMaisButton) {
    saibaMaisButton.addEventListener("click", (event) => {
      event.preventDefault();
      const targetSection = document.querySelector("#servicos");
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  }

  // Toggle do menu no mobile
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });
  }

  // Scroll suave ao clicar nos itens do menu
  menuLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 100,
          behavior: "smooth",
        });
        if (menu.classList.contains("active")) {
          menu.classList.remove("active");
        }
      }
    });
  });

  // Configuração para a rolagem do carrossel de depoimentos
  if (testimonialContainer && prevBtn && nextBtn) {
    const scrollStep = 350; // Valor fixo para cada rolagem

    // Botão de navegação para o próximo
    nextBtn.addEventListener("click", () => {
      testimonialContainer.scrollBy({
        left: scrollStep,
        behavior: "smooth",
      });
    });

    // Botão de navegação para o anterior
    prevBtn.addEventListener("click", () => {
      testimonialContainer.scrollBy({
        left: -scrollStep,
        behavior: "smooth",
      });
    });

    // Suporte para deslizar com toque em dispositivos móveis
    let startX;
    testimonialContainer.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });

    testimonialContainer.addEventListener("touchmove", (e) => {
      const moveDiff = startX - e.touches[0].clientX;
      if (Math.abs(moveDiff) > 50) {
        testimonialContainer.scrollBy({
          left: moveDiff,
          behavior: "smooth",
        });
        startX = e.touches[0].clientX;
      }
    });
  }

  // Pop-up de contato
  const openContactPopup = (e) => {
    e.preventDefault();
    if (contactPopup) {
      contactPopup.classList.add("active");
      mainContent.classList.add("blur-active");
    }
  };
  if (contactButton) contactButton.addEventListener("click", openContactPopup);
  if (ctaContactButton)
    ctaContactButton.addEventListener("click", openContactPopup);

  if (closePopup) {
    closePopup.addEventListener("click", () => {
      contactPopup.classList.remove("active");
      mainContent.classList.remove("blur-active");
    });
  }
  if (contactPopup) {
    contactPopup.addEventListener("click", (e) => {
      if (e.target === contactPopup) {
        contactPopup.classList.remove("active");
        mainContent.classList.remove("blur-active");
      }
    });
  }

  // Enviar informações do formulário de contato via e-mail
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const service = document.getElementById("service").value;
      if (name && phone && service) {
        const mailtoLink = `mailto:info@uzzo.solutions?subject=Contato%20Uzzo%20Solutions&body=Nome:%20${encodeURIComponent(
          name
        )}%0ATelefone:%20${encodeURIComponent(
          phone
        )}%0AServi%C3%A7o%20desejado:%20${encodeURIComponent(service)}`;
        window.location.href = mailtoLink;
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    });
  }

  // Inscrição da newsletter
  if (subscribeForm) {
    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const emailInput = subscribeForm.querySelector('input[type="email"]');
      const email = emailInput.value;
      if (email) {
        const mailtoLink = `mailto:info@uzzo.solutions?subject=Assinatura%20de%20Newsletter&body=Eu%20aceito%20receber%20ofertas%20e%20not%C3%ADcias.%0AEmail:%20${encodeURIComponent(
          email
        )}`;
        window.location.href = mailtoLink;
      } else {
        alert("Por favor, insira um endereço de e-mail válido.");
      }
    });
  }

  // Atualizar links das redes sociais
  const instagramLink = document.querySelector(
    ".social-icons a[href*='instagram']"
  );
  const linkedinLink = document.querySelector(
    ".social-icons a[href*='linkedin']"
  );
  const discordLink = document.querySelector(
    ".social-icons a[href*='discord']"
  );
  if (instagramLink)
    instagramLink.href = "https://www.instagram.com/uzzosolutions/";
  if (linkedinLink)
    linkedinLink.href = "https://www.linkedin.com/company/uzzo-solutions/";
  if (discordLink) discordLink.href = "https://discord.gg/EFgNAVYD4q";
});
const translations = {
  pt: {
    serviceOptions: [
      "Creación de Sitios Web",
      "Consultoría de Marketing Digital",
      "Gestión de Redes Sociales",
      "Identidad Visu al",
    ],
    translating:
      "Traduzindo a página para você. Qualquer dúvida ou erro, entre em contato.",
    menu: ["Início", "Feedbacks", "Serviços", "Quem somos"],
    heroTitle:
      "Esse é o <span>momento</span>, alcance <span>seus resultados</span>!",
    heroDescription:
    "Na UZZO Solutions, não apenas criamos soluções digitais — nós criamos experiências que inspiram, engajam e transformam.",
    contactButton: "Fale conosco!",
    testimonialsTitle: "Avaliações de clientes",
    testimonialsDescription:
      "Veja o que nossos clientes têm a dizer sobre as soluções que desenvolvemos juntos.",
    testimonials: [
      "A equipe da Uzzo entendeu exatamente o que precisávamos e transformou nossas ideias em um site incrível. Profissionalismo e criatividade de sobra!",
      "Usar o sistema da Uzzo fez uma grande diferença no meu dia a dia. Antes, eu perdia muito tempo com planilhas e controle manual. Agora, consigo visualizar tudo de forma prática e até gerar relatórios em poucos cliques. Recomendo para qualquer negócio que queira melhorar a gestão!",
      "A Uzzo superou minhas expectativas! Além do ótimo controle de estoque, o suporte é excelente e sempre rápido para responder. Vale cada centavo, especialmente pela facilidade de atualizar ou excluir dados. Perfeito para pequenas e médias empresas!",
      "O trabalho deles é impressionante! Conseguiram trazer um conceito visual único e relevante para a nossa marca.",
      "A consultoria de marketing digital fez toda a diferença nos nossos resultados. Recomendo demais!",
      "A Uzzo tem sido fundamental para a organização do estoque da minha empresa! O sistema é intuitivo e fácil de usar, e a análise dos dados é super detalhada. Com certeza, ajudou a otimizar nosso tempo e a ter mais clareza sobre nossos produtos.",
    ],
    servicesTitle: "Nossos Serviços",
    servicesDescription:
      "Oferecemos serviços que abrangem desde o desenvolvimento de sites, consultoria de marketing digital, até a criação de uma identidade visual impactante para o seu negócio.",
    serviceCards: [
      "Criação de Sites",
      "Consultoria de Marketing Digital",
      "Gestão de Social Mídia",
      "Identidade Visual",
    ],
    serviceDescriptions: [
      "Sites modernos, rápidos e adaptáveis às necessidades do seu negócio. Deixe sua marca no digital de forma profissional.",
      "Impulsione suas campanhas e alcance mais clientes com estratégias personalizadas e eficazes.",
      "Transforme sua presença nas redes sociais com estratégias criativas e focadas em engajamento.",
      "Crie uma marca memorável, única e cheia de personalidade com nossa ajuda. Sua imagem, sua essência.",
    ],
    aboutTitle: "Quem Somos?",
    aboutDescription: "Na UZZO, somos uma equipe especializada e dedicada a transformar ideias em soluções completas e impactantes. Contamos com profissionais experientes em design, social media, desenvolvimento, edição de vídeo e tráfego pago, oferecendo uma abordagem integrada para fortalecer a identidade e a presença das marcas no mercado. Nosso compromisso vai além da entrega de serviços: trabalhamos como parceiros estratégicos, unindo criatividade e técnica para alcançar resultados consistentes e memoráveis.",    
    ctaTitle: "ACELERE SEUS RESULTADOS <span>AGORA!</span>",
    ctaContact: "Entre em contato →",
    submitButton: "Enviar",
    placeholderEmail: "Digite seu email",
    footer: {
      subscribe: "SE INSCREVA PARA RECEBER ATUALIZAÇÕES",
      contactUs: "Mande um e-mail para info@uzzo.solutions",
      address: "Rua Amazonas, 362, Centro, Goiatuba, 75600-000",
      social: "Siga-nos nas redes sociais",
      mobileSubscribe: "RECEBA PROMOÇÕES E NOTÍCIAS!",
      contactInfo: "Mande um e-mail para info@uzzo.solutions",
      footerEmail: "info@uzzo.solutions",
      phone: "(64) 98171-8495",
      year: "Uzzo Solutions - 2024",
      links: [
        "Início",
        "Produtos e serviços",
        "Trabalhos feitos",
        "Quem somos",
        "Contato",
      ],
    },
    heroCtaButton: "Saiba mais →",
    aboutCtaButton: "Conhecer equipe →",
    trustedtitle: "Empresas que confiam em nós",
    heroCtaButton: "Saiba mais →",
    popup: {
      title: "Fale Conosco",
      nameLabel: "Nome:",
      phoneLabel: "Telefone:",
      serviceLabel: "Serviço desejado:",
      emailRedirectMessage: "Ao enviar, você será redirecionado para seu aplicativo de email.",
      submitButton: "Enviar",
    },
    constructionPopupMessage: "Ainda estamos construindo essa página, nos desculpe.",
    popupClose: "Fechar",
  },
  en: {
    serviceOptions: [
      "Website Creation",
      "Digital Marketing Consulting",
      "Social Media Management",
      "Visual Identity",
    ],
    translating:
      "Translating the page for you. If you have any questions or errors, please contact us.",
    menu: ["Home", "Feedbacks", "Services", "About Us"],
    heroTitle:
      "This is the <span>moment</span>, achieve <span>your results</span>!",
    heroDescription:
      "At UZZO Solutions, we don’t just create digital solutions — we create experiences that inspire, engage, and transform.",
    contactButton: "Contact Us!",
    testimonialsTitle: "Client Reviews",
    testimonialsDescription:
      "See what our clients have to say about the solutions we developed together.",
    testimonials: [
      "The Uzzo team understood exactly what we needed and turned our ideas into an amazing website. Professionalism and creativity galore!",
      "Using Uzzo's system has made a big difference in my daily routine. Before, I spent a lot of time on spreadsheets and manual control. Now, I can visualize everything practically and even generate reports in a few clicks. I recommend it to any business that wants to improve management!",
      "Uzzo exceeded my expectations! In addition to the excellent inventory control, the support is great and always quick to respond. Worth every penny, especially for the ease of updating or deleting data. Perfect for small and medium businesses!",
      "Their work is impressive! They managed to bring a unique and relevant visual concept to our brand.",
      "The digital marketing consulting made all the difference in our results. Highly recommended!",
      "Uzzo has been essential for organizing my company's inventory! The system is intuitive and easy to use, and the data analysis is very detailed. It has certainly helped optimize our time and gain more clarity about our products.",
    ],
    servicesTitle: "Our Services",
    servicesDescription:
      "We offer services that range from website development, digital marketing consulting, to creating an impactful visual identity for your business.",
    serviceCards: [
      "Website Creation",
      "Digital Marketing Consulting",
      "Social Media Management",
      "Visual Identity",
    ],
    serviceDescriptions: [
      "Modern, fast, and adaptable websites tailored to your business needs. Make your digital mark professionally.",
      "Boost your campaigns and reach more clients with personalized and effective strategies.",
      "Transform your social media presence with creative strategies focused on engagement.",
      "Create a memorable, unique, and full-of-personality brand with our help. Your image, your essence.",
    ],
    aboutTitle: "Who We Are",
    aboutDescription:
      "At UZZO, we are a specialized and dedicated team transforming ideas into impactful and complete solutions. Our experienced professionals in design, social media, development, video editing, and paid traffic provide an integrated approach to strengthen brand identity and presence in the market. Our commitment goes beyond delivering services: we work as strategic partners, combining creativity and technique to achieve consistent and memorable results.",
    ctaTitle: "BOOST YOUR RESULTS <span>NOW!</span>",
    ctaContact: "Contact Us →",
    submitButton: "Send",
    placeholderEmail: "Enter your email",
    footer: {
      subscribe: "SUBSCRIBE FOR UPDATES",
      contactUs: "Send an email to info@uzzo.solutions",
      address: "Rua Amazonas, 362, Centro, Goiatuba, 75600-000",
      social: "Follow us on social media",
      mobileSubscribe: "RECEIVE PROMOTIONS AND NEWS!",
      contactInfo: "Send an email to info@uzzo.solutions",
      footerEmail: "info@uzzo.solutions",
      phone: "(64) 98171-8495",
      year: "Uzzo Solutions - 2024",
      links: [
        "Home",
        "Products and Services",
        "Portfolio",
        "About Us",
        "Contact",
      ],
    },
    heroCtaButton: "Learn more →",
    aboutCtaButton: "Meet the team →",
    trustedtitle: "Companies that trust us",
    popup: {
      title: "Contact Us",
      nameLabel: "Name:",
      phoneLabel: "Phone:",
      serviceLabel: "Desired Service:",
      emailRedirectMessage: "Upon sending, you will be redirected to your email application.",
      submitButton: "Send",
    },
    constructionPopupMessage: "We are still building this page, sorry.",
    popupClose: "Close",
  },
  es: {
    serviceOptions: [
      "Creación de Sitios Web",
      "Consultoría de Marketing Digital",
      "Gestión de Redes Sociales",
      "Identidad Visual",
    ],
    translating:
      "Traduciendo la página para usted. Si tiene alguna pregunta o error, contáctenos.",
    menu: ["Inicio", "Comentarios", "Servicios", "Quiénes somos"],
    heroTitle:
      "¡Este es el <span>momento</span>, logra <span>tus resultados</span>!",
    heroDescription:
      "En UZZO Solutions, no solo creamos soluciones digitales — creamos experiencias que inspiran, enganchan y transforman.",
    contactButton: "¡Contáctanos!",
    testimonialsTitle: "Reseñas de Clientes",
    testimonialsDescription:
      "Vea lo que nuestros clientes dicen sobre las soluciones que desarrollamos juntos.",
    testimonials: [
      "El equipo de Uzzo entendió exactamente lo que necesitábamos y convirtió nuestras ideas en un sitio web increíble. ¡Profesionalismo y creatividad de sobra!",
      "Usar el sistema de Uzzo ha marcado una gran diferencia en mi día a día. Antes, pasaba mucho tiempo con hojas de cálculo y control manual. Ahora, puedo visualizar todo de forma práctica e incluso generar informes en pocos clics. ¡Lo recomiendo a cualquier negocio que quiera mejorar la gestión!",
      "¡Uzzo superó mis expectativas! Además del excelente control de inventario, el soporte es excelente y siempre rápido para responder. Vale cada centavo, especialmente por la facilidad de actualizar o eliminar datos. ¡Perfecto para pequeñas y medianas empresas!",
      "¡Su trabajo es impresionante! Lograron aportar un concepto visual único y relevante a nuestra marca.",
      "La consultoría de marketing digital hizo toda la diferencia en nuestros resultados. ¡Muy recomendado!",
      "¡Uzzo ha sido fundamental para la organización del inventario de mi empresa! El sistema es intuitivo y fácil de usar, y el análisis de datos es muy detallado. Sin duda, ha ayudado a optimizar nuestro tiempo y a tener más claridad sobre nuestros productos.",
    ],
    servicesTitle: "Nuestros Servicios",
    servicesDescription:
      "Ofrecemos servicios que van desde el desarrollo de sitios web, consultoría de marketing digital, hasta la creación de una identidad visual impactante para su negocio.",
    serviceCards: [
      "Creación de Sitios Web",
      "Consultoría de Marketing Digital",
      "Gestión de Redes Sociales",
      "Identidad Visual",
    ],
    serviceDescriptions: [
      "Sitios modernos, rápidos y adaptables a las necesidades de su negocio. Deje su marca en el digital de forma profesional.",
      "Impulse sus campañas y alcance a más clientes con estrategias personalizadas y efectivas.",
      "Transforme su presencia en las redes sociales con estrategias creativas enfocadas en el engagement.",
      "Cree una marca memorable, única y llena de personalidad con nuestra ayuda. Su imagen, su esencia.",
    ],
    aboutTitle: "¿Quiénes Somos?",
    aboutDescription:
      "En UZZO, somos un equipo especializado y dedicado a transformar ideas en soluciones completas e impactantes. Contamos con profesionales experimentados en diseño, redes sociales, desarrollo, edición de video y tráfico pago, ofreciendo un enfoque integrado para fortalecer la identidad y presencia de las marcas en el mercado. Nuestro compromiso va más allá de la entrega de servicios: trabajamos como socios estratégicos, combinando creatividad y técnica para lograr resultados consistentes y memorables.",
    ctaTitle: "¡ACELERA TUS RESULTADOS <span>AHORA!</span>",
    ctaContact: "Contáctenos →",
    submitButton: "Enviar",
    placeholderEmail: "Introduce tu correo",
    footer: {
      subscribe: "SUSCRÍBASE PARA RECIBIR ACTUALIZACIONES",
      contactUs: "Envía un correo a info@uzzo.solutions",
      address: "Rua Amazonas, 362, Centro, Goiatuba, 75600-000",
      social: "Síguenos en redes sociales",
      mobileSubscribe: "¡RECIBE PROMOCIONES Y NOTICIAS!",
      contactInfo: "Envía un correo a info@uzzo.solutions",
      footerEmail: "info@uzzo.solutions",
      phone: "(64) 98171-8495",
      year: "Uzzo Solutions - 2024",
      links: [
        "Inicio",
        "Productos y servicios",
        "Trabajos realizados",
        "Quiénes somos",
        "Contacto",
      ],
    },
    heroCtaButton: "Saber más →",
    aboutCtaButton: "Conocer equipo →",
    trustedtitle: "Empresas que confían en nosotros",
    popup: {
      title: "Contáctenos",
      nameLabel: "Nombre:",
      phoneLabel: "Teléfono:",
      serviceLabel: "Servicio deseado:",
      emailRedirectMessage: "Al enviar, será redirigido a su aplicación de correo.",
      submitButton: "Enviar",
    },
    constructionPopupMessage: "Aún estamos construyendo esta página, disculpa.",
    popupClose: "Cerrar",
  },
};
document.addEventListener("DOMContentLoaded", () => {
  const languageOptions = document.getElementById("language-options");
  const selectedLanguage = document.getElementById("selected-language");
  const currentFlag = document.getElementById("current-flag");

  if (selectedLanguage) {
    selectedLanguage.addEventListener("click", () => {
      if (languageOptions) {
        languageOptions.style.display =
          languageOptions.style.display === "block" ? "none" : "block";
      } else {
        console.error("Elemento 'language-options' não encontrado.");
      }
    });
  } else {
    console.error("Elemento 'selected-language' não encontrado.");
  }

  if (languageOptions) {
    languageOptions.addEventListener("click", (e) => {
      const lang = e.target.closest("li")?.dataset.lang;
      if (lang) {
        changeLanguage(lang);
      }
    });
  } else {
    console.error(
      "Elemento 'language-options' não encontrado para adicionar evento de clique."
    );
  }

  const changeLanguage = (language) => {
    const selectedOption = document.querySelector(
      `[data-lang="${language}"] img`
    );
    if (currentFlag && selectedOption) {
      currentFlag.src = selectedOption.src;
    }

    showTranslatingMessage(language);
    updateTexts(language);

    if (languageOptions) {
      languageOptions.style.display = "none";
    }
  };

  const showTranslatingMessage = (language) => {
    const message = translations[language]?.translating;
    if (message) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("translation-message");
      messageDiv.innerText = message;
      document.body.appendChild(messageDiv);

      setTimeout(() => {
        messageDiv.remove();
      }, 3000);
    }
  };

  const updateTexts = (language) => {
    // Tradução do menu
    const menuLinks = document.querySelectorAll(".menu li a");
    menuLinks.forEach((link, index) => {
      if (translations[language]?.menu[index]) {
        link.innerHTML = translations[language].menu[index];
      }
    });

      // Tradução das opções do select "Serviço desejado"
  const serviceOptions = document.querySelectorAll("#service option");
  if (serviceOptions) {
    serviceOptions.forEach((option, index) => {
      if (translations[language]?.serviceOptions[index]) {
        option.innerText = translations[language].serviceOptions[index];
      }
    });
  }

    // Tradução da seção hero
    const heroTitle = document.querySelector(".hero-content h1");
    const heroDescription = document.querySelector(".hero-content p");
    const contactButton = document.querySelector(".contact-button");
    const heroCtaButton = document.getElementById("hero-cta-button");
    const aboutCtaButton = document.getElementById("about-cta-button");
    const trustedTitle = document.querySelector(".trusted-title");

    if (heroTitle && heroDescription && contactButton) {
      heroTitle.innerHTML =
        translations[language]?.heroTitle || heroTitle.innerHTML;
      heroDescription.innerHTML =
        translations[language]?.heroDescription || heroDescription.innerHTML;
      contactButton.innerText =
        translations[language]?.contactButton || contactButton.innerText;
    }

    if (heroCtaButton) {
      heroCtaButton.innerText =
        translations[language]?.heroCtaButton || heroCtaButton.innerText;
    }

    if (aboutCtaButton) {
      aboutCtaButton.innerText =
        translations[language]?.aboutCtaButton || aboutCtaButton.innerText;
    }

    if (trustedTitle) {
      trustedTitle.innerText =
        translations[language]?.trustedtitle || trustedTitle.innerText;
    }

    // Tradução do campo de email
    const inputEmail = document.querySelector("input[type='email']");
    if (inputEmail) {
      inputEmail.placeholder =
        translations[language]?.placeholderEmail || inputEmail.placeholder;
    }

    // Tradução do pop-up de contato
    const contactPopupContent = document.querySelector(
      ".contact-popup .popup-content h2"
    );
    const nameLabel = document.querySelector("label[for='name']");
    const phoneLabel = document.querySelector("label[for='phone']");
    const serviceLabel = document.querySelector("label[for='service']");
    const emailRedirectMessage = document.querySelector(
      ".email-redirect-message"
    );
    const submitButton = document.querySelector(".contact-form button");

    if (contactPopupContent) {
      contactPopupContent.innerText =
        translations[language]?.popup?.title || contactPopupContent.innerText;
    }
    if (nameLabel) {
      nameLabel.innerText =
        translations[language]?.popup?.nameLabel || nameLabel.innerText;
    }
    if (phoneLabel) {
      phoneLabel.innerText =
        translations[language]?.popup?.phoneLabel || phoneLabel.innerText;
    }
    if (serviceLabel) {
      serviceLabel.innerText =
        translations[language]?.popup?.serviceLabel || serviceLabel.innerText;
    }
    if (emailRedirectMessage) {
      emailRedirectMessage.innerText =
        translations[language]?.popup?.emailRedirectMessage ||
        emailRedirectMessage.innerText;
    }
    if (submitButton) {
      submitButton.innerText =
        translations[language]?.popup?.submitButton || submitButton.innerText;
    }

    // Tradução do pop-up de construção
    const constructionPopupContent = document.querySelector(
      "#construction-popup .popup-content p"
    );
    const closePopupButton = document.getElementById("close-popup");

    if (constructionPopupContent) {
      constructionPopupContent.innerText =
        translations[language]?.constructionPopupMessage ||
        constructionPopupContent.innerText;
    }
    if (closePopupButton) {
      closePopupButton.innerText =
        translations[language]?.popupClose || closePopupButton.innerText;
    }

    // Tradução dos links "Saiba Mais"
    const saibaMaisLinks = document.querySelectorAll(".service-link");
    saibaMaisLinks.forEach((link) => {
      link.innerText =
        translations[language]?.heroCtaButton || link.innerText;
    });

    // Tradução das seções de depoimentos
    const testimonialsTitle = document.querySelector(".testimonials h2");
    const testimonialsDescription = document.querySelector(".testimonials p");
    const testimonialsTexts = document.querySelectorAll(".testimonial p");

    if (testimonialsTitle && testimonialsDescription) {
      testimonialsTitle.innerText =
        translations[language]?.testimonialsTitle || testimonialsTitle.innerText;
      testimonialsDescription.innerText =
        translations[language]?.testimonialsDescription ||
        testimonialsDescription.innerText;
    }
    testimonialsTexts.forEach((testimonial, index) => {
      if (translations[language]?.testimonials[index]) {
        testimonial.innerText = translations[language].testimonials[index];
      }
    });

    // Tradução dos serviços
    const servicesTitle = document.querySelector(".services h2");
    const servicesDescription = document.querySelector(".services p");
    if (servicesTitle && servicesDescription) {
      servicesTitle.innerText =
        translations[language]?.servicesTitle || servicesTitle.innerText;
      servicesDescription.innerText =
        translations[language]?.servicesDescription ||
        servicesDescription.innerText;
    }

    const serviceCards = document.querySelectorAll(".service-card h3");
    const serviceDescriptions = document.querySelectorAll(".service-card p");
    serviceCards.forEach((card, index) => {
      if (translations[language]?.serviceCards[index]) {
        card.innerText = translations[language].serviceCards[index];
      }
    });
    serviceDescriptions.forEach((desc, index) => {
      if (translations[language]?.serviceDescriptions[index]) {
        desc.innerText = translations[language].serviceDescriptions[index];
      }
    });

    // Tradução da seção "Quem Somos"
    const aboutTitle = document.querySelector(".about-content h2");
    const aboutDescription = document.querySelector(".about-content p");
    if (aboutTitle && aboutDescription) {
      aboutTitle.innerText =
        translations[language]?.aboutTitle || aboutTitle.innerText;
      aboutDescription.innerText =
        translations[language]?.aboutDescription || aboutDescription.innerText;
    }

    // Tradução do CTA
    const ctaTitle = document.querySelector(".cta h2");
    const ctaContact = document.querySelector(".cta-contact");
    if (ctaTitle && ctaContact) {
      ctaTitle.innerHTML =
        translations[language]?.ctaTitle || ctaTitle.innerHTML;
      ctaContact.innerText =
        translations[language]?.ctaContact || ctaContact.innerText;
    }

    // Tradução dos links do rodapé
    const footerLinks = document.querySelectorAll(".footer-links ul li a");
    if (footerLinks && translations[language]?.footer?.links) {
      footerLinks.forEach((link, index) => {
        if (translations[language].footer.links[index]) {
          link.innerText = translations[language].footer.links[index];
        }
      });
    }

    // Tradução da inscrição no rodapé
    const footerSubscribeDesktop = document.querySelector(
      ".footer-desktop .footer-subscribe h3"
    );
    const footerSubscribeMobile = document.querySelector(
      ".footer-mobile .footer-subscribe h3"
    );

    if (footerSubscribeDesktop) {
      footerSubscribeDesktop.innerText =
        translations[language]?.footer?.subscribe ||
        footerSubscribeDesktop.innerText;
    }
    if (footerSubscribeMobile) {
      footerSubscribeMobile.innerText =
        translations[language]?.footer?.mobileSubscribe ||
        footerSubscribeMobile.innerText;
    }
  };

  // Inicializar com o idioma padrão (Português)
  updateTexts("pt");
});


// Pop-up de construção em andamento
document.addEventListener("DOMContentLoaded", () => {
  const aboutCtaButton = document.getElementById("about-cta-button");
  const popup = document.getElementById("construction-popup");
  const closePopupButton = document.getElementById("close-popup");

  if (aboutCtaButton) {
    aboutCtaButton.addEventListener("click", (e) => {
      e.preventDefault(); // Impede o link de navegar
      popup.style.display = "flex"; // Exibe o pop-up
    });
  }

  if (closePopupButton) {
    closePopupButton.addEventListener("click", () => {
      popup.style.display = "none"; // Fecha o pop-up
    });
  }

  // Fechar o pop-up ao clicar fora dele
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const images = Array.from(track.children);

  // Clonar imagens dinamicamente para criar o efeito infinito
  const cloneImages = () => {
      images.forEach((image) => {
          const clone = image.cloneNode(true);
          track.appendChild(clone);
      });
  };

  cloneImages(); // Duplicar imagens para continuidade

  let trackWidth = 0;
  let scrollPosition = 0;

  // Atualiza a largura total do track
  const updateTrackWidth = () => {
      trackWidth = Array.from(track.children).reduce((acc, img) => acc + img.offsetWidth + 40, 0);
      track.style.width = `${trackWidth}px`;
  };

  updateTrackWidth();

  // Função para animação infinita
  const moveCarousel = () => {
      scrollPosition -= 1; // Velocidade de movimento
      if (Math.abs(scrollPosition) >= trackWidth / 2) {
          scrollPosition = 0; // Reinicia posição
      }
      track.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(moveCarousel); // Loop da animação
  };

  moveCarousel(); // Inicia o loop

  // Atualiza o tamanho do track se a janela for redimensionada
  window.addEventListener("resize", () => {
      updateTrackWidth();
  });

  const spanCurrentYears = document.querySelectorAll(".currentYear")

  spanCurrentYears.forEach(span => {
    span.innerText = new Date().getFullYear()
  })
});