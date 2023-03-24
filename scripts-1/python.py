function python(canvas, title) {
  const ctx = canvas.getContext("2d");

  // Draw body
  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.lineTo(200, 200);
  ctx.lineTo(250, 100);
  ctx.lineTo(200, 50);
  ctx.lineTo(150, 50);
  ctx.lineTo(100, 100);
  ctx.closePath();
  ctx.fillStyle = "#4B8BBE";
  ctx.fill();

  // Draw head
  ctx.beginPath();
  ctx.arc(250, 75, 25, 0, 2*Math.PI);
  ctx.fillStyle = "#F9DC24";
  ctx.fill();

  // Draw eyes
  ctx.beginPath();
  ctx.arc(245, 70, 5, 0, 2*Math.PI);
  ctx.arc(255, 70, 5, 0, 2*Math.PI);
  ctx.fillStyle = "#000000";
  ctx.fill();

  // Draw tongue
  ctx.beginPath();
  ctx.moveTo(270, 80);
  ctx.quadraticCurveTo(280, 90, 270, 100);
  ctx.lineTo(270, 80);
  ctx.fillStyle = "#FF4E50";
  ctx.fill();

  // Draw title
  ctx.font = "30px Arial";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.fillText(title, canvas.width/2, 50);
}