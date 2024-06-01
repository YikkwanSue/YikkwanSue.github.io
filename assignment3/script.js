

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


