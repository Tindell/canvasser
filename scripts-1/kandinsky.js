function kandinsky(canvas, title) {
  const ctx = canvas.getContext("2d");
  
  // Set canvas dimensions
  canvas.width = 500;
  canvas.height = 500;
  
  // Define colors
  const colors = [    "#FF5733",    "#C70039",    "#900C3F",    "#581845",    "#FFC300",    "#DAF7A6",    "#FF5733",    "#C70039"  ];
  
  // Create random shapes
  for(let i = 0; i < 50; i++) {
    // Set random color and transparency
    const color = colors[Math.floor(Math.random() * colors.length)];
    const alpha = Math.random();
    ctx.fillStyle = `rgba(${hexToRgb(color)}, ${alpha})`;
    
    // Draw random shape
    const shape = Math.random();
    if(shape < 0.33) { // draw a circle
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 100;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    } else if (shape < 0.67) { // draw a rectangle
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const width = Math.random() * 100;
      const height = Math.random() * 100;
      ctx.fillRect(x, y, width, height);
    } else { // draw a triangle
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const x2 = Math.random() * canvas.width;
      const y2 = Math.random() * canvas.height;
      const x3 = Math.random() * canvas.width;
      const y3 = Math.random() * canvas.height;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fill();
    }
  }
  
  // Add title
  ctx.fillStyle = "#000000";
  ctx.font = "30px Arial";
  ctx.fillText(title, 20, canvas.height - 30);
}

function hexToRgb(hex) {
  // Convert hex color to rgb values
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `${r}, ${g}, ${b}`;
}
