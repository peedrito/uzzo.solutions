document.addEventListener("DOMContentLoaded", () => {
    const chatIcon = document.getElementById("chat-icon");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.getElementById("close-chat");
    const chatContent = document.querySelector(".chat-content");
    const typingIndicator = document.getElementById("typing-indicator");
    const userInput = document.getElementById("user-input");
    const sendMessageButton = document.getElementById("send-message");
  
    let isGreetingShown = false; // Variável para controlar se a saudação já foi exibida
  
    // Abrir o chat ao clicar no ícone
    chatIcon.addEventListener("click", () => {
      chatBox.classList.add("show");
      chatBox.style.display = "flex";
      chatIcon.querySelector(".chat-notification").style.display = "none"; // Ocultar notificação
  
      // Exibir a saudação e o menu FAQ apenas na primeira vez que o chat for aberto
      if (!isGreetingShown) {
        setTimeout(() => {
          const greetingMessage = "👋 Olá! Como posso ajudar você?";
          addMessageToChat(greetingMessage, "bot");
  
          // Adicionar menu FAQ após a saudação
          setTimeout(() => {
            addMenuToChat();
          }, 500); // Adiciona o menu após a saudação
        }, 500); // Tempo para sincronizar com o fade-in do chat
  
        isGreetingShown = true; // Atualiza para evitar repetição
      }
    });
  
    // Fechar o chat ao clicar no botão de fechar
    closeChat.addEventListener("click", () => {
      chatBox.classList.remove("show");
      chatBox.style.display = "none";
    });
  
    // Enviar mensagem ao pressionar Enter
    userInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  
    // Enviar mensagem ao clicar no botão
    sendMessageButton.addEventListener("click", sendMessage);
  
    // Função para enviar mensagens
    function sendMessage() {
      const userMessage = userInput.value.trim();
  
      if (userMessage === "") {
        alert("Digite uma mensagem antes de enviar!");
        return;
      }
  
      // Adiciona a mensagem do usuário no chat
      addMessageToChat(userMessage, "user");
  
      // Limpa o campo de entrada
      userInput.value = "";
  
      // Mostra o indicador de digitação
      showTypingIndicator();
  
      // Simula a resposta do bot
      setTimeout(() => {
        hideTypingIndicator();
        const botResponse = getBotResponse(userMessage);
        addMessageToChat(botResponse, "bot");
        scrollToBottom();
      }, 2000);
    }
  
    // Adiciona mensagens no chat
    function addMessageToChat(message, sender) {
      const messageBubble = document.createElement("div");
      messageBubble.classList.add("chat-message");
  
      const bubbleContent = `
        <div class="chat-bubble ${sender === "user" ? "user-bubble" : "bot-bubble"} animated">
          ${
            sender === "bot"
              ? `<div class="bot-avatar">
                   <img src="/assets/images/chatbot/LaylaBot.webp" alt="Layla" />
                 </div>`
              : ""
          }
          ${message}
        </div>
      `;
  
      messageBubble.innerHTML = bubbleContent;
      chatContent.appendChild(messageBubble);
  
      // Remove a classe de animação após o término
      setTimeout(() => {
        messageBubble.querySelector(".chat-bubble").classList.remove("animated");
      }, 400); // Deve coincidir com a duração da animação no CSS
  
      scrollToBottom();
    }
  
    // Mostra o indicador de digitação
    function showTypingIndicator() {
      typingIndicator.style.display = "block";
      chatContent.appendChild(typingIndicator); // Garante que o indicador está no final do chat
      scrollToBottom();
    }
  
    // Esconde o indicador de digitação
    function hideTypingIndicator() {
      typingIndicator.style.display = "none";
    }
  
    // Gera uma resposta com base na mensagem
    function getBotResponse(message) {
      const responses = {
        "quais serviços oferecemos?": "Oferecemos suporte técnico, consultoria e mais.",
        "como falar com o suporte?": "Você pode falar conosco pelo WhatsApp ou e-mail.",
        "fale com um atendente.": "No momento, todos estão ocupados, mas posso te ajudar!",
      };
  
      return (
        responses[message.toLowerCase()] ||
        "Desculpe, não entendi sua mensagem. Por favor, tente novamente."
      );
    }
  
    // Garante que o chat role para o final
    function scrollToBottom() {
      chatContent.scrollTop = chatContent.scrollHeight;
    }
  
    // Adiciona o menu FAQ dinamicamente
    function addMenuToChat() {
      const faqContainer = document.createElement("div");
      faqContainer.classList.add("chat-message");
  
      faqContainer.innerHTML = `
        <div class="chat-bubble bot-bubble animated">
          Aqui estão algumas opções:
          <ul class="faq-list">
            <li><button class="faq-item">Quais serviços oferecemos?</button></li>
            <li><button class="faq-item">Como falar com o suporte?</button></li>
            <li><button class="faq-item">Fale com um atendente.</button></li>
          </ul>
        </div>
      `;
  
      chatContent.appendChild(faqContainer);
  
      // Remove a classe de animação após o término
      setTimeout(() => {
        faqContainer.querySelector(".chat-bubble").classList.remove("animated");
      }, 400); // Deve coincidir com a duração da animação no CSS
  
      attachFAQEvents();
      scrollToBottom();
    }
  
    // Adiciona eventos aos botões de FAQ
    function attachFAQEvents() {
      document.querySelectorAll(".faq-item").forEach((item) => {
        item.addEventListener("click", (e) => {
          const userMessage = e.target.textContent;
          addMessageToChat(userMessage, "user");
  
          // Esconde o FAQ atual
          const faqList = e.target.closest(".faq-list");
          if (faqList) {
            faqList.style.display = "none";
          }
  
          // Mostra o indicador de digitação
          showTypingIndicator();
  
          setTimeout(() => {
            hideTypingIndicator();
            const botResponse = getBotResponse(userMessage);
            addMessageToChat(botResponse, "bot");
  
            scrollToBottom();
          }, 2000);
        });
      });
    }
  });
  