const speakBtn = document.getElementById("speakBtn");
speakBtn.addEventListener("click", speakNow);

const styleSheet = document.getElementById("styleSheet");

// SpeechRecognition

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log("Started..");
};

recognition.onresult = function (e) {
  const resultIndex = e.resultIndex;

  const { transcript } = e.results[resultIndex][0];
  console.log(transcript);
  speakOutLoud(transcript);
};

function speakNow() {
  recognition.start();
}

function speakOutLoud(message) {
  let whatToSpeak = message;

  if  (whatToSpeak.includes("open snake game")) {
    window.open("https://dhanushaditya.github.io/snake-game/", "_blank");
} else if (whatToSpeak.includes("open 2048 game")) {
    window.open("https://2048kidszone.netlify.app/", "_blank");
}else if (whatToSpeak.includes("open memory game")) {
        window.open("https://memorygamebyaashu.netlify.app/", "_blank");
}else if (whatToSpeak.includes("open hit game")) {
        window.open("https://wack-a-mole-byaashu.netlify.app/", "_blank");
}else if (whatToSpeak.includes("open Blackjack")) {
        window.open("https://blackjackbyaashu.netlify.app/", "_blank");
}else if (whatToSpeak.includes("open Rock paper scissor")) {
        window.open("https://kushall0603.github.io/rock-paper-scissor-playinggame/", "_blank");
}else if (whatToSpeak.includes("open jump cat")) {
        window.open("https://scratch.mit.edu/projects/752110662", "_blank");
}else if (whatToSpeak.includes("open quiz")) {
        window.open("https://kidszonequiz.netlify.app/", "_blank");
}else if (whatToSpeak.includes("open Paint")) {
        window.open("https://kushall0603.github.io/drawing.github.io/", "_blank");
}else if (whatToSpeak.includes("open GPS")) {
        window.open("https://kidszonegps.netlify.app/", "_blank");
}else if (whatToSpeak.includes("open video crafts")) {
        window.open("https://dhanushaditya.github.io/video_crafts/", "_blank");
}else if (whatToSpeak.includes("open Educational videos")) {
        window.open("https://dhanushaditya.github.io/Educational_videos/", "_blank");
}else if (whatToSpeak.includes("open Black Box game")) {
        window.open("https://ksaishreya.github.io/BLACKBOX-ESCAPE-/", "_blank");
  }

  // The action of saying or expressing something aloud..
  const SpeechSynthesisUtterance =
    window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance;

  const utterance = new SpeechSynthesisUtterance();

  utterance.volume = 1; // 100%
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.text = whatToSpeak;

  // Artificial production of human speech
  const speechSynthesis =
    window.speechSynthesis || window.webkitspeechSynthesis;

  speechSynthesis.speak(utterance);
}