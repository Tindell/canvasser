// circle.js
function butterfly_unicorn(canvas, title) {
  const ctx = canvas.getContext("2d");

  // Body
  ctx.beginPath();
  ctx.ellipse(100, 100, 50, 25, 0, 0, 2 * Math.PI);
  ctx.stroke();

  // Head
  ctx.beginPath();
  ctx.arc(150, 75, 25, 0, 2 * Math.PI);
  ctx.stroke();

  // Eye
  ctx.beginPath();
  ctx.arc(160, 70, 3, 0, 2 * Math.PI);
  ctx.fill();

  // Nose
  ctx.beginPath();
  ctx.moveTo(147, 85);
  ctx.lineTo(157, 85);
  ctx.stroke();

  // Horn
  ctx.beginPath();
  ctx.moveTo(150, 50);
  ctx.lineTo(170, 30);
  ctx.stroke();

  // Legs
  ctx.beginPath();
  ctx.moveTo(75, 100);
  ctx.lineTo(75, 150);
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 150);
  ctx.moveTo(125, 100);
  ctx.lineTo(125, 150);
  ctx.moveTo(150, 100);
  ctx.lineTo(150, 150);
  ctx.stroke();

  // Tail
  ctx.beginPath();
  ctx.moveTo(50, 100);
  ctx.quadraticCurveTo(20, 90, 50, 70);
  ctx.stroke();

  // Mane
  ctx.beginPath();
  ctx.moveTo(120, 50);
  ctx.quadraticCurveTo(100, 45, 120, 40);
  ctx.moveTo(125, 60);
  ctx.quadraticCurveTo(105, 55, 125, 50);
  ctx.stroke();

  // Butterfly body
  ctx.beginPath();
  ctx.ellipse(300, 75, 10, 40, 0, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();

  // Butterfly wings
  ctx.beginPath();
  ctx.moveTo(290, 75);
  ctx.quadraticCurveTo(270, 55, 290, 35);
  ctx.quadraticCurveTo(310, 55, 290, 75);
  ctx.moveTo(310, 75);
  ctx.quadraticCurveTo(330, 55, 310, 35);
  ctx.quadraticCurveTo(290, 55, 310, 75);
  ctx.fillStyle = "blue";
  ctx.fill();

  // Butterfly Antennas
  ctx.beginPath();
  ctx.moveTo(300, 35);
  ctx.quadraticCurveTo(290, 20, 280, 35);
  ctx.moveTo(300, 35);
  ctx.quadraticCurveTo(310, 20, 320, 35);
  ctx.stroke();
}
