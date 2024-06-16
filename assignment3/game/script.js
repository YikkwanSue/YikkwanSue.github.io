document.addEventListener('DOMContentLoaded', () => {
  const dropBox = document.getElementById('dropBox');
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let isDrawing = false;

  // Handle drag and drop
  document.querySelectorAll('.draggable').forEach(img => {
      img.addEventListener('dragstart', event => {
          event.dataTransfer.setData('text/plain', event.target.id);
      });
  });

  dropBox.addEventListener('dragover', event => {
      event.preventDefault();
  });

  dropBox.addEventListener('drop', event => {
      event.preventDefault();
      const id = event.dataTransfer.getData('text');
      const img = document.getElementById(id);
      const rect = dropBox.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const image = new Image();
      image.src = img.src;
      image.onload = () => {
          const scaleFactor = 0.5; // Scale factor to reduce the image size
          const scaledWidth = image.width * scaleFactor;
          const scaledHeight = image.height * scaleFactor;
          ctx.drawImage(image, x - scaledWidth / 2, y - scaledHeight / 2, scaledWidth, scaledHeight);
      };
  });

  // Handle drawing on canvas
  canvas.addEventListener('mousedown', () => {
    isDrawing = true;
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', event => {
    if (isDrawing) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.strokeStyle = currentColor;
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
});

// Handle color change
document.querySelectorAll('.color').forEach(colorDiv => {
    colorDiv.addEventListener('click', () => {
        currentColor = colorDiv.getAttribute('data-color');
    });
});
});

// Handle image download
const downloadButton = document.getElementById('downloadButton');
downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'customized_icon.png';
    link.click();
});
