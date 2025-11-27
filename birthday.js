/* BOOT ANIMATION */
setTimeout(() => {
  document.getElementById("bootScreen").style.display = "none";
  document.getElementById("mainContent").style.display = "block";
}, 4200);

/* AI VOICE */
function speak() {
  let text = "Happy Birthday, Antony Mwendwa";
  const message = new SpeechSynthesisUtterance(text);
  message.pitch = 1;
  message.rate = 0.9;
  message.volume = 1;
  message.voice = speechSynthesis.getVoices()[2];
  speechSynthesis.speak(message);
  document.getElementById("voiceMessage").style.display = "block";
}

/* CONFETTI */
function startConfetti() {
  for (let i=0; i<120; i++) {
    let div = document.createElement("div");
    div.style.position="fixed";
    div.style.width="6px";
    div.style.height="15px";
    div.style.background=`hsl(${180+Math.random()*80},100%,60%)`;
    div.style.top="-10px";
    div.style.left=Math.random()*100+"vw";
    div.style.animation="drop 3s linear forwards";
    document.body.appendChild(div);
    setTimeout(()=>div.remove(), 3000);
  }
}

/* MUSIC */
function playMusic() {
  let audio = new Audio("https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Scott_Holmes_Music/Future_Bass/Scott_Holmes_Music_-_Future_Bass.mp3");
  audio.play();
}

/* QUIZ */
function checkQuiz() {
  let a = document.getElementById("q1").value.toLowerCase();
  document.getElementById("quizResult").innerHTML =
    (a.includes("phone") || a.includes("pc") || a.includes("laptop"))
    ? "Correct! 🎉"
    : "Not quite — try again!";
}

/* GUEST BOOK */
function addMessage() {
  let text = document.getElementById("guestInput").value;
  if (!text) return;
  let box = document.createElement("div");
  box.className = "messageBox";
  box.innerText = text;
  document.getElementById("guestMessages").appendChild(box);
  document.getElementById("guestInput").value="";
}

/* TERMINAL MODE */
function toggleTerminal() {
  let t = document.getElementById("terminal");
  t.style.display = t.style.display === "none" ? "block" : "none";
}
