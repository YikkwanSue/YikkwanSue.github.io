document.getElementById("inputText").addEventListener("input", function() {
    var inputValue = this.value.trim().toLowerCase();
    var startBtn = document.getElementById("startBtn");
    if (inputValue === "yeah!") {
      startBtn.removeAttribute("disabled");
    } else {
      startBtn.setAttribute("disabled", "disabled");
    }
  });
  
  document.getElementById("startBtn").addEventListener("click", function() {
    window.location.href = "content"; // Redirect to the main page
  });