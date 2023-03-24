function butterfly(canvas, title) {
    const context = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const wingRadius = 70;
    const bodyRadius = 20;
  
    context.beginPath();
    context.fillStyle = 'orange';
    context.arc(centerX, centerY, wingRadius, 0, Math.PI * 2);
    context.fill();
  
    context.beginPath();
    context.fillStyle = 'black';
    context.arc(centerX - wingRadius / 2, centerY, bodyRadius, 0, Math.PI * 2);
    context.arc(centerX + wingRadius / 2, centerY, bodyRadius, 0, Math.PI * 2);
    context.fill();
  }