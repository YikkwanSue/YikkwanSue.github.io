function navigateTo(page) {
  if (page === 'home') {
    window.open('index.html', '_blank');
  } else if (page === 'ideas') {
    window.open('inspiration/index.html', '_blank');
  } else if (page === 'brief') {
    window.open('game/index.html', '_blank');
  }
}

// Staff

document.addEventListener("DOMContentLoaded", function() {
  // Get references to the images
  const ownerImage = document.getElementById('ownerImage');
  const chiefImage = document.getElementById('chiefImage');
  const managerImage = document.getElementById('managerImage');

  // Add event listeners for mouseover and mouseout to each image
  ownerImage.addEventListener('mouseover', function() {
    ownerImage.src = 'owner1.png';
  });

  ownerImage.addEventListener('mouseout', function() {
    ownerImage.src = 'owner.png';
  });

  chiefImage.addEventListener('mouseover', function() {
    chiefImage.src = 'chief1.png';
  });

  chiefImage.addEventListener('mouseout', function() {
    chiefImage.src = 'chief.png';
  });

  managerImage.addEventListener('mouseover', function() {
    managerImage.src = 'manager1.png';
  });

  managerImage.addEventListener('mouseout', function() {
    managerImage.src = 'manager.png';
  });
  
});

  // Get references to the audio elements
  const ownerAudio = new Audio('owner.mp3');
  const chiefAudio = new Audio('chief.mp3');
  const managerAudio = new Audio('manager.mp3');

 // Add click event listeners to play audio files
 ownerImage.addEventListener('click', function() {
  ownerAudio.play();
});

chiefImage.addEventListener('click', function() {
  chiefAudio.play();
});

managerImage.addEventListener('click', function() {
  managerAudio.play();
});




document.addEventListener("DOMContentLoaded", function() {
  var text = " and our bakers are true artisans dedicated to their craft. We support local farmers and suppliers, giving back to our community with every bake.";
  var container = document.querySelector(".body-text");
  var index = 0;

  function typeWriter() {
    if (index < text.length) {
      container.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Adjust typing speed (milliseconds)
    }
  }

  typeWriter();
});




// JavaScript for interactive effects
  const numbers = document.querySelectorAll('.number');

  // Add event listeners to each number
  numbers.forEach(number => {
    number.addEventListener('mouseenter', () => {
      number.querySelector('p').style.color = 'yellow'; // Change number color
    });

    number.addEventListener('mouseleave', () => {
      number.querySelector('p').style.color = '#333'; // Revert number color
    });
  });

  document.getElementById("logo").addEventListener("mouseenter", function() {
    this.src = "logo1.png";
  });
  
  document.getElementById("logo").addEventListener("mouseleave", function() {
    this.src = "logo.png";
  });
  
  