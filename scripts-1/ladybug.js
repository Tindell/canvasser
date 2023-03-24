// ladybug.js
function ladybug(canvas) {
    const ctx = canvas.getContext("2d");
  
    // Body
    ctx.beginPath();
    ctx.fillStyle = "#FF0000";
    ctx.arc(100, 100, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
  
    // Head
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(70, 70, 20, 0, 2 * Math.PI);
    ctx.fill();
  
    // Spots
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(80, 90, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(100, 75, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(120, 90, 5, 0, 2 * Math.PI);
    ctx.fill();
  
    // Antennae
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.moveTo(70, 60);
    ctx.lineTo(60, 50);
    ctx.moveTo(70, 60);
    ctx.lineTo(80, 50);
    ctx.stroke();
  }
  