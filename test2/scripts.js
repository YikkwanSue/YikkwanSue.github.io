function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggable = document.getElementById(data);
    event.target.appendChild(draggable);
    
    // Check if the draggable is dropped in the target area
    var targetArea = document.querySelector('.target-area');
    if (targetArea.contains(draggable)) {
      alert("You win!");
    }
  }
  