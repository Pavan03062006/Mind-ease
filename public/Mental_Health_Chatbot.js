document.getElementById('send-btn').addEventListener('click', function() {
    let userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        appendMessage(userInput, 'user');
        generateBotReply(userInput);
    }
});

document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function generateBotReply(userMessage) {
    const botReply = getBotResponse(userMessage);
    setTimeout(() => {
        appendMessage(botReply, 'bot');
    }, 1000); // Simulate delay
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Simple predefined responses based on keywords
    if (lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hello')) {
        return 'Hello! How can I help you today? 😊';
    } else if (lowerCaseMessage.includes('sad') || lowerCaseMessage.includes('down')) {
        return 'I’m really sorry you’re feeling that way. Would you like to talk about it? 💙';
    } else if (lowerCaseMessage.includes('happy') || lowerCaseMessage.includes('good')) {
        return 'That’s awesome to hear! Keep up the positive energy! 🌟';
    } else if (lowerCaseMessage.includes('feeling') && lowerCaseMessage.includes('anxious')) {
        return 'I understand how anxiety can be overwhelming. Take a deep breath, and I’m here to listen. 🌱';
    } else if (lowerCaseMessage.includes('alone') || lowerCaseMessage.includes('lonely')) {
        return 'I’m here for you, you’re not alone. 💛 Sometimes talking can help ease the loneliness.';
    } else if (lowerCaseMessage.includes('thanks') || lowerCaseMessage.includes('thank you')) {
        return 'You’re very welcome! Don’t hesitate to reach out if you need anything. 😊';
    } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
        return 'Goodbye! Take care, and remember, I’m always here if you need to talk. 🌸';
    } else if (lowerCaseMessage.includes('help')) {
        return 'I’m here to help. Tell me more about what’s bothering you, and I’ll do my best to listen.';
    } else if (lowerCaseMessage.includes('joke')) {
        return 'Sure! Here’s a light joke for you: Why don’t skeletons fight each other? They don’t have the guts! 😄';
    } else if (lowerCaseMessage.includes('music')) {
        return 'Music can be a great way to uplift your mood! What kind of music do you enjoy? 🎶';
    } else if (lowerCaseMessage.includes('advice')) {
        return 'My advice: Take things one step at a time. Don’t forget to take care of yourself and take breaks when needed. 🌿';
    } else {
        return 'I’m here for you. Tell me more about how you are feeling, I’m listening. 💬';
    }
}

