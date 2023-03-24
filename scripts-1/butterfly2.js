// butterfly.js
function butterfly2(canvas) {
  const ctx = canvas.getContext("2d");

  // Body
  ctx.beginPath();
  ctx.fillStyle = "#000";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.arc(100, 100, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  // Wings
  ctx.beginPath();
  ctx.fillStyle = "#F00";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.moveTo(80, 80);
  ctx.quadraticCurveTo(110, 60, 140, 80);
  ctx.lineTo(120, 110);
  ctx.quadraticCurveTo(110, 100, 100, 110);
  ctx.quadraticCurveTo(90, 100, 80, 110);
  ctx.lineTo(60, 80);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.fillStyle = "#F00";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.moveTo(120, 80);
  ctx.quadraticCurveTo(90, 60, 60, 80);
  ctx.lineTo(80, 110);
  ctx.quadraticCurveTo(90, 100, 100, 110);
  ctx.quadraticCurveTo(110, 100, 120, 110);
  ctx.lineTo(140, 80);
  ctx.fill();
  ctx.stroke();
  
  // Antennae
  ctx.beginPath();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 1;
  ctx.moveTo(80, 80);
  ctx.lineTo(70, 60);
  ctx.moveTo(120, 80);
  ctx.lineTo(130, 60);
  ctx.stroke();
}
