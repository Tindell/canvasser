// mountain.js
function mountain(canvas, title) {
    const ctx = canvas.getContext("2d");
  
    // Background
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  
    // Mountain
    ctx.beginPath();
    ctx.moveTo(0, canvas.height);
    ctx.lineTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.closePath();
    ctx.fillStyle = "#8B4513";
    ctx.fill();
  
    // Snow Cap
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.lineTo(canvas.width / 3, canvas.height / 1.5);
    ctx.lineTo(canvas.width / 1.5, canvas.height / 1.5);
    ctx.closePath();
    ctx.fillStyle = "#FFF";
    ctx.fill();
  
    // Sun
    ctx.beginPath();
    ctx.arc(canvas.width - 100, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFF";
    ctx.fill();
  }
  