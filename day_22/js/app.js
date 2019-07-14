// Messages
const messages = [
  { name: "Eduardo Hernández", date: "Oct 23 09:39", body: "Este es el primer mensaje" },
  { name: "Fabio Fonseca A.", date: "Oct 23 09:39", body: "Este es el segundo mensaje"},
  { name: "Fabio Fonseca A.", date: "Oct 23 09:39", body: "Este es el tercer mensaje"},
  { name: "Eduardo Hernández", date: "Oct 23 09:39", body: "Este es el cuarto mensaje"},
  { name: "Fabio Fonseca A.", date: "Oct 23 09:39", body: "Este es el quinto mensaje"},
  { name: "Eduardo Hernández", date: "Oct 23 09:39", body: "Este es el sexto mensaje"},
];

//Add new message
messages.forEach(message => {
  const target = document.querySelector('div.chat');
  const div = document.createElement('div');
  div.classList.add("message");
  div.innerHTML = `<p class="title">${message.name} <span>${message.date}</span></p><p class="text">${message.body}</p>`;
  target.appendChild(div);
});

// Date 
let d = new Date();
const date = `${Months(d.getMonth())} ${d.getDate()} ${d.getHours()}:${d.getMinutes()}`

function Months(m) {
  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return month[m];
}

//Add new message from imput
let input = document.getElementById("send");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 && input.value !== "") {
    const target = document.querySelector('div.chat');
    const div = document.createElement('div');
    div.classList.add("message");
    div.innerHTML = `<p class="title">Eduardo Hernández <span>${date}</span></p><p class="text">${input.value}</p>`;
    target.appendChild(div);
    document.getElementById('send').value = "";
    getMessages();
  }
});

// Scroll to last message
const lastMessage = document.getElementById('chat');

function getMessages() {
  let shouldScroll = lastMessage.scrollTop + lastMessage.clientHeight === lastMessage.scrollHeight;
  if (!shouldScroll) {
    scrollToBottom();
  }
}

function scrollToBottom() {
  lastMessage.scrollTop = lastMessage.scrollHeight;
}
