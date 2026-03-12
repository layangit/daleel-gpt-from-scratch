const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

const WELCOME_MESSAGE = "هلا وسهلا فيك، كيف ممكن اخدمك؟";
const UNKNOWN_MESSAGE = "ما أعرف الإجابة بشكل دقيق حاليا، لكن أقدر أساعدك في أسئلة المفاهيم الأساسية عن الذكاء الاصطناعي والتقنية.";

let qaMap = new Map();

function normalizeQuestion(text) {
  return text.trim().replace(/\s+/g, " ");
}

function addMessage(role, text, label = "") {
  const row = document.createElement("div");
  row.className = `message-row ${role}`;

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";

  if (label) {
    const meta = document.createElement("span");
    meta.className = "message-meta";
    meta.textContent = label;
    bubble.appendChild(meta);
  }

  const content = document.createElement("div");
  content.textContent = text;
  bubble.appendChild(content);

  row.appendChild(bubble);
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTyping() {
  const row = document.createElement("div");
  row.className = "message-row bot";
  row.id = "typingRow";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";

  const meta = document.createElement("span");
  meta.className = "message-meta";
  meta.textContent = "دليل";
  bubble.appendChild(meta);

  const typing = document.createElement("div");
  typing.className = "typing";
  typing.innerHTML = "<span></span><span></span><span></span>";
  bubble.appendChild(typing);

  row.appendChild(bubble);
  chatMessages.appendChild(row);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTyping() {
  const row = document.getElementById("typingRow");
  if (row) row.remove();
}

function getCuratedAnswer(question) {
  return qaMap.get(normalizeQuestion(question)) || null;
}

async function loadCuratedQA() {
  const response = await fetch("./static/demo_qa.json");
  const curatedQA = await response.json();

  qaMap = new Map(
    curatedQA.map(item => [normalizeQuestion(item.question), item.answer])
  );
}

function handleUserQuestion(question) {
  const cleanQuestion = normalizeQuestion(question);
  if (!cleanQuestion) return;

  addMessage("user", cleanQuestion, "أنت");
  addTyping();

  setTimeout(() => {
    removeTyping();
    const answer = getCuratedAnswer(cleanQuestion) || UNKNOWN_MESSAGE;
    addMessage("bot", answer, "دليل");
  }, 420);
}

chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const question = chatInput.value;
  if (!question.trim()) return;

  handleUserQuestion(question);
  chatInput.value = "";
});

window.addEventListener("DOMContentLoaded", async () => {
  addMessage("bot", WELCOME_MESSAGE, "دليل");
  await loadCuratedQA();
});