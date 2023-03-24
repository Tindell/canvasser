// ladybug.js
function ladybug(canvas, title) {
  const ctx = canvas.getContext("2d");

  // Body
  ctx.beginPath();
  ctx.ellipse(100, 100, 40, 60, 0, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.stroke();

  // Head
  ctx.beginPath();
  ctx.arc(100, 40, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.stroke();

  // Eyes
  ctx.beginPath();
  ctx.arc(90, 35, 3, 0, 2 * Math.PI);
  ctx.arc(110, 35, 3, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // Antennas
  ctx.beginPath();
  ctx.moveTo(95, 30);
  ctx.quadraticCurveTo(85, 20, 75, 30);
  ctx.moveTo(105, 30);
  ctx.quadraticCurveTo(115, 20, 125, 30);
  ctx.stroke();
  
  // Spots
  const spots = [
    { x: 80, y: 90, radius: 6 },
    { x: 120, y: 90, radius: 6 },
    { x: 90, y: 70, radius: 5 },
    { x: 110, y: 70, radius: 5 },
    { x: 100, y: 50, radius: 4 },
  ];

  ctx.beginPath();
  for (const spot of spots) {
    ctx.arc(spot.x, spot.y, spot.radius, 0, 2 * Math.PI);
  }
  
  ctx.fillStyle = "black";
  ctx.fill();
}
