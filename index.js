'use strict';

/* ========== PŘIJÍMÁNÍ ZPRÁV ========== */

const messagesElement = document.querySelector('#messages');

const renderMessage = (name, message, date) => {
  // @TODO: funkce vracející HTML zprávy
};

const renderMessages = (messages) => {
  // @TODO: funkce vypisující zprávy na stránku
};

const updateMessages = () => {
  // @TODO: funkce stahující zprávy ze server a přidávající je na stránku
};

setInterval(updateMessages, 2000); // Každé dvě sekundy zavolá updateMessages

/* ========== ODESÍLÁNÍ ZPRÁV ========== */

const nameInputElement = document.querySelector('#name-input');
const messageInputElement = document.querySelector('#message-input');

const onSubmit = (event) => {
  event.preventDefault(); // Zamezí přesměrování na jinou stránku při odesílání formuláře

  console.log(
    'Data:',
    JSON.stringify({
      name: nameInputElement.value,
      message: messageInputElement.value,
    }),
  );

  // @TODO: odešli zprávu na server
};

document.querySelector('#send-form').addEventListener('submit', onSubmit);
