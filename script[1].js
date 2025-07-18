function insertCoin() {
  document.getElementById("status").innerText = "Coin accepted! Processing...";
  startProcess();
}

function insertCard() {
  document.getElementById("status").innerText = "Card swiped! Processing...";
  startProcess();
}

function startProcess() {
  document.getElementById("process").classList.remove("hidden");
  const steps = ["step1", "step2", "step3", "step4", "step5", "step6"];
  steps.forEach((id, i) => {
    setTimeout(() => {
      document.getElementById(id).style.color = "#00796b";
      document.getElementById(id).style.fontWeight = "bold";
    }, i * 700);
  });
}

function dispense() {
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("status").innerText = "Dispensing complete.";
}