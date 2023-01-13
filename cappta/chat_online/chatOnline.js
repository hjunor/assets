function changeWhatsappVisibily(visibility) {
  let whatsapp = document.getElementById("whatsapp-chat");

  whatsapp.style.display = visibility;
}

function createWhatsappChat() {
  let chatIframe = document.getElementById("widget_iframe");

  let headerChatHidden =
    chatIframe.contentWindow.document.getElementById("badge");
  let headerChatOpen =
    chatIframe.contentWindow.document.getElementById("loginWindow");
  let headerChatOpenActive =
    chatIframe.contentWindow.document.getElementById("chatWindow");

  headerChatHidden.addEventListener("click", function (event) {
    changeWhatsappVisibily("none");
  });
  headerChatOpen.firstElementChild.addEventListener("click", function (event) {
    changeWhatsappVisibily("block");
  });
  headerChatOpenActive.firstElementChild.addEventListener(
    "click",
    function (event) {
      changeWhatsappVisibily("block");
    }
  );

  let whatsapp = document.createElement("img");

  whatsapp.setAttribute("id", "whatsapp-chat");
  whatsapp.setAttribute(
    "src",
    "https://github.com/hjunor/assets/blob/master/cappta/chat_online/whatsapp_icon.svg"
  );
  whatsapp.onclick = function () {
    window.open("https://api.whatsapp.com/send?phone=551143026166&text=Oi");
  };

  let parentNode = document.getElementById("widget_canvas");

  parentNode.insertBefore(whatsapp, chatIframe);

  chatIframe.style.visibility = "visible";
}

function createMaktzapChat() {
  let chat = document.createElement("script");

  chat.setAttribute(
    "src",
    "https://cappta.mktzap.com.br/webchat/posxprwne0apn09gpk6i"
  );

  chat.onload = function () {
    let iframe = document.getElementById("widget_iframe");

    iframe.style.visibility = "hidden";

    iframe.contentWindow.document.addEventListener(
      "DOMContentLoaded",
      function (event) {
        createWhatsappChat();
      }
    );
  };

  document.body.appendChild(chat);
}

document.addEventListener("DOMContentLoaded", function (event) {
  createMaktzapChat();
});
