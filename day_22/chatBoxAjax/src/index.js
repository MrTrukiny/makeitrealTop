import '../css/style.css';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'src/index.html',
      hash: true
    }),
    new MiniCSSExtractPlugin()
  ],
  module: {
    rules: [
      { 
        test: /\.css$/, 
        loader: [
          MiniCSSExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  }
}

// Messages
const messages = [
  { name: "Eduardo Hernández", date: "Oct 23 09:39", body: "Este es el primer mensaje" },
  { name: "Fabio Fonseca A.", date: "Oct 23 09:39", body: "Este es el segundo mensaje"},
  { name: "Fabio Fonseca A.", date: "Oct 23 09:39", body: "Este es el tercer mensaje"},
  { name: "Eduardo Hernández", date: "Oct 23 09:39", body: "Este es el cuarto mensaje"},
  { name: "Fabio Fonseca A.", date: "Oct 23 09:39", body: "Este es el quinto mensaje"},
  { name: "Eduardo Hernández", date: "Oct 23 09:39", body: "Este es el sexto mensaje"},
];

//Add new messages from server data

const loadMessages = (messages) => {
  messages.forEach(message => {
    const target = document.querySelector('div.chat');
    const div = document.createElement('div');
    div.classList.add("message");
    div.innerHTML = `<p class="title">${message.name} <span>${message.date}</span></p><p class="text">${message.body}</p>`;
    target.appendChild(div);
  });
}

loadMessages(messages);

//Add new message from imput

let input = document.getElementById("send");

input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13 && input.value !== "") {
    const target = document.querySelector('div.chat');
    const div = document.createElement('div');
    div.classList.add("message");
    div.innerHTML = `<p class="title">Eduardo Hernández <span>${date}</span></p><p class="text">${input.value}</p>`;
    target.appendChild(div);
    input.value = "";
    getLastMessages();
  }
});

// Get Date in new Messages

let d = new Date();
const date = `${Months(d.getMonth())} ${d.getDate()} ${addZero(d.getHours())}:${addZero(d.getMinutes())}`

function Months(m) {
  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return month[m];
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// Scroll to last message

const lastMessage = document.getElementById('chat');

function getLastMessages() {
  let shouldScroll = lastMessage.scrollTop + lastMessage.clientHeight === lastMessage.scrollHeight;
  if (!shouldScroll) {
    scrollToBottom();
  }
}

function scrollToBottom() {
  lastMessage.scrollTop = lastMessage.scrollHeight;
}


// Load Messages from Server by UserName

const userMaria = document.getElementById('maria'),
      userMauricio = document.getElementById('mauricio'),
      userPedro = document.getElementById('pedro');

userPedro.addEventListener('click', () => {
  const url = 'https://makeitreal.s3.amazonaws.com/chats/pedro.json'
  userSelected(url);
  changeColor(userPedro);
  removeColor(userMaria);
  removeColor(userMauricio);
});

userMaria.addEventListener('click', () => {
  const url = 'https://makeitreal.s3.amazonaws.com/chats/maria.json'
  userSelected(url);
  changeColor(userMaria);
  removeColor(userMauricio);
  removeColor(userPedro);
});

userMauricio.addEventListener('click', () => {
  const url = 'https://makeitreal.s3.amazonaws.com/chats/mauricio.json'
  userSelected(url);
  changeColor(userMauricio);
  removeColor(userMaria);
  removeColor(userPedro);
});

// Load messages to data from server

function userSelected(url) {
  fetch(url)
    .then(function(response) {
      response.json()
      .then(data => {
        cleanChat();
        loadMessages(data);
      });
  });
}
  
// Clean all Messages when a User is Selected

function cleanChat() {
  let window = document.querySelector(".chat");
  if(window.childElementCount > 0){
    while (window.firstChild) {
    window.firstChild.remove();
    }     
  }
}


// Change Color from Active User

const changeColor = (target) => {
  target.classList.add("active");
}

// Remove Color from Inactive Users

const removeColor = (target) => {
  target.classList.remove("active");
}

