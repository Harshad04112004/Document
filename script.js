function Ditles(){
    window.alert("your data save in document.")
 }
 const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatHistory = document.getElementById('chat-history');
 sendButton.addEventListener('click', function() {
const message = messageInput.value;
if (message.trim() !== '') {
addMessage(message, 'user');
messageInput.value = '';
chatHistory.scrollTop = chatHistory.scrollHeight; // Scroll to bottom
}
});
 function addMessage(message, sender) {
const messageElement = document.createElement('div');
messageElement.classList.add('message');
let messageContent;
if (sender === 'user') {
messageContent = `You: ${message}`;
} else {
messageContent = `Bot: ${message}`; // Replace with your bot logic
}
messageElement.textContent = messageContent;
chatHistory.appendChild(messageElement);
}