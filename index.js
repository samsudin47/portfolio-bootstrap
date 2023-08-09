// typing home
const text = "Frontend Developer";
const typedTextElement = document.getElementById("typing");
let index = 0;

function startTyping() {
  const typingInterval = setInterval(() => {
    typedTextElement.textContent = text.slice(0, index);
    index++;

    if (index > text.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        startDeleting();
      }, 1000);
    }
  }, 100);
}

function startDeleting() {
  const deletingInterval = setInterval(() => {
    typedTextElement.textContent = text.slice(0, index);
    index--;

    if (index === 0) {
      clearInterval(deletingInterval);
      setTimeout(() => {
        startTyping();
      }, 1000);
    }
  }, 100);
}

startTyping();

// typing home end
