const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

const codeInput = []

function init() {
  document.body.addEventListener('keydown', checkCode)
}

function checkCode(event) {
  codeInput.push(event.key)
  if (codeInput[codeInput.length - 1] !== codes[codeInput.length - 1]){
    codeInput.length = 0
  }
  if (codeInput.length === codes.length){
    alert("KOJIMA IS GOD!")
    codeInput.length = 0
  }
}
