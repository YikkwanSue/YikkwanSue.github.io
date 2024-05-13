document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", showMessage);

  function showMessage() {
    const rating = document.getElementById("myTemp").value;
    if (rating !== "") {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = `
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Thank you for rating!</p>
        </div>
      `;
      document.body.appendChild(modal);

      const closeButton = document.querySelector(".close");
      closeButton.addEventListener("click", function() {
        modal.style.display = "none";
      });

      window.addEventListener("click", function(event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      });
    } else {
      alert("Please enter a rating before submitting.");
    }
  }
});
